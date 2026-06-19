import About from "@/components/About";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Green Destinations",
  description: "Learn about Green Destinations, our mission, values, and dedication to safe and caring SEND transport across the West Midlands.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SubpageHero
        title="About Us"
        subtitle="Established in 2012 to deliver specialist school travel arrangements that support independence and protect student dignity."
        backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
      />
      <About />
    </div>
  );
}
