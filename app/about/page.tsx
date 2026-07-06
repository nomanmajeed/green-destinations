import About from "@/components/About";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ultimate Travel",
  description:
    "Discover Ultimate Travel — our history since 2012, our safeguarding standards, and how we deliver SEND school transport across the West Midlands.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About Ultimate Travel"
        title="Experience you can commission with confidence."
        subtitle="Operating since 2012, we design SEND school routes around each pupil — with the safeguarding rigour families and authorities expect."
        backgroundImage="/images/ut-hero-about.jpg"
      />
      <About />
    </>
  );
}
