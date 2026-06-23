import About from "@/components/About";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ultimate Travel",
  description:
    "Learn about Ultimate Travel, our mission, values, and dedication to safe and caring SEND transport across the West Midlands.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About Ultimate Travel"
        title="Specialist transport, built on trust."
        subtitle="Established in 2012 to deliver specialist school travel that supports independence and protects every pupil's dignity."
        backgroundImage="/images/ut-hero-about.jpg"
      />
      <About />
    </>
  );
}
