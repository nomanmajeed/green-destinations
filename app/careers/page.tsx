import Careers from "@/components/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Green Destinations",
  description: "Join the Green Destinations team. View open positions for PSV/D1 drivers, passenger assistants, and coordinators in Birmingham and the West Midlands.",
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-16 overflow-hidden bg-slate-50 dark:bg-[#071830] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Join <span className="text-gradient-gold">Our Team</span>
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Grow a meaningful career in SEND transport. View open positions and apply today.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-yellow-500/5 dark:from-blue-500/10 dark:to-yellow-500/10 opacity-30 pointer-events-none" />
      </div>
      
      <Careers />
    </div>
  );
}
