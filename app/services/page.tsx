import Services from "@/components/Services";
import Process from "@/components/Process";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ultimate Travel",
  description:
    "Ultimate Travel's SEND transport services — dedicated school routes, passenger assistant support, PATS training and local authority partnerships.",
};

export default function ServicesPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Services"
        title="Provision shaped around each pupil."
        subtitle="Dedicated SEND routes, on-board passenger assistance and accredited crew training — managed to commissioning standards."
        backgroundImage="/images/ut-hero-services.jpg"
      />
      <Services />
      <Process />
    </>
  );
}
