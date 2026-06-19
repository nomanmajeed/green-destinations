import Contact from "@/components/Contact";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Green Destinations",
  description: "Get in touch with Green Destinations. Contact our team to book a journey, partner with us, or learn more about our specialist SEND transport services.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SubpageHero
        title="Contact Our Team"
        subtitle="For school routes, driver training, recruitment questions, or public sector partnerships — we are ready to start the conversation."
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
      />
      <Contact />
    </div>
  );
}
