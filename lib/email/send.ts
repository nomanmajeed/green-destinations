import { Resend } from "resend";
import { FROM_EMAIL, TO_EMAIL } from "@/lib/email/config";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendSiteEmail({
  subject,
  text,
  html,
  replyTo,
}: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) {
  if (!resend) {
    console.error("[email] RESEND_API_KEY is not configured");
    return { ok: false as const, error: "Email service is not configured." };
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: replyTo ? [replyTo] : undefined,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[email] Resend error:", error);
    const devHint =
      process.env.NODE_ENV === "development" && error.message
        ? error.message
        : null;
    return {
      ok: false as const,
      error:
        devHint ??
        "Unable to send your message. Please try again or email us directly.",
    };
  }

  return { ok: true as const };
}
