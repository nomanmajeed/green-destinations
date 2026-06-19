"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function SubpageHero({ title, subtitle, backgroundImage }: SubpageHeroProps) {
  return (
    <div className="relative h-[45vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center border-b border-border bg-black">
      {/* Background Image with zoom & fade animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.65 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none filter brightness-75 contrast-105"
        />
        {/* Soft radial overlay for premium look */}
        <div className="absolute inset-0 bg-radial-gradient-to-b from-transparent via-black/40 to-black/85" />
      </motion.div>

      {/* Grid overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            Green Destinations Transit
          </span>
        </motion.div>

        {/* Dynamic Title with Gold Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle with premium glass backdrop blur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl mx-auto bg-black/35 backdrop-blur-md border border-white/5 rounded-2xl p-4 sm:p-5 shadow-2xl"
        >
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom fade out to merge smoothly with section content */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </div>
  );
}
