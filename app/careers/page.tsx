import Careers from "@/components/Careers";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Ultimate Travel",
  description:
    "Current vacancies at Ultimate Travel — PSV drivers, passenger assistants and licensed contractors across Yorkshire.",
};

export default function CareersPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Careers at Ultimate Travel"
        title="Meaningful work, every school day."
        subtitle="Join a safeguarding-led team delivering SEND transport across Yorkshire — with term-time hours and competitive pay."
        backgroundImage="/images/ut-hero-careers.jpg"
      />
      <Careers />
    </>
  );
}
