"use client";
import React from "react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "Green Destinations has changed our mornings. Having a consistent, calm driver who understands my son's sensory needs has made his school journey stress-free.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    name: "Sarah Jenkins",
    role: "Parent of Pupil (Autism)",
  },
  {
    text: "We value their operational transparency and high standards of safeguarding. Their passenger assistants are exceptionally well-trained in SEND care.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    name: "Dr. Evelyn Carter",
    role: "Headteacher, Oakridge School",
  },
  {
    text: "A highly dependable partner for SEND transport contracts. Their route coordination, compliance, and transparent reporting are exemplary.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    name: "Rachel Higgins",
    role: "Transport Commissioning Officer",
  },
  {
    text: "Finding wheelchair-accessible transport with staff who treat our daughter with absolute dignity was tough until we partnered with Green Destinations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    name: "Marcus Reynolds",
    role: "Parent of Pupil (Physical SEND)",
  },
  {
    text: "The first aid and autism awareness training provided to drivers gives us parents immense peace of mind. Truly professional and caring team.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    name: "Amelia Patel",
    role: "Parent of Pupil (ADHD)",
  },
  {
    text: "Their passenger assistants are excellent at emotional regulation support. Children arrive at school calm, happy, and ready to learn.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    name: "Simon Fletcher",
    role: "SENCo Lead, West Midlands Academies",
  },
  {
    text: "Reliable, warm, and highly professional. We trust them completely with our child's safety and routine every single day of the term.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    name: "Laura Bennett",
    role: "Parent of Pupil (Visual Impairment)",
  },
  {
    text: "They optimized our school run routes, reducing travel times and helping pupils start their day in a positive frame of mind.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    name: "David Vance",
    role: "Operations Coordinator",
  },
  {
    text: "Excellent communication. We receive live updates about arrival times, which helps us maintain a stable, predictable routine at home.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    name: "James Atherton",
    role: "Parent of Pupil (Global Dev Delay)",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "rgba(7,24,48,0.55)" }}
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f7d36f]" />
            <span className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            What our <span className="text-gradient-gold">partners & families</span> say
          </h2>
          <p className="text-blue-200/70 text-lg leading-relaxed mt-4">
            Read about the real-world impact of our dedicated, safety-first home-to-school journeys.
          </p>
        </motion.div>

        {/* Testimonials columns layout */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[660px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={26}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={24}
          />
        </div>
      </div>
    </section>
  );
}
