"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / (duration * 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 98, suffix: "%", label: "On-time rate", icon: ShieldCheck },
  { value: 500, suffix: "+", label: "Daily routes", icon: Users },
  { value: 15, suffix: "+", label: "LA partnerships", icon: Star },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-500/8 blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f7d36f] animate-pulse" />
              <span className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase">
                Specialist SEND Transport
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
            >
              Home‑to‑school{" "}
              <span className="text-gradient-gold">transport</span>
              <br />
              with care and{" "}
              <span className="relative inline-block">
                consistency
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#f7d36f] origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-blue-200/80 leading-relaxed mb-8 max-w-lg"
            >
              Green Destinations provides dedicated SEND transport connecting
              families, schools, and local authorities with safe, reliable
              journeys tailored to every child's needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold px-7 py-3 rounded-2xl text-base transition-all duration-200 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 flex items-center gap-2"
              >
                Book a Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => scrollTo("about")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold px-7 py-3 rounded-2xl text-base backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-[#f7d36f]" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white leading-none">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-blue-300/70 mt-0.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Van illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

              {/* Main card */}
              <div className="relative glass rounded-3xl p-8 shadow-2xl shadow-black/40">
                {/* Bus SVG */}
                <svg
                  viewBox="0 0 460 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  {/* Bus body */}
                  <rect
                    x="20"
                    y="50"
                    width="380"
                    height="110"
                    rx="20"
                    fill="rgba(30,95,184,0.25)"
                    stroke="rgba(247,211,111,0.4)"
                    strokeWidth="2"
                  />
                  {/* Front cabin */}
                  <rect
                    x="380"
                    y="70"
                    width="60"
                    height="70"
                    rx="14"
                    fill="rgba(30,95,184,0.2)"
                    stroke="rgba(247,211,111,0.4)"
                    strokeWidth="2"
                  />
                  {/* Windshield */}
                  <rect
                    x="388"
                    y="80"
                    width="42"
                    height="34"
                    rx="6"
                    fill="rgba(100,160,255,0.3)"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                  {/* Windows */}
                  <rect
                    x="40"
                    y="65"
                    width="72"
                    height="42"
                    rx="8"
                    fill="rgba(100,160,255,0.25)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <rect
                    x="130"
                    y="65"
                    width="72"
                    height="42"
                    rx="8"
                    fill="rgba(100,160,255,0.25)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <rect
                    x="220"
                    y="65"
                    width="72"
                    height="42"
                    rx="8"
                    fill="rgba(100,160,255,0.25)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <rect
                    x="310"
                    y="65"
                    width="55"
                    height="42"
                    rx="8"
                    fill="rgba(100,160,255,0.25)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  {/* Door */}
                  <rect
                    x="155"
                    y="115"
                    width="42"
                    height="45"
                    rx="4"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  {/* Gold stripe */}
                  <rect
                    x="20"
                    y="118"
                    width="380"
                    height="5"
                    rx="2.5"
                    fill="url(#stripeGrad)"
                  />
                  <defs>
                    <linearGradient
                      id="stripeGrad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#f7d36f" stopOpacity="0.9" />
                      <stop
                        offset="100%"
                        stopColor="#e6ad2e"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>
                  {/* Wheels */}
                  <circle
                    cx="100"
                    cy="168"
                    r="24"
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="3"
                  />
                  <circle cx="100" cy="168" r="9" fill="#f7d36f" />
                  <circle
                    cx="360"
                    cy="168"
                    r="24"
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="3"
                  />
                  <circle cx="360" cy="168" r="9" fill="#f7d36f" />
                  {/* Headlight */}
                  <ellipse
                    cx="432"
                    cy="126"
                    rx="7"
                    ry="5"
                    fill="rgba(255,240,150,0.8)"
                  />
                  {/* Road */}
                  <rect
                    x="0"
                    y="192"
                    width="460"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,0.06)"
                  />
                </svg>

                {/* Label badge */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">
                      Green Destinations
                    </p>
                    <p className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase mt-0.5">
                      SEND Transport Specialists
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#f7d36f] text-[#f7d36f]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-gold rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-[#f7d36f] text-xs font-bold">DBS Checked</p>
                <p className="text-white/70 text-xs">All drivers & escorts</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-xl border border-white/10"
              >
                <p className="text-white text-xs font-bold">
                  Safeguarding First
                </p>
                <p className="text-blue-300/70 text-xs">Every journey</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
