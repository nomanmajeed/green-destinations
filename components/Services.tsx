"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Bus, Heart, ShieldCheck, Users, Route } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Bus,
    tag: "SEND",
    h: "Specialist SEND Transport",
    p: "We provide dedicated home‑to‑school transport for pupils with SEND, with a strong focus on comfort, routine, and reassurance.",
    list: [
      "Tailored to each child's needs",
      "Consistent drivers and routes",
      "Parent & school communication",
    ],
    accent: "from-blue-500/20 to-blue-700/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    icon: Heart,
    tag: "CARE",
    h: "Passenger Support",
    p: "Our passenger assistants help children travel safely and confidently, offering calm support throughout the journey where needed.",
    list: [
      "Emotional regulation support",
      "SEND awareness trained",
      "Positive, caring approach",
    ],
    accent: "from-pink-500/20 to-rose-700/10",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/20",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    icon: ShieldCheck,
    tag: "SAFE",
    h: "Safeguarding First",
    p: "Safeguarding is central to our operation. We promote a culture of responsibility, care, and vigilance across the whole team.",
    list: [
      "DBS‑checked staff",
      "Safeguarding policies & training",
      "Incident reporting & transparency",
    ],
    accent: "from-[#f7d36f]/15 to-[#e6ad2e]/5",
    iconColor: "text-[#f7d36f]",
    iconBg: "bg-[#f7d36f]/15",
    badge: "bg-[#f7d36f]/20 text-[#f7d36f] border-[#f7d36f]/30",
    featured: true,
  },
  {
    icon: Users,
    tag: "TEAM",
    h: "Trained Passenger Assistants",
    p: "Our passenger assistants are trained to support communication, emotional regulation, and the routines that make journeys feel safe.",
    list: [
      "Safeguarding & first aid trained",
      "Autism and SEND awareness",
      "DBS‑checked and vetted",
    ],
    accent: "from-emerald-500/20 to-teal-700/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    icon: Route,
    tag: "LA",
    h: "Local Authority Partnerships",
    p: "We work with commissioning teams to deliver dependable, well‑documented services aligned with statutory standards.",
    list: [
      "Contract delivery & reporting",
      "Route optimisation",
      "Operational transparency",
    ],
    accent: "from-purple-500/20 to-indigo-700/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#f7d36f]" />
            <span className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase">
              What We Offer
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Services built around{" "}
            <span className="text-gradient-gold">every child's journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-blue-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
            From specialist SEND routes to local authority contracts — every
            service we offer is shaped by care and expertise.
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
                className={`relative h-full border-white/10 bg-gradient-to-br ${s.accent} backdrop-blur-sm overflow-hidden
                  hover:border-white/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-400
                  ${s.featured ? "ring-1 ring-[#f7d36f]/30" : ""}`}
              >
                {s.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold text-[#0b2245] bg-[#f7d36f] px-2 py-0.5 rounded-full">
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

                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                    {s.h}
                  </h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed mb-5 flex-1">
                    {s.p}
                  </p>

                  <ul className="space-y-1.5 mt-auto">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-blue-200/70"
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
