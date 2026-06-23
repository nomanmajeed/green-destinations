"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg";

const motes = [
  { l: "18%", t: "30%", d: 9, x: 6 },
  { l: "42%", t: "22%", d: 11, x: -8 },
  { l: "63%", t: "40%", d: 8, x: 5 },
  { l: "28%", t: "62%", d: 12, x: -6 },
  { l: "54%", t: "68%", d: 10, x: 7 },
  { l: "78%", t: "52%", d: 13, x: -5 },
];

const waypoints: [number, number][] = [
  [620, 380],
  [700, 150],
  [220, 320],
];

/**
 * Ambient, on-brand hero backdrop: a faint dotted "map" texture, breathing
 * green/gold aurora, a network of journey routes with travelling markers and
 * pulsing waypoints, plus drifting gold motes. Fully reduced-motion safe.
 */
export function HeroBackground() {
  const reduce = useReducedMotion();
  const mask =
    "radial-gradient(ellipse 80% 72% at 35% 38%, black 0%, transparent 72%)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Animated mesh gradient — the living, "magic movement" backdrop */}
      <MeshGradientBg className="opacity-70 dark:opacity-60" />

      {/* Veil over the mesh to keep foreground text crisp */}
      <div className="absolute inset-0 bg-[var(--body-bg)]/60 dark:bg-[var(--body-bg)]/55" />

      {/* Dotted map texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1.6px)",
          backgroundSize: "28px 28px",
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />

      {/* Route network */}
      <svg
        className="absolute inset-0 h-full w-full text-[var(--gold)]"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          id="ut-route-1"
          d="M-40 470 C 220 320, 360 520, 620 380 S 980 250, 1240 360"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.18"
          strokeDasharray="2 11"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          id="ut-route-2"
          d="M-40 200 C 260 120, 420 260, 700 150 S 1020 60, 1260 170"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.12"
          strokeDasharray="2 12"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {!reduce && (
          <>
            <circle r="5" fill="currentColor" fillOpacity="0.9">
              <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#ut-route-1" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="currentColor" fillOpacity="0.65">
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#ut-route-2" />
              </animateMotion>
            </circle>
          </>
        )}

        {waypoints.map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="currentColor"
            fillOpacity="0.5"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={reduce ? undefined : { scale: [1, 1.7, 1], opacity: [0.5, 0.12, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}
      </svg>

      {/* Drifting gold motes */}
      {!reduce &&
        motes.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ left: p.l, top: p.t, background: "var(--gold)" }}
            animate={{ y: [0, -22, 0], x: [0, p.x, 0], opacity: [0.12, 0.45, 0.12] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}

      {/* Blend edges into the page */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[var(--body-bg)] to-transparent" />
    </div>
  );
}
