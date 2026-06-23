"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const steps = [
  {
    n: "01",
    h: "Referral",
    p: "Authorities, schools, or families share the pupil's needs and route details.",
  },
  {
    n: "02",
    h: "Tailored plan",
    p: "We build a transport plan around medical, sensory, and access requirements.",
  },
  {
    n: "03",
    h: "Matched team",
    p: "A consistent, DBS-checked driver and assistant are assigned to the route.",
  },
  {
    n: "04",
    h: "Every morning",
    p: "Calm, punctual journeys, with clear communication whenever plans change.",
  },
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_30px_60px_-30px_rgba(6,20,13,0.42)] lg:order-1"
        >
          <Image
            src="/images/gd-road-morning.jpg"
            alt="A quiet residential street at sunrise, the start of the school run"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06140d]/55 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-lg font-semibold text-white">
              Every route, planned around the child.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="order-1 lg:order-2">
          <motion.span variants={fadeUp} className="rule-gold block" />
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            From the first call to every school morning.
          </motion.h2>

          <div className="mt-10 space-y-px">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="flex gap-6 border-t border-border py-6 last:border-b"
              >
                <span className="font-mono text-sm font-semibold text-[var(--gold)]">{s.n}</span>
                <div>
                  <h3 className="font-bold tracking-tight text-foreground">{s.h}</h3>
                  <p className="mt-1.5 max-w-md leading-relaxed text-muted-foreground">{s.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
