"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 max-w-xs w-full group backdrop-blur-sm"
                  key={i}
                >
                  <div className="text-blue-100/80 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-white tracking-tight leading-5 text-sm group-hover:text-[#f7d36f] transition-colors">
                        {name}
                      </div>
                      <div className="text-xs leading-5 text-blue-200/50 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
