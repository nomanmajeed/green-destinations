import Services from "@/components/Services";
import { Component as ProductSpotlight } from "@/components/ui/product-spotlight-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Green Destinations",
  description: "Explore our SEND transport services, passenger assistant support, safeguarding processes, and local authority partnership contracts.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-16 overflow-hidden bg-slate-50 dark:bg-[#071830] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Our <span className="text-gradient-gold">SEND Services</span>
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional passenger assistance, safeguarding, and route planning tailored to each individual.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-yellow-500/5 dark:from-blue-500/10 dark:to-yellow-500/10 opacity-30 pointer-events-none" />
      </div>
      
      <Services />
      <ProductSpotlight />
    </div>
  );
}
