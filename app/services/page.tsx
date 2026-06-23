import Services from "@/components/Services";
import Process from "@/components/Process";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Green Destinations",
  description:
    "Explore our SEND transport services, passenger assistant support, safeguarding processes, and local authority partnership contracts.",
};

export default function ServicesPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Services"
        title="Safe, structured, dignified travel."
        subtitle="Specialist school transport, passenger support escorts, and PATS-accredited training designed for safe delivery."
        backgroundImage="/images/gd-hero-journey.jpg"
      />
      <Services />
      <Process />
    </>
  );
}
