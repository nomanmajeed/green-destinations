"use client";

import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";

// On-brand palettes (Ultimate Travel: forest green + antique gold)
const LIGHT_COLORS = ["#eef3ed", "#d7e6db", "#0f4a30", "#9cc0aa", "#e7b53e", "#f4f6f2"];
const DARK_COLORS = ["#06140d", "#0b1f15", "#12613f", "#16301f", "#e7c569", "#0a1c12"];

interface MeshGradientBgProps {
  className?: string;
  distortion?: number;
  swirl?: number;
  speed?: number;
  offsetX?: number;
}

/**
 * A slow, theme-aware animated mesh-gradient that fills its parent. Sizes itself
 * to the container, follows light/dark, and freezes for reduced-motion users.
 */
export function MeshGradientBg({
  className = "",
  distortion = 0.9,
  swirl = 0.55,
  speed = 0.3,
  offsetX = 0.05,
}: MeshGradientBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ w: Math.ceil(r.width), h: Math.ceil(r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => mo.disconnect();
  }, []);

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      {mounted && size.w > 0 && size.h > 0 && (
        <MeshGradient
          width={size.w}
          height={size.h}
          colors={isDark ? DARK_COLORS : LIGHT_COLORS}
          distortion={distortion}
          swirl={swirl}
          grainMixer={0}
          grainOverlay={0}
          speed={reduce ? 0 : speed}
          offsetX={offsetX}
        />
      )}
    </div>
  );
}
