import Services from "@/components/Services";
import SubpageHero from "@/components/SubpageHero";
import { Component as ProductSpotlight } from "@/components/ui/product-spotlight-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Green Destinations",
  description: "Explore our SEND transport services, passenger assistant support, safeguarding processes, and local authority partnership contracts.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <SubpageHero
        title="Our Services"
        subtitle="Specialist school transport, passenger support escorts, and PATS-accredited training designed for safe and structured delivery."
        backgroundImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80"
      />
      <Services />
      <ProductSpotlight />
    </div>
  );
}
