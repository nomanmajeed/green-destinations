export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function buildContactEmail(payload: ContactEmailPayload) {
  const { name, email, phone, message } = payload;
  const subject = `New website enquiry from ${name}`;

  const text = [
    "New contact form submission — Ultimate Travel website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0c241a;max-width:560px">
      <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a6516">
        Ultimate Travel · Website enquiry
      </p>
      <h2 style="margin:0 0 20px;font-size:20px">New contact form submission</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#51635b;width:100px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#51635b">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px 0;color:#51635b">Phone</td><td style="padding:8px 0">${escapeHtml(phone)}</td></tr>` : ""}
      </table>
      <p style="margin:24px 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#51635b">Message</p>
      <p style="margin:0;padding:16px;background:#f4f6f2;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `.trim();

  return { subject, text, html, replyTo: email };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
