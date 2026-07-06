export interface CareersEmailPayload {
  roleId: number;
  roleTitle: string;
  roleTag: string;
  location: string;
  type: string;
  salary: string;
  name: string;
  email: string;
  phone: string;
  statement: string;
  licence?: string;
  taxiVehicle?: string;
}

export function buildCareersEmail(payload: CareersEmailPayload) {
  const {
    roleTitle,
    roleTag,
    location,
    type,
    salary,
    name,
    email,
    phone,
    statement,
    licence,
    taxiVehicle,
  } = payload;

  const subject = `Job application: ${roleTitle} — ${name}`;

  const extraLines = [
    licence ? `PSV licence: ${licence}` : null,
    taxiVehicle ? `Licensed taxi vehicle: ${taxiVehicle}` : null,
  ].filter(Boolean) as string[];

  const text = [
    "New careers application — Ultimate Travel website",
    "",
    "Role applied for:",
    `  Title: ${roleTitle}`,
    `  Category: ${roleTag}`,
    `  Location: ${location}`,
    `  Type: ${type}`,
    `  Salary: ${salary}`,
    "",
    "Applicant:",
    `  Name: ${name}`,
    `  Email: ${email}`,
    `  Phone: ${phone}`,
    ...extraLines.map((line) => `  ${line}`),
    "",
    "Experience and statement:",
    statement,
  ].join("\n");

  const extraRows = [
    licence
      ? row("PSV licence", licence)
      : "",
    taxiVehicle
      ? row("Licensed taxi vehicle", taxiVehicle)
      : "",
  ].join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0c241a;max-width:560px">
      <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a6516">
        Ultimate Travel · Careers application
      </p>
      <h2 style="margin:0 0 20px;font-size:20px">${escapeHtml(roleTitle)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
        ${row("Category", roleTag)}
        ${row("Location", location)}
        ${row("Contract type", type)}
        ${row("Salary", salary)}
      </table>
      <p style="margin:0 0 12px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#51635b">Applicant details</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row("Name", name, true)}
        ${row("Email", email)}
        ${row("Phone", phone)}
        ${extraRows}
      </table>
      <p style="margin:24px 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#51635b">Experience and statement</p>
      <p style="margin:0;padding:16px;background:#f4f6f2;border-radius:12px;white-space:pre-wrap">${escapeHtml(statement)}</p>
    </div>
  `.trim();

  return { subject, text, html, replyTo: email };
}

function row(label: string, value: string, strong = false) {
  const content = strong ? `<strong>${escapeHtml(value)}</strong>` : escapeHtml(value);
  return `<tr><td style="padding:8px 0;color:#51635b;width:140px;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0">${content}</td></tr>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
