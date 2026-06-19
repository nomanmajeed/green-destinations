"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Shield, Users, Clock, Heart, CheckCircle2, Scale, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    n: "01",
    title: "Established Since 2012",
    desc: "Over a decade of specialist local government service delivery that supports independence and protects health.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20",
  },
  {
    n: "02",
    title: "100+ Years Combined Experience",
    desc: "Our board of management and operations teams bring massive expertise in public services and safeguarding.",
    color: "from-[#f7d36f] to-[#e6ad2e]",
    glow: "shadow-yellow-500/20",
  },
  {
    n: "03",
    title: "Local Multiplier Effect",
    desc: "We employ local people, who in turn utilize a fully integrated local supply chain, keeping value in the local economy.",
    color: "from-emerald-400 to-emerald-600",
    glow: "shadow-emerald-500/20",
  },
];

const values = [
  {
    icon: Shield,
    h: "Safeguarding First",
    p: "All relevant team members are Enhanced DBS checked and strictly vetted.",
  },
  {
    icon: Scale,
    h: "Statutory Duty Alignment",
    p: "Fulfilling local authority obligations under Section 508B of the Education Act 1996.",
  },
  {
    icon: Users,
    h: "PATS Certified Team",
    p: "Accredited training for drivers and assistants on passenger safety and care.",
  },
  {
    icon: Heart,
    h: "Dignity & Care",
    p: "Ensuring school journeys feel safe, calm, and respectful for every pupil.",
  },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--section-bg)" }}
    >
      {/* decorative blur */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

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
              About Us
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Safer school journeys built on{" "}
            <span className="text-gradient-gold">trust & capability</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-foreground/75 text-lg max-w-3xl mx-auto leading-relaxed">
            Established in 2012, Green Destinations delivers specialist transport services
            supporting statutory duties under **Section 508B of the Education Act 1996**, helping local
            authorities facilitate school attendance for SEND pupils.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {features.map((f) => (
            <motion.div key={f.n} variants={fadeUp}>
              <Card className="bg-card/45 border-border hover:border-foreground/15 hover:bg-card/75 transition-all duration-300 hover:shadow-2xl overflow-hidden group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-xl ${f.glow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white/90 font-black text-sm">
                      {f.n}
                    </span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Training focus and values */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 tracking-tight">
              Rigorous Training &{" "}
              <span className="text-gradient-gold">Vetting Standards</span>
            </h3>
            <p className="text-foreground/75 mb-6 leading-relaxed text-sm sm:text-base">
              Every driver and passenger assistant undergoes comprehensive training that prepares them to work safely, respectfully, and effectively with children who have a wide range of needs.
            </p>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Our Core Training Modules:</h4>
            <ul className="space-y-3">
              {[
                "Awareness of different types of disability, including hidden disabilities",
                "Awareness of what constitutes discrimination and bias",
                "Skills to recognize, support and manage pupils with different types of disabilities",
                "Appropriate communication skills for pupils with visible and hidden disabilities",
                "Implementation of healthcare protocols, including emergency procedures",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/85 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.h}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <Card className="bg-card/45 border-border hover:bg-card/75 hover:border-foreground/15 transition-all duration-300 group">
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-xl glass-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <v.icon className="w-4 h-4 text-gold" />
                    </div>
                    <h4 className="text-foreground font-bold text-sm mb-1">{v.h}</h4>
                    <p className="text-foreground/60 text-xs leading-relaxed">{v.p}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
