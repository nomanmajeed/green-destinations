import { HeroSection, HeroCredentials } from "@/components/blocks/hero-section-1";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CareersTeaser from "@/components/CareersTeaser";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <HeroCredentials />
      <About />
      <Services />
      <Fleet />
      <Process />
      <Testimonials />
      <CareersTeaser />
      <Contact />
    </main>
  );
}
