"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { ShieldCheck, Scale, Users, Heart, Check } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

const stats: { to?: number; suffix?: string; text?: string; l: string }[] = [
  { to: 2012, l: "Operating since" },
  { to: 100, suffix: "+", l: "Years of combined safeguarding experience" },
  { text: "Local", l: "Drivers, assistants and supply chain" },
];

const values = [
  {
    icon: ShieldCheck,
    h: "Safeguarding first",
    p: "Every relevant team member is Enhanced DBS checked and strictly vetted.",
  },
  {
    icon: Scale,
    h: "Statutory alignment",
    p: "We help authorities meet duties under Section 508B of the Education Act 1996.",
  },
  {
    icon: Users,
    h: "PATS certified team",
    p: "Accredited training for drivers and assistants in passenger safety and care.",
  },
  {
    icon: Heart,
    h: "Dignity and care",
    p: "Journeys that feel calm, respectful, and safe for every pupil, every day.",
  },
];

const modules = [
  "Awareness of different disabilities, including hidden disabilities",
  "Recognising discrimination and unconscious bias",
  "Supporting and managing pupils with a wide range of needs",
  "Clear communication for visible and hidden disabilities",
  "Healthcare protocols, including emergency procedures",
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro: editorial split */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                About Ultimate Travel
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              A decade of safe, dignified school journeys.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Established in 2012, Ultimate Travel delivers specialist transport
              that helps local authorities meet their statutory duties under
              Section 508B of the Education Act 1996, so every SEND pupil can get
              to school safely.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_30px_60px_-30px_rgba(6,20,13,0.42)]"
          >
            <Image
              src="/images/gd-team-assistant.jpg"
              alt="An Ultimate Travel passenger assistant beside a minibus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Stat band — hairline dividers, no card boxes */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div key={s.l} variants={fadeUp} className="bg-background px-7 py-8">
              <p className="text-4xl font-bold tracking-tight text-foreground">
                {s.text ? (
                  s.text
                ) : (
                  <CountUp to={s.to ?? 0} suffix={s.suffix} />
                )}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Training & values */}
        <div className="mt-24 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Rigorous training and vetting
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Every driver and passenger assistant is prepared to work safely,
              respectfully, and effectively with children across a wide range of
              needs.
            </p>
            <ul className="mt-8 space-y-4">
              {modules.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)]">
                    <Check className="h-3 w-3 text-[var(--gold)]" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {values.map((v) => (
              <motion.div
                key={v.h}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_-24px_rgba(6,20,13,0.4)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)]">
                  <v.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.75} />
                </span>
                <h4 className="mt-4 font-bold tracking-tight text-foreground">{v.h}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
