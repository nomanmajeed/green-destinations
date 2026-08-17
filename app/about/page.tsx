import About from "@/components/About";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ultimate Travel",
  description:
    "Discover Ultimate Travel — our history, our safeguarding standards, and how we deliver SEND school transport across Yorkshire.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="About Ultimate Travel"
        title="Experience you can commission with confidence."
        subtitle="We design SEND school routes around each pupil — with the safeguarding rigour families and authorities expect."
        backgroundImage="/images/ut-hero-about.jpg"
      />
      <About />
    </>
  );
}
