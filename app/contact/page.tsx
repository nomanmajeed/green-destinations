import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Green Destinations",
  description: "Get in touch with Green Destinations. Contact our team to book a journey, partner with us, or learn more about our specialist SEND transport services.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-16 overflow-hidden bg-slate-50 dark:bg-[#071830] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Contact <span className="text-gradient-gold">Our Team</span>
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch to book a journey, ask questions, or partner with us.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-yellow-500/5 dark:from-blue-500/10 dark:to-yellow-500/10 opacity-30 pointer-events-none" />
      </div>
      
      <Contact />
    </div>
  );
}
