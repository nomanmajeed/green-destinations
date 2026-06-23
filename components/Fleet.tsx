"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Bus, Accessibility, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Bus,
    h: "Modern Mercedes-Benz fleet",
    p: "A consistent, well-presented fleet of low-mileage minibuses kept to the highest standard.",
  },
  {
    icon: Accessibility,
    h: "Wheelchair accessible",
    p: "Lowered access and secure restraints so every pupil travels safely and with dignity.",
  },
  {
    icon: Wrench,
    h: "Maintained and tracked",
    p: "Regular servicing, safety checks, and live tracking on every vehicle, every route.",
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
    <section id="fleet" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Copy */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.span variants={fadeUp} className="rule-gold block" />
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              A fleet built around safety and care.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Every Ultimate Travel minibus is accessible, immaculately kept, and
              driven by a vetted team, so families and authorities can trust the
              journey from door to door.
            </motion.p>

            <motion.ul variants={stagger} className="mt-10 space-y-6">
              {highlights.map((h) => (
                <motion.li key={h.h} variants={fadeUp} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gold-soft)]">
                    <h.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-bold tracking-tight text-foreground">{h.h}</h3>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">{h.p}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Real fleet photography */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[3/2] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_30px_60px_-30px_rgba(6,20,13,0.45)]"
          >
            <Image
              src="/images/ut-fleet.jpg"
              alt="The Ultimate Travel fleet of white Mercedes-Benz minibuses, specialists in SEND transport"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
