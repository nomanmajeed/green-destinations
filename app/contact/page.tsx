import Contact from "@/components/Contact";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Green Destinations",
  description:
    "Get in touch with Green Destinations. Contact our team to book a journey, partner with us, or learn more about our specialist SEND transport services.",
};

export default function ContactPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Contact Our Team"
        title="We are ready to help."
        subtitle="For school routes, driver training, recruitment, or public sector partnerships, start the conversation today."
        backgroundImage="/images/gd-interior-calm.jpg"
      />
      <Contact />
    </>
  );
}
