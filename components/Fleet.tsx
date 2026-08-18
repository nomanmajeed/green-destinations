"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Bus, Accessibility, Wrench, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: Bus,
    h: "Various mini buses",
    p: "A varied, low-mileage fleet that is cleaned, serviced and presented to a high standard.",
  },
  {
    icon: Accessibility,
    h: "Step-free and wheelchair-ready",
    p: "Lowered access points and secure restraint systems so every pupil boards and travels safely.",
  },
  {
    icon: Wrench,
    h: "Serviced and monitored",
    p: "Scheduled maintenance, daily safety checks and route tracking across the entire fleet.",
  },
  {
    icon: BadgeCheck,
    h: "Industry approved buses",
    p: "Every vehicle meets recognised industry standards for safety and accessibility.",
  },
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Fleet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fleet" ref={ref} className="bg-background py-15 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header - centered editorial with clean hierarchy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Vehicles maintained for the journey ahead.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Ultimate Travel runs a modern, accessible minibus fleet, with each
            vehicle kept to standard and crewed by vetted teams so the trip
            from doorstep to school gate is as smooth as possible.
          </motion.p>
        </motion.div>

        {/* Full-width photography banner */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mt-6 aspect-[21/9] min-h-[300px] overflow-hidden rounded-[2rem] border border-border sm:min-h-[380px]"
        >
          <Image
            src="/images/ut-fleet.jpg"
            alt="The Ultimate Travel fleet of white mini buses, specialists in SEND transport"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06140d]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="rounded-full bg-card/85 px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground backdrop-blur">
              SEND Spec Approved Fleet
            </span>
          </div>
        </motion.div>

        {/* 4-column highlights strip */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.h}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[var(--gold)]/40 hover:shadow-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gold-soft)]">
                <h.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-bold tracking-tight text-foreground">{h.h}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{h.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
