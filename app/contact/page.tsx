import Contact from "@/components/Contact";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ultimate Travel",
  description:
    "Contact Ultimate Travel to enquire about SEND school routes, driver recruitment, or commissioning partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Contact Ultimate Travel"
        title="We are here to help."
        subtitle="Route enquiries, recruitment questions or commissioning discussions — reach out and we will respond within one working day."
        backgroundImage="/images/ut-hero-contact.jpg"
      />
      <Contact />
    </>
  );
}
