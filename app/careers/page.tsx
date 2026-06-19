import Careers from "@/components/Careers";
import SubpageHero from "@/components/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Green Destinations",
  description: "Join the Green Destinations team. View open positions for PSV/D1 drivers, passenger assistants, and coordinators in Birmingham and the West Midlands.",
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      <SubpageHero
        title="Careers & Opportunities"
        subtitle="Build a meaningful career in SEND transport. Check out our open positions and start your journey with a supportive, community-focused team."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />
      <Careers />
    </div>
  );
}
