import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Green Destinations",
  description: "Learn about Green Destinations, our mission, values, and dedication to safe and caring SEND transport across the West Midlands.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-16 overflow-hidden bg-slate-50 dark:bg-[#071830] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            About <span className="text-gradient-gold">Green Destinations</span>
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Our mission, values, and dedication to safe, reliable SEND school transport.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-yellow-500/5 dark:from-blue-500/10 dark:to-yellow-500/10 opacity-30 pointer-events-none" />
      </div>
      <About />
    </div>
  );
}
