import { HeroSection } from "@/components/blocks/hero-section-1";
import About from "@/components/About";
import Services from "@/components/Services";
import { Component as ProductSpotlight } from "@/components/ui/product-spotlight-hero-section";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <About />
        <Services />
        <ProductSpotlight />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
    </>
  );
}

