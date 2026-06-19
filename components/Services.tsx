"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Bus, Heart, ShieldCheck, Award, Route } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Bus,
    tag: "SEND",
    h: "Specialist SEND Transport",
    p: "Fulfilling local authority statutory duties under Section 508B of the Education Act 1996, providing safe, calm, and reliable home-to-school travel arrangements for SEND pupils.",
    list: [
      "Facilitate regular school attendance",
      "Consistent routes, vehicles, and teams",
      "Close cooperation with schools and families",
    ],
    accent: "from-blue-500/5 to-blue-700/5 dark:from-white/3 dark:to-white/1",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    badge: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-500/30",
  },
  {
    icon: Heart,
    tag: "SUPPORT",
    h: "Passenger Support Escorts",
    p: "Our Passenger Assistants accompany pupils throughout their journeys, offering patient support, reassurance for anxiety, and assistance with boarding and exiting.",
    list: [
      "Support boarding and secure seating",
      "Emotional regulation and reassurance",
      "Calm and patience-led journey experience",
    ],
    accent: "from-pink-500/5 to-rose-700/5 dark:from-white/3 dark:to-white/1",
    iconColor: "text-pink-600 dark:text-pink-400",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/20",
    badge: "bg-pink-500/10 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/20 dark:border-pink-500/30",
  },
  {
    icon: ShieldCheck,
    tag: "SAFEGUARD",
    h: "Vetting & Safeguarding Culture",
    p: "Safeguarding is embedded in our operations. All drivers and escorts undergo Enhanced DBS checks and must obtain local authority approval and ID badges.",
    list: [
      "Enhanced DBS checked staff",
      "Local Authority badging and validation",
      "Clear escalation and reporting protocols",
    ],
    accent: "from-amber-500/5 to-[#e6ad2e]/5 dark:from-white/3 dark:to-white/1",
    iconColor: "text-amber-600 dark:text-[#f7d36f]",
    iconBg: "bg-amber-500/10 dark:bg-[#f7d36f]/15",
    badge: "bg-amber-500/10 dark:bg-[#f7d36f]/20 text-amber-800 dark:text-[#f7d36f] border-amber-500/20 dark:border-[#f7d36f]/30",
    featured: true,
  },
  {
    icon: Award,
    tag: "ACCREDITED",
    h: "PATS Training Scheme",
    p: "We provide training aligned with the nationally accredited Passenger Assistance Training Scheme (PATS), certifying our staff in special needs transport safety.",
    list: [
      "Hidden disability awareness",
      "Emergency healthcare protocols",
      "Non-discrimination and compliance skills",
    ],
    accent: "from-emerald-500/5 to-teal-700/5 dark:from-white/3 dark:to-white/1",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    badge: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30",
  },
  {
    icon: Route,
    tag: "PARTNERS",
    h: "Public Sector Partnerships",
    p: "We work directly with commissioning teams to deliver highly compliant, structured transport solutions that offer genuine value for public funds.",
    list: [
      "Operational discipline & tracking",
      "Statutory compliance reporting",
      "Route optimization and value management",
    ],
    accent: "from-purple-500/5 to-indigo-700/5 dark:from-white/3 dark:to-white/1",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
    badge: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30",
  },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32">
      {/* decorative blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-yellow-500/6 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Specialist services built around{" "}
            <span className="text-gradient-gold">safe & dignifying travel</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed">
            From statutory school routes to Passenger Assistant support and PATS accredited training — we deliver with operational discipline.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.h} variants={fadeUp} className="group">
              <Card
                className={`relative h-full border-border bg-card/30 bg-gradient-to-br ${s.accent} backdrop-blur-sm overflow-hidden
                  hover:border-foreground/15 hover:shadow-2xl transition-all duration-400
                  ${s.featured ? "ring-1 ring-gold/30" : ""}`}
              >
                {s.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold text-[#0b2245] bg-gold px-2 py-0.5 rounded-full">
                      Core
                    </span>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl ${s.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-bold tracking-widest mt-1.5 ${s.badge}`}
                    >
                      {s.tag}
                    </Badge>
                  </div>

                  <h3 className="text-foreground font-bold text-lg mb-2 leading-tight">
                    {s.h}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-5 flex-1">
                    {s.p}
                  </p>

                  <ul className="space-y-1.5 mt-auto">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-foreground/70"
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${s.iconBg} shrink-0`}
                        />
                        <span
                          className={`w-1 h-1 rounded-full ${s.iconColor} shrink-0 -ml-2.5`}
                          style={{
                            background: "currentColor",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
