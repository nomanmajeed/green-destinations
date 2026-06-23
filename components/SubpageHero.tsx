"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface SubpageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function SubpageHero({ eyebrow, title, subtitle, backgroundImage }: SubpageHeroProps) {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[44vh] items-end overflow-hidden border-b border-border">
      <motion.div
        initial={{ scale: reduce ? 1 : 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06140d]/92 via-[#06140d]/60 to-[#06140d]/30" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-32">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {eyebrow}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
