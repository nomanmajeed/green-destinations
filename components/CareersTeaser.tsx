"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PoundSterling, CalendarCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: PoundSterling, label: "Competitive hourly rates and bonuses" },
  { icon: CalendarCheck, label: "Term-time hours that fit family life" },
  { icon: Heart, label: "Work that makes a daily difference" },
];

export default function CareersTeaser() {
  return (
    <section id="careers" className="bg-background py-15 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--gold-soft)] blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Build a career with purpose.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                Ultimate Travel is recruiting drivers, passenger assistants and
                contractors across Yorkshire, offering term-time
                roles with competitive pay and a safeguarding-first culture.
              </p>
              <Button
                asChild
                className="btn-gold group mt-7 h-12 rounded-xl px-6 text-base shadow-none"
              >
                <Link href="/careers" className="flex items-center gap-2">
                  View open roles
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <ul className="grid gap-3">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3.5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gold-soft)]">
                    <Icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-foreground/85">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
