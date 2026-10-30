import { site } from "@/lib/site";

/** `field` names the input to fix, so the form can focus and highlight it. */
export type LeadState = { error?: string; field?: string };

/** Fields copied into the email, in order, with their length limits. */
const fields = {
  name: { label: "Name", max: 120 },
  phone: { label: "Phone", max: 40 },
  email: { label: "Email", max: 255 },
  address: { label: "Address", max: 200 },
  position: { label: "Position", max: 200 },
  experience: { label: "Experience", max: 1500 },
  message: { label: "Message", max: 3000 },
} as const;

/** A US number of 10 digits (a leading 1 is dropped) as "(704) 555-0123", or "" if it isn't one. */
function formatPhone(input: string) {
  if (!/^[+\d\s().-]+$/.test(input)) return "";
  const digits = input.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  const match = /^([2-9]\d\d)([2-9]\d\d)(\d{4})$/.exec(digits);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : "";
}

const emailPattern = /^[^\s@]+@(?:[a-z\d-]+\.)+[a-z]{2,}$/i;

/** A house number and a street name, e.g. "123 Main St". */
const addressPattern = /^(?=.*\d)(?=.*\p{L}{2}).{6,}$/u;

/**
 * Validates a quote request or job application and emails it to the owner
 * through Web3Forms (https://web3forms.com). Runs in the browser: Web3Forms
 * only accepts server-side submissions on a paid plan with a fixed server IP.
 * Configure with WEB3FORMS_ACCESS_KEY (built into the page by next.config.ts);
 * leads go to the inbox the key was created for.
 */
export async function sendLead(formData: FormData): Promise<LeadState> {
  // Bots fill the hidden "website" field; let them think it worked.
  if (formData.get("website")) return {};

  const value = (key: keyof typeof fields) =>
    String(formData.get(key) ?? "")
      .replaceAll("\0", "")
      .slice(0, fields[key].max)
      .trim();

  const hiring = formData.get("kind") === "hiring";
  const name = value("name");
  const phone = formatPhone(value("phone"));
  const email = value("email");

  // In the order the fields appear, so the first problem is the one shown.
  const checks: [field: string, ok: boolean, error: string][] = [
    ["name", /\p{L}.*\p{L}/u.test(name), "Please add your full name."],
    ["phone", Boolean(phone), "Please enter a valid 10-digit phone number, like (704) 555-0123."],
    ["email", emailPattern.test(email), "Please enter a valid email address, like name@example.com."],
    [
      "address",
      hiring || addressPattern.test(value("address")),
      "Please enter your street address, like 123 Main St, Charlotte, NC.",
    ],
    ["consent", Boolean(formData.get("consent")), "Please agree to the terms & conditions to continue."],
  ];
  const problem = checks.find(([, ok]) => !ok);
  if (problem) return { field: problem[0], error: problem[2] };

  const failed = { error: `Your request could not be sent. Please call us at ${site.phone.display}.` };
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("Lead not sent: WEB3FORMS_ACCESS_KEY is not set.");
    return failed;
  }

  const kind = hiring ? "New job application" : "New quote request";
  const details = Object.fromEntries(
    (Object.keys(fields) as (keyof typeof fields)[])
      .map((key) => [fields[key].label, key === "phone" ? phone : value(key)])
      .filter(([, text]) => text)
      .concat([["Agreed to terms & text messages", "Yes"]]),
  );

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `${kind} - ${name}`,
        from_name: `${site.name} Website`,
        replyto: email,
        ...details,
      }),
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.success) {
      console.error(`Lead not sent (${res.status}):`, result?.message ?? result);
      return failed;
    }
    return {};
  } catch (error) {
    console.error("Lead not sent:", error);
    return failed;
  }
}
