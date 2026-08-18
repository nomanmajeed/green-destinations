"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Accessibility,
  ShieldCheck,
  Users,
  MapPin,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Accessibility, label: "Accessible fleet" },
  { icon: ShieldCheck, label: "Safeguarding-led" },
  { icon: Users, label: "Specialists in SEND Transport" },
  { icon: MapPin, label: "Yorkshire & UK routes" },
  { icon: Flag, label: "Trusted UK operator" },
];

export function HeroCredentials() {
  return (
    <div className="border-y border-[var(--gold-cta-bg)]/20 bg-[var(--brand-green)] dark:border-border dark:bg-[var(--brand-green-deep)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-[var(--gold-cta-bg)]/15 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0 dark:divide-border">
        {credentials.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2.5 px-4 py-5 text-center"
          >
            <Icon
              className="h-4 w-4 shrink-0 text-[var(--gold-cta-bg)] dark:text-[var(--gold)]"
              strokeWidth={2}
            />
            <span className="text-xs font-semibold tracking-tight text-[var(--gold-cta-bg)] dark:text-[var(--gold)]">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-[#06140d] [contain:paint]"
    >
      {/* Full-bleed photo */}
      <motion.div
        initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.div style={{ y: reduce ? 0 : parallaxY }} className="absolute inset-[-10%]">
          <Image
            src="/images/ut-hero-home.jpg"
            alt="An Ultimate Travel minibus, specialists in SEND transport, on a tree-lined road in soft morning light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic vignette: darker toward the copy, dark at the seams for header/scroll-cue legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06140d]/85 via-[#06140d]/45 to-[#06140d]/15" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06140d]/70 via-transparent to-[#06140d]/55" />

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-20">
        <div className="max-w-xl">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <span className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Specialists in SEND Transport
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Calm, dependable journeys to school and back.
          </motion.h1>

          <motion.p
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-lg leading-relaxed text-white/80"
          >
            Ultimate Travel operates dedicated SEND routes with a trained
            passenger assistant on every journey, with familiar crews, steady
            routines, and care that shows from the first pickup to the last
            drop-off.
          </motion.p>

          <motion.div
            custom={3}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild className="btn-gold h-12 rounded-xl px-6 text-base shadow-none">
              <Link href="/contact">Book a Journey</Link>
            </Button>
            <Link
              href="/services"
              className="group inline-flex h-12 items-center gap-2 px-1 text-base font-medium text-white"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[var(--gold)]">
                Explore our services
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        custom={5}
        variants={reveal}
        initial="hidden"
        animate="show"
        className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
          Scroll
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
