"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Having the same driver and assistant each day has transformed our mornings. My son knows exactly what to expect, and that predictability matters enormously.",
    name: "Sarah Jenkins",
    role: "Parent of pupil (autism)",
  },
  {
    text: "Ultimate Travel's safeguarding documentation and staff training give us confidence. Their assistants understand the needs of our SEND cohort.",
    name: "Dr. Evelyn Carter",
    role: "Headteacher, Oakridge School",
  },
  {
    text: "A dependable contracting partner. Route reporting is clear, compliance is handled properly, and communication is always straightforward.",
    name: "Rachel Higgins",
    role: "Transport Commissioning Officer",
  },
  {
    text: "We struggled to find transport where our daughter would be treated with genuine respect. Ultimate Travel understood that from the very first conversation.",
    name: "Marcus Reynolds",
    role: "Parent of pupil (physical SEND)",
  },
  {
    text: "Knowing the crew has first aid and autism awareness training gives us real reassurance. They are professional without being impersonal.",
    name: "Amelia Patel",
    role: "Parent of pupil (ADHD)",
  },
  {
    text: "Pupils arrive settled and ready to learn. The assistants are skilled at de-escalation and know when a child needs space or encouragement.",
    name: "Simon Fletcher",
    role: "SENCo Lead, West Midlands Academies",
  },
  {
    text: "Punctual, warm and thoroughly professional. We have complete confidence in the team that collects our daughter every school day.",
    name: "Laura Bennett",
    role: "Parent of pupil (visual impairment)",
  },
  {
    text: "They restructured several of our routes, cutting journey times without compromising on pupil comfort. A well-run operation.",
    name: "David Vance",
    role: "Operations Coordinator",
  },
  {
    text: "We receive timely updates about pick-up and drop-off. That level of communication helps us keep a stable routine at home.",
    name: "James Atherton",
    role: "Parent of pupil (developmental delay)",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24 lg:py-32">
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
            Voices from the people we support.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Parents, schools and commissioning partners on what dependable SEND
            transport means in practice.
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
