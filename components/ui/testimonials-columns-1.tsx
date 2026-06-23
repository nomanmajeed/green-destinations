"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

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

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <div className={props.className}>
      <motion.div
        animate={reduce ? undefined : { translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <figure
                key={i}
                className="w-full max-w-xs rounded-3xl border border-border bg-card p-8 transition-colors duration-300 hover:border-[var(--gold)]/40"
              >
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  {text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)] text-xs font-bold tracking-tight text-[var(--gold)]">
                    {initials(name)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-foreground">
                      {name}
                    </span>
                    <span className="text-xs leading-5 text-muted-foreground">{role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
