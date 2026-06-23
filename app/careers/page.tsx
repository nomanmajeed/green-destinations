import Careers from "@/components/Careers";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Ultimate Travel",
  description:
    "Join the Ultimate Travel team. View open positions for PSV/D1 drivers, passenger assistants, and coordinators in Birmingham and the West Midlands.",
};

export default function CareersPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Careers and Opportunities"
        title="Work that matters, every morning."
        subtitle="Build a meaningful career in SEND transport with a supportive, community-focused team across the West Midlands."
        backgroundImage="/images/ut-hero-careers.jpg"
      />
      <Careers />
    </>
  );
}
