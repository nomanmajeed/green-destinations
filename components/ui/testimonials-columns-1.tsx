"use client";

import React, { useEffect, useRef, useState } from "react";

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image?: string;
}

function initials(name: string) {
  return name
    .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ text, name, role }: Testimonial) {
  return (
    <figure className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 sm:w-[360px]">
      <blockquote className="line-clamp-4 text-sm leading-relaxed text-foreground/85">
        {text}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)] text-[11px] font-bold tracking-tight text-[var(--gold)]">
          {initials(name)}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold tracking-tight text-foreground">
            {name}
          </span>
          <span className="truncate text-xs text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeTrack({
  testimonials,
  ariaHidden,
  trackRef,
}: {
  testimonials: Testimonial[];
  ariaHidden?: boolean;
  trackRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={trackRef} className="flex shrink-0 gap-5 pr-5" aria-hidden={ariaHidden || undefined}>
      {testimonials.map((t) => (
        <TestimonialCard key={`${ariaHidden ? "b" : "a"}-${t.name}`} {...t} />
      ))}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

/** Infinite horizontal marquee — content travels left to right, no loop seam. */
export function TestimonialsRow({
  testimonials,
  duration = 52,
  className = "",
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const trackWidthRef = useRef(0);

  useEffect(() => {
    if (reduce) return;

    const track = trackRef.current;
    const inner = innerRef.current;
    if (!track || !inner) return;

    let raf = 0;
    let last = performance.now();
    let running = false;

    const applyTransform = () => {
      inner.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
    };

    const measureTrack = () => track.offsetWidth;

    const start = (width: number) => {
      if (width <= 0) return;
      trackWidthRef.current = width;
      offsetRef.current = -width;
      applyTransform();
      running = true;
      last = performance.now();
    };

    const waitForLayout = () => {
      const width = measureTrack();
      if (width > 0) {
        start(width);
        return;
      }
      raf = requestAnimationFrame(waitForLayout);
    };

    const ready = document.fonts?.ready ?? Promise.resolve();
    ready.then(waitForLayout).catch(waitForLayout);

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!running) return;

      const dt = Math.min(now - last, 32);
      last = now;

      const trackWidth = trackWidthRef.current;
      if (trackWidth <= 0) return;

      offsetRef.current += (trackWidth / (duration * 1000)) * dt;
      if (offsetRef.current >= 0) offsetRef.current -= trackWidth;

      applyTransform();
    };

    raf = requestAnimationFrame(tick);

    const onResize = () => {
      const next = measureTrack();
      if (next <= 0 || next === trackWidthRef.current) return;
      const prev = trackWidthRef.current;
      trackWidthRef.current = next;
      if (prev > 0) {
        offsetRef.current = (offsetRef.current / prev) * next;
      } else {
        offsetRef.current = -next;
      }
      while (offsetRef.current > 0) offsetRef.current -= next;
      while (offsetRef.current <= -next) offsetRef.current += next;
    };

    const onVisible = () => {
      last = performance.now();
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisible);
      inner.style.transform = "";
    };
  }, [duration, reduce]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="flex w-max [transform:translateZ(0)]">
        <MarqueeTrack trackRef={trackRef} testimonials={testimonials} />
        <MarqueeTrack testimonials={testimonials} ariaHidden />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-1 w-10 bg-gradient-to-r from-background to-transparent sm:w-14"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-1 w-10 bg-gradient-to-l from-background to-transparent sm:w-14"
      />
    </div>
  );
}
