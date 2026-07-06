import { Resend } from "resend";
import { FROM_EMAIL, TO_EMAIL } from "@/lib/email/config";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type EmailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({
  to,
  subject,
  text,
  html,
  replyTo,
}: EmailPayload & { to: string | string[] }) {
  if (!resend) {
    console.error("[email] RESEND_API_KEY is not configured");
    return { ok: false as const, error: "Email service is not configured." };
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: Array.isArray(to) ? to : [to],
    replyTo: replyTo ? [replyTo] : undefined,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[email] Resend error:", error);
    return {
      ok: false as const,
      error: "Unable to send your message. Please try again or email us directly.",
    };
  }

  return { ok: true as const };
}

export async function sendSiteEmail(payload: EmailPayload) {
  return sendEmail({ ...payload, to: TO_EMAIL });
}
