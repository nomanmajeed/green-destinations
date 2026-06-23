"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Scale, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: ShieldCheck, label: "Enhanced DBS Checked" },
  { icon: Award, label: "PATS Accredited" },
  { icon: Scale, label: "Section 508B Compliant" },
  { icon: BadgeCheck, label: "Local Authority Approved" },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-32 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <span className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Specialist SEND Transport
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            School transport that families can truly rely on.
          </motion.h1>

          <motion.p
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Dedicated home-to-school journeys across the West Midlands, calm,
            safe, and consistent, with a trained assistant on every route.
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
            <Button
              asChild
              variant="ghost"
              className="group h-12 rounded-xl px-5 text-base text-foreground hover:bg-muted"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore our services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_30px_60px_-30px_rgba(11,34,69,0.45)]">
            <Image
              src="/images/gd-hero-journey.jpg"
              alt="A Green Destinations minibus on a tree-lined road in soft morning light"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2245]/35 via-transparent to-transparent" />
          </div>

          {/* Quiet, real proof point anchored to the image */}
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur">
            <p className="text-2xl font-bold tracking-tight text-foreground">
              Since 2012
            </p>
            <p className="text-xs text-muted-foreground">
              Trusted by West Midlands authorities
            </p>
          </div>
        </motion.div>
      </div>

      {/* Credentials strip (under the hero, not inside it) */}
      <div className="border-y border-border bg-[var(--section-bg)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {credentials.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 px-4 py-5 text-center"
            >
              <Icon className="h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={2} />
              <span className="text-xs font-semibold tracking-tight text-foreground/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
