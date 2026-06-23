"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
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
import { HeroBackground } from "@/components/blocks/hero-background";

const credentials = [
  { icon: Accessibility, label: "Wheelchair accessible" },
  { icon: ShieldCheck, label: "Safe & reliable" },
  { icon: Users, label: "Specialists in SEND transport" },
  { icon: MapPin, label: "School runs across the UK" },
  { icon: Flag, label: "Proudly UK based" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  // Cursor-reactive 3D tilt for the hero image
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [9, -9]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [-9, 9]), {
    stiffness: 150,
    damping: 18,
  });

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => {
    px.set(0);
    py.set(0);
  };

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-32 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur"
          >
            <span className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Specialists in SEND Transport
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
            Ultimate Travel provides dedicated home-to-school journeys, calm,
            safe, and consistent, with a trained passenger assistant on every
            route.
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
          ref={imageRef}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            whileHover={reduce ? undefined : { scale: 1.015 }}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[0_30px_60px_-30px_rgba(6,20,13,0.45)] transition-shadow duration-500 hover:shadow-[0_45px_80px_-30px_rgba(6,20,13,0.6)]"
          >
            <motion.div
              style={{ y: reduce ? 0 : parallaxY }}
              className="absolute inset-[-8%]"
            >
              <div
                className={`relative h-full w-full ${reduce ? "" : "animate-kenburns"} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
              >
                <Image
                  src="/images/ut-hero-home.jpg"
                  alt="An Ultimate Travel minibus, specialists in SEND transport, on a tree-lined road in soft morning light"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06140d]/40 via-transparent to-transparent" />

            {/* Gold ring that lights up on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-2 ring-inset ring-[var(--gold)]/0 transition-all duration-500 group-hover:ring-[var(--gold)]/45" />

            {/* Soft sheen that fades in on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* One-shot light sweep across the frame on load */}
            {!reduce && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-150%" }}
                animate={{ x: "350%" }}
                transition={{ duration: 1.3, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </motion.div>

          {/* Quiet, real proof point — gentle float */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-5 left-5"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur"
            >
              <p className="text-2xl font-bold tracking-tight text-foreground">
                Since 2012
              </p>
              <p className="text-xs text-muted-foreground">
                Trusted by families and authorities
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Credentials strip (under the hero, not inside it) */}
      <div className="relative border-y border-border bg-[var(--section-bg)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
          {credentials.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-2.5 px-4 py-5 text-center"
            >
              <Icon className="h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={2} />
              <span className="text-xs font-semibold tracking-tight text-foreground/80">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
