"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const steps = [
  {
    n: "01",
    h: "Initial enquiry",
    p: "A school, authority or family shares route details and the pupil's access or medical requirements.",
  },
  {
    n: "02",
    h: "Bespoke route plan",
    p: "We design a transport arrangement around sensory, mobility and timing needs, not a generic template.",
  },
  {
    n: "03",
    h: "Assigned crew",
    p: "A vetted, DBS-checked driver and passenger assistant are matched to the route for continuity.",
  },
  {
    n: "04",
    h: "Daily delivery",
    p: "Punctual, calm term-time journeys with proactive updates whenever circumstances change.",
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
    <section ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border lg:order-1"
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
              Every plan begins with the pupil.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="order-1 lg:order-2">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            From enquiry to term-time routine.
          </motion.h2>

          <div className="mt-10 space-y-px">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="group flex gap-6 border-t border-border py-6 transition-colors duration-200 hover:bg-card/40 last:border-b"
              >
                <span className="font-mono text-sm font-semibold text-[var(--gold)]">{s.n}</span>
                <div>
                  <h3 className="font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--gold)]">{s.h}</h3>
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
