"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Bus, Heart, ShieldCheck, Award, Route, Check } from "lucide-react";

const featured = {
  icon: Bus,
  tag: "Primary provision",
  h: "Dedicated SEND school routes",
  p: "Door-to-door transport for pupils with Special Educational Needs and Disabilities — delivered with the consistency families expect and commissioners require.",
  list: [
    "Supports regular attendance and punctual arrival",
    "Fixed vehicles and familiar route teams",
    "Close liaison with schools, families and case workers",
  ],
};

const services = [
  {
    icon: Heart,
    tag: "On-board care",
    h: "Passenger assistant support",
    p: "Qualified assistants travel with pupils, offering reassurance, supervision and practical help throughout the journey.",
    list: ["Safe boarding and secure seating", "Sensory and emotional support", "Calm, unhurried travel"],
  },
  {
    icon: ShieldCheck,
    tag: "Compliance",
    h: "Safeguarding and vetting",
    p: "Child protection is woven into how we recruit, train and manage every member of the team.",
    list: ["Enhanced DBS clearance", "Local Authority badge approval", "Documented escalation pathways"],
  },
  {
    icon: Award,
    tag: "Training",
    h: "PATS-accredited development",
    p: "Our training programme follows the nationally recognised Passenger Assistance Training Scheme.",
    list: ["Hidden disability awareness", "Medical emergency protocols", "Inclusive communication skills"],
  },
  {
    icon: Route,
    tag: "Commissioning",
    h: "Authority and school partnerships",
    p: "We work with commissioning teams to design, run and report on compliant transport contracts.",
    list: ["Route planning and optimisation", "Statutory reporting", "Transparent contract management"],
  },
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="bg-[var(--section-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="rule-gold block" />
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            What we deliver for schools, families and commissioners.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From statutory school routes to on-board passenger assistance and
            accredited crew training — all managed with the rigour commissioning
            bodies expect.
          </motion.p>
        </motion.div>

        {/* Featured service — wide tile with photography */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-2"
        >
          <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:p-12">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)]">
              <featured.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.75} />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
              {featured.tag}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{featured.h}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{featured.p}</p>
            <ul className="mt-6 space-y-2.5">
              {featured.list.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 min-h-[260px] lg:order-2">
            <Image
              src="/images/gd-interior-calm.jpg"
              alt="The calm, accessible interior of an Ultimate Travel minibus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Remaining services — clean 2x2 grid, single accent */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-6 grid gap-6 sm:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.h}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_-24px_rgba(6,20,13,0.4)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)]">
                  <s.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{s.h}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {s.list.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
