/** Inbound address for contact and careers form submissions */
export const CONTACT_EMAIL = "info@ultimatetravel.co.uk";

/** In dev with onboarding@resend.dev, Resend only delivers to your account email */
export const TO_EMAIL =
  process.env.NODE_ENV === "development" && process.env.RESEND_DEV_TO
    ? process.env.RESEND_DEV_TO
    : CONTACT_EMAIL;

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Ultimate Travel <onboarding@resend.dev>";
