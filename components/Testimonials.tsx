"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Ultimate Travel changed our mornings. A consistent, calm driver who understands my son's sensory needs has made his school journey stress-free.",
    name: "Sarah Jenkins",
    role: "Parent of pupil (autism)",
  },
  {
    text: "We value their transparency and high safeguarding standards. Their passenger assistants are exceptionally well trained in SEND care.",
    name: "Dr. Evelyn Carter",
    role: "Headteacher, Oakridge School",
  },
  {
    text: "A dependable partner for SEND transport contracts. Their route coordination, compliance, and reporting are exemplary.",
    name: "Rachel Higgins",
    role: "Transport Commissioning Officer",
  },
  {
    text: "Finding accessible transport with staff who treat our daughter with real dignity was tough, until we partnered with Ultimate Travel.",
    name: "Marcus Reynolds",
    role: "Parent of pupil (physical SEND)",
  },
  {
    text: "The first aid and autism awareness training given to drivers gives us parents real peace of mind. A professional, caring team.",
    name: "Amelia Patel",
    role: "Parent of pupil (ADHD)",
  },
  {
    text: "Their assistants are excellent at emotional regulation support. Children arrive at school calm, happy, and ready to learn.",
    name: "Simon Fletcher",
    role: "SENCo Lead, West Midlands Academies",
  },
  {
    text: "Reliable, warm, and highly professional. We trust them completely with our child's safety and routine every single day of term.",
    name: "Laura Bennett",
    role: "Parent of pupil (visual impairment)",
  },
  {
    text: "They optimised our school-run routes, reducing travel times and helping pupils start the day in a positive frame of mind.",
    name: "David Vance",
    role: "Operations Coordinator",
  },
  {
    text: "Excellent communication. We receive updates about arrival times, which helps us keep a stable, predictable routine at home.",
    name: "James Atherton",
    role: "Parent of pupil (developmental delay)",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--section-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <span className="rule-gold block" />
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What families and partners say.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The real-world impact of dedicated, safety-first home-to-school
            journeys.
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={26} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={32} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={29} />
        </div>
      </div>
    </section>
  );
}
