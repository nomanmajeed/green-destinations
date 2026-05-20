"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Shield, Users, Clock, Heart, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    n: "01",
    title: "Specialist Service",
    desc: "Dedicated SEND home‑to‑school transport operator custom-fit for pupil routines.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20",
  },
  {
    n: "02",
    title: "Safeguarding Focused",
    desc: "Safety, care, and child welfare at the heart of every single journey.",
    color: "from-[#f7d36f] to-[#e6ad2e]",
    glow: "shadow-yellow-500/20",
  },
  {
    n: "03",
    title: "Professional Team",
    desc: "Highly trained drivers and assistants who support pupils with dignity and respect.",
    color: "from-emerald-400 to-emerald-600",
    glow: "shadow-emerald-500/20",
  },
];

const values = [
  {
    icon: Shield,
    h: "Safety",
    p: "Protecting children and young people is always our first priority.",
  },
  {
    icon: Users,
    h: "Respect",
    p: "We treat every child, family, and partner with dignity and professionalism.",
  },
  {
    icon: Clock,
    h: "Reliability",
    p: "We aim to deliver a dependable service families can trust every day.",
  },
  {
    icon: Heart,
    h: "Care",
    p: "We believe the right attitude matters just as much as the right process.",
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
      style={{ background: "rgba(7,24,48,0.6)" }}
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#f7d36f]" />
            <span className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase">
              About Us
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Safer journeys built on{" "}
            <span className="text-gradient-gold">trust</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-blue-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Our service is built around safety, professionalism, and the
            individual needs of the children we support.
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
              <Card className="bg-transparent border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl overflow-hidden group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-xl ${f.glow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white/90 font-black text-sm">
                      {f.n}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why families choose us */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Why families and partners{" "}
              <span className="text-gradient-gold">choose us</span>
            </h3>
            <p className="text-blue-200/70 mb-8 leading-relaxed">
              Every journey with Green Destinations is underpinned by rigorous
              vetting, bespoke training, and a genuine commitment to each
              child's wellbeing.
            </p>
            <ul className="space-y-3">
              {[
                "All drivers and escorts hold valid DBS credentials",
                "Robust safeguarding culture across the whole team",
                "Routine‑focused approach tailored to each pupil",
                "Transparent reporting to schools and local authorities",
                "First aid and SEND awareness trained staff",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f7d36f] shrink-0 mt-0.5" />
                  <span className="text-blue-100/80 text-sm">{item}</span>
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
                <Card className="bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-xl glass-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <v.icon className="w-4 h-4 text-[#f7d36f]" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{v.h}</h4>
                    <p className="text-blue-200/50 text-xs leading-relaxed">{v.p}</p>
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
