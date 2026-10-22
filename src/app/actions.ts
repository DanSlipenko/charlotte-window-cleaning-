"use server";

import { redirect } from "next/navigation";
import { sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

export type LeadState = { error?: string };

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

/** Quote requests and job applications both land here and email the owner. */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Bots fill the hidden "website" field; let them think it worked.
  if (formData.get("website")) redirect("/thank-you");

  const value = (key: keyof typeof fields) =>
    String(formData.get(key) ?? "")
      .replaceAll("\0", "")
      .slice(0, fields[key].max)
      .trim();

  const name = value("name");
  const phone = value("phone");
  const email = value("email");
  if (!name || !/^[+\d\s().-]{7,40}$/.test(phone)) {
    return { error: "Please add your name and a valid phone number." };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please check the email address." };
  }
  if (!formData.get("consent")) {
    return { error: "Please agree to the terms & conditions to continue." };
  }

  const kind = formData.get("kind") === "hiring" ? "New job application" : "New quote request";
  const lines = (Object.keys(fields) as (keyof typeof fields)[])
    .map((key) => [fields[key].label, value(key)])
    .filter(([, text]) => text)
    .map(([label, text]) => `${label}: ${text}`)
    .concat("Agreed to terms & text messages: Yes");

  const sent = await sendEmail({
    subject: `${kind} - ${name.replace(/[\r\n]+/g, " ")}`,
    text: `${kind} from the ${site.name} website\n\n${lines.join("\n")}\n`,
    replyTo: email || undefined,
  });
  if (!sent) {
    return { error: `Your request could not be sent. Please call us at ${site.phone.display}.` };
  }

  redirect("/thank-you");
}
