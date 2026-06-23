import About from "@/components/About";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Green Destinations",
  description:
    "Learn about Green Destinations, our mission, values, and dedication to safe and caring SEND transport across the West Midlands.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About Green Destinations"
        title="Specialist transport, built on trust."
        subtitle="Established in 2012 to deliver specialist school travel that supports independence and protects every pupil's dignity."
        backgroundImage="/images/gd-road-morning.jpg"
      />
      <About />
    </>
  );
}
