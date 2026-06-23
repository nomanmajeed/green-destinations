"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Clock, X, Send, Search, ArrowRight, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const roles = [
  {
    id: 1,
    tag: "Assistant",
    h: "Passenger Assistant — Home-to-School Transport",
    p: "Support children with SEND on their daily school runs. Split shifts are ideal for local residents.",
    loc: "West Midlands",
    type: "Part time (term time only)",
    salary: "£12.71 / hour",
    hours: "07:30–09:00 & 14:30–16:00 (Mon–Fri)",
    incentives: "Stable regional route allocations",
    reqs: [
      "No prior experience required, an empathetic nature is essential",
      "Enhanced DBS check and professional references",
      "Local Authority approval and ID badge prior to start",
      "Safeguarding-focused interview process",
    ],
  },
  {
    id: 2,
    tag: "Driver",
    h: "PSV Drivers (D or D1 Licence)",
    p: "Transport children with SEND in a safe, comfortable, and supportive environment every school day.",
    loc: "West Midlands",
    type: "Part time (term time only)",
    salary: "From £13.00 / hour",
    hours: "20–30 hours per week",
    incentives: "Stable term-time schedules",
    reqs: [
      "Valid PSV licence (category D or D1)",
      "Professional, patient, and friendly attitude",
      "Punctuality and reliability are essential",
      "Local Authority approval and ID badge prior to start",
    ],
  },
  {
    id: 3,
    tag: "Driver",
    h: "Swindon PSV Drivers Wanted",
    p: "Join our expanding Swindon driver team supporting school routes, with consistent routing and incentives.",
    loc: "Swindon and surrounding areas",
    type: "Part time (term time)",
    salary: "Up to £17.00 / hour",
    hours: "20–30 hours per week",
    incentives: "£1,000 joining bonus + referral opportunities",
    reqs: [
      "Valid PSV licence (category D or D1)",
      "Excellent local Swindon geography knowledge",
      "Friendly attitude towards children and parents",
      "Local Authority approval and ID badge prior to start",
    ],
  },
  {
    id: 4,
    tag: "Contractor",
    h: "PHV/HCV Drivers (Taxi Licensed)",
    p: "Contract of services for independent drivers using their own licensed taxi vehicles, with fixed pay per route.",
    loc: "West Midlands",
    type: "Contract / route-based",
    salary: "Fixed pay per route",
    hours: "Varies by route allocation",
    incentives: "Substitution rights and work for other hirers allowed",
    reqs: [
      "Own licensed taxi vehicle in the West Midlands",
      "Good proficiency in the English language",
      "Enhanced DBS certificate and local authority badge in hand",
      "Ability to appoint substitute eligible drivers",
    ],
  },
];

type Role = (typeof roles)[0];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ApplyModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", statement: "", licence: "", taxiVehicle: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "bg-background border-border text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--gold)]/60 rounded-xl";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto p-4 sm:items-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-[#06140d]/65 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
        className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        <div className="flex items-start justify-between gap-2 border-b border-border p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {role.loc} · {role.type}
            </p>
            <h3 className="mt-1 text-xl font-bold leading-tight tracking-tight text-foreground">{role.h}</h3>
            <p className="mt-1 text-sm font-semibold text-[var(--gold)]">{role.salary}</p>
          </div>
          <button
            onClick={onClose}
            className="-m-1.5 shrink-0 rounded-xl p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[var(--gold-soft)]">
                <Check className="h-7 w-7 text-[var(--gold)]" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold tracking-tight text-foreground">Application received</h4>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our recruitment team will contact you about the
                vetting steps.
              </p>
              <Button onClick={onClose} className="btn-gold mt-5 rounded-xl shadow-none">
                Close
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-4 text-left">
              <div className="flex items-start gap-2.5 rounded-2xl border border-[var(--gold)]/25 bg-[var(--gold-soft)] p-3.5 text-xs text-foreground/85">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <div>
                  <span className="font-bold text-foreground">Regulatory vetting required.</span> This role needs Enhanced
                  DBS clearance and Local Authority badge approval.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">Full name</label>
                  <Input required value={form.name} onChange={set("name")} placeholder="Aisha Okonkwo" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">Phone number</label>
                  <Input required value={form.phone} onChange={set("phone")} placeholder="07700 900318" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Email address</label>
                <Input required type="email" value={form.email} onChange={set("email")} placeholder="aisha@example.com" className={inputClass} />
              </div>

              {(role.id === 2 || role.id === 3) && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">PSV licence details (D/D1)</label>
                  <Input required value={form.licence} onChange={set("licence")} placeholder="Category and licence number" className={inputClass} />
                </div>
              )}

              {role.id === 4 && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">Licensed taxi vehicle details</label>
                  <Input required value={form.taxiVehicle} onChange={set("taxiVehicle")} placeholder="Make, model, licensing authority" className={inputClass} />
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Experience and statement</label>
                <Textarea
                  required
                  value={form.statement}
                  onChange={set("statement")}
                  placeholder="Briefly describe your experience with school transport, safeguarding, or SEND support."
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Button type="submit" disabled={submitting} className="btn-gold h-12 w-full rounded-xl shadow-none">
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/40 border-t-current" />
                    Submitting application
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit application
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<Role | null>(null);
  const [query, setQuery] = useState("");

  const filtered = roles.filter(
    (r) =>
      r.h.toLowerCase().includes(query.toLowerCase()) ||
      r.tag.toLowerCase().includes(query.toLowerCase()) ||
      r.loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="careers" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid items-end gap-10 lg:grid-cols-2"
        >
          <div>
            <motion.span variants={fadeUp} className="rule-gold block" />
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              A rewarding role in SEND transport.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <p className="leading-relaxed text-muted-foreground">
              Join a team dedicated to safe, respectful, and punctual journeys. We
              pay competitive rates, offer stable school-term contracts, and reward
              teams with bonuses.
            </p>
            <div className="relative mt-5">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by role, category, or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-11 rounded-xl border-border bg-card pl-10 text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--gold)]/60"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {filtered.map((role) => (
            <motion.button
              key={role.id}
              variants={fadeUp}
              onClick={() => setSelected(role)}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-left transition-colors duration-300 hover:border-[var(--gold)]/40"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {role.tag}
                </span>
                <span className="text-sm font-bold text-[var(--gold)]">{role.salary}</span>
              </div>

              <h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-[var(--gold)]">
                {role.h}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{role.p}</p>

              <dl className="mt-4 space-y-1 rounded-xl bg-muted/60 p-3.5 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground/80">Hours:</dt>
                  <dd>{role.hours}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground/80">Incentives:</dt>
                  <dd>{role.incentives}</dd>
                </div>
              </dl>

              <ul className="mt-4 space-y-2">
                {role.reqs.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]" strokeWidth={2.5} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" /> {role.loc}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[var(--gold)]" /> {role.type}
                </span>
              </div>

              <span className="mt-5 flex items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-[var(--gold)] group-hover:bg-[var(--gold-soft)]">
                Apply for this role
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">No roles match your search.</div>
        )}
      </div>

      <AnimatePresence>
        {selected && <ApplyModal role={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
