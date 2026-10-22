/**
 * Sends a plain-text email through Resend's REST API. Configure with:
 *   RESEND_API_KEY   — required; leads cannot be delivered without it
 *   LEAD_EMAIL_TO    — comma-separated recipients (default denis@foundersclt.com)
 *   LEAD_EMAIL_FROM  — a sender on a domain verified in Resend
 * Returns false (and logs why) instead of throwing, so the form can tell the
 * visitor to call instead.
 */
export async function sendEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Lead email not sent: RESEND_API_KEY is not set.");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_EMAIL_FROM ?? "Founders Website <onboarding@resend.dev>",
        to: (process.env.LEAD_EMAIL_TO ?? "denis@foundersclt.com").split(",").map((to) => to.trim()),
        subject,
        text,
        reply_to: replyTo,
      }),
    });
    if (!res.ok) console.error(`Lead email failed (${res.status}):`, await res.text());
    return res.ok;
  } catch (error) {
    console.error("Lead email failed:", error);
    return false;
  }
}
