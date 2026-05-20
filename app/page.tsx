import { HeroSection } from "@/components/blocks/hero-section-1";
import About from "@/components/About";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <About />
        <Services />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
