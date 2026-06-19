"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Clock, X, Send, Search, ArrowRight, PoundSterling, Award, BadgeAlert, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const roles = [
  {
    id: 1,
    tag: "Assistant",
    h: "Passenger Assistant – Home-to-School Transport",
    p: "Make a real difference by supporting children with Special Educational Needs and Disabilities (SEND) on their daily school runs. Split shifts are ideal for local residents.",
    loc: "West Midlands",
    type: "Part Time (Term Time Only)",
    salary: "£12.71 per hour",
    hours: "07:30–09:00 & 14:30–16:00 (Mon–Fri)",
    incentives: "Stable regional route allocations",
    tagColor: "bg-pink-500/10 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/20 dark:border-pink-500/30",
    reqs: [
      "No prior experience required - empathetic nature is essential",
      "Enhanced DBS check and professional references",
      "Local Authority approval and ID badge prior to start",
      "Safeguarding-focused interview process"
    ]
  },
  {
    id: 2,
    tag: "Driver",
    h: "PSV Drivers (D or D1 Licence)",
    p: "Transport children with Special Educational Needs and Disabilities (SEND) in a safe, comfortable, and supportive environment every school day.",
    loc: "West Midlands",
    type: "Part Time (Term Time Only)",
    salary: "From £13.00 per hour",
    hours: "20–30 hours per week",
    incentives: "Stable term-time schedules",
    tagColor: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-500/30",
    reqs: [
      "Valid PSV license (category D or D1)",
      "Professional, patient, and friendly attitude",
      "Punctuality and reliability are essential",
      "Local Authority approval and ID badge prior to start"
    ]
  },
  {
    id: 3,
    tag: "Driver",
    h: "Swindon PSV Drivers Wanted",
    p: "Join our expanding Swindon driver team supporting school routes. High earning potential, consistent routing, and excellent sign-on incentives.",
    loc: "Swindon & Surrounding Areas",
    type: "Part Time (Term Time)",
    salary: "Up to £17.00 per hour",
    hours: "20–30 hours per week",
    incentives: "£1,000 Joining Bonus + Referral Opportunities",
    tagColor: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30",
    reqs: [
      "Valid PSV license (category D or D1)",
      "Excellent local Swindon geography knowledge",
      "Friendly attitude towards children and parents",
      "Local Authority approval and ID badge prior to start"
    ]
  },
  {
    id: 4,
    tag: "Contractor",
    h: "PHV/HCV Drivers (Taxi Licensed)",
    p: "Contract of services for independent drivers using their own licensed taxi vehicles. Earn fixed pay per route supporting SEND transport.",
    loc: "West Midlands",
    type: "Contract / Route-based",
    salary: "Fixed Pay Per Route",
    hours: "Varies by route allocation",
    incentives: "Substitution rights & work for other hirers allowed",
    tagColor: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30",
    reqs: [
      "Own licensed taxi vehicle in West Midlands",
      "Good proficiency in the English language",
      "Enhanced DBS certificate & local authority badge in hand",
      "Ability to appoint substitute eligible drivers"
    ]
  }
];

type Role = typeof roles[0];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ApplyModal({
  role,
  onClose,
}: {
  role: Role;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", statement: "", licence: "", taxiVehicle: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        className="relative w-full max-w-lg glass rounded-3xl border border-border shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border bg-card/10">
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
              {role.loc} · {role.type}
            </p>
            <h3 className="text-foreground font-extrabold text-xl leading-tight">{role.h}</h3>
            <p className="text-emerald-500 dark:text-emerald-400 text-sm font-semibold mt-1 flex items-center gap-1.5">
              <PoundSterling className="w-4 h-4" /> {role.salary}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-foreground/10 transition-colors text-foreground/50 hover:text-foreground cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-yellow-500/30">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#0b2245" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-foreground font-bold text-lg mb-2">Application Received!</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Thank you, {form.name.split(" ")[0]}! Our recruitment team will contact you shortly regarding the vetting steps.
              </p>
              <Button onClick={onClose} className="bg-gold hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl cursor-pointer">
                Close
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-4 text-left">
              {/* Requirements Reminder */}
              <div className="p-3.5 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-xs text-foreground/80 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gold">Regulatory Vetting Required:</span> This role requires Enhanced DBS clearance and Local Authority badge approval.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-foreground/70 text-xs font-medium block mb-1">Full Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Smith"
                    className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-foreground/70 text-xs font-medium block mb-1">Phone Number</label>
                  <Input
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+44 7xxx xxxxxx"
                    className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground/70 text-xs font-medium block mb-1">Email Address</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jane@example.com"
                  className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl"
                />
              </div>

              {/* Role Specific Inputs */}
              {(role.id === 2 || role.id === 3) && (
                <div>
                  <label className="text-foreground/70 text-xs font-medium block mb-1">PSV Licence Details (D/D1)</label>
                  <Input
                    required
                    value={form.licence}
                    onChange={set("licence")}
                    placeholder="e.g. D1 Category, License Number..."
                    className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl"
                  />
                </div>
              )}

              {role.id === 4 && (
                <div>
                  <label className="text-foreground/70 text-xs font-medium block mb-1">Licensed Taxi Vehicle Details</label>
                  <Input
                    required
                    value={form.taxiVehicle}
                    onChange={set("taxiVehicle")}
                    placeholder="Make, Model, Licensing Authority..."
                    className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl"
                  />
                </div>
              )}

              <div>
                <label className="text-foreground/70 text-xs font-medium block mb-1">
                  Experience & Statement
                </label>
                <Textarea
                  required
                  value={form.statement}
                  onChange={set("statement")}
                  placeholder="Briefly state your experience with school transport, child safeguarding, or SEND support..."
                  rows={3}
                  className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl py-3 transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-yellow-500/20 cursor-pointer"
              >
                {submitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="w-4 h-4 border-2 border-[#0b2245]/40 border-t-[#0b2245] rounded-full animate-spin" />
                    Submitting Application…
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    <Send className="w-4 h-4" />
                    Submit Application Form
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
    <section
      id="careers"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--section-bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-end mb-14"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Careers & Partnerships
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Build a rewarding role in{" "}
              <span className="text-gradient-gold">SEND passenger transport</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Join a team dedicated to safe, respectful, and punctual journeys. 
              We pay competitive rates, offer stable school-term contracts, and reward teams with bonuses.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <Input
                placeholder="Search by role, category, or location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 rounded-xl focus:border-gold/50"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Role cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 gap-6"
        >
          {filtered.map((role) => (
            <motion.div key={role.id} variants={fadeUp}>
              <Card className="group h-full bg-card/45 border-border hover:border-foreground/15 hover:bg-card/70 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelected(role)}>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="outline" className={`text-[10px] font-bold tracking-widest ${role.tagColor}`}>
                        {role.tag}
                      </Badge>
                      <span className="text-emerald-500 dark:text-emerald-400 text-sm font-bold flex items-center gap-1">
                        <PoundSterling className="w-4 h-4 shrink-0" /> {role.salary}
                      </span>
                    </div>

                    <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-gold transition-colors leading-tight">
                      {role.h}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {role.p}
                    </p>

                    <div className="p-3 bg-card/30 border border-border/40 rounded-xl text-xs text-foreground/60 space-y-1.5 mb-4">
                      {role.hours && <div><span className="font-semibold text-foreground/80">Hours:</span> {role.hours}</div>}
                      {role.incentives && <div><span className="font-semibold text-foreground/80">Incentives:</span> {role.incentives}</div>}
                    </div>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-semibold text-foreground/80 block uppercase tracking-wider">Key Requirements:</span>
                      <ul className="space-y-1">
                        {role.reqs.map((req, index) => (
                          <li key={index} className="text-xs text-foreground/75 flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-foreground/70 mb-4 justify-between border-t border-border/40 pt-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> {role.loc}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" /> {role.type}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-foreground/5 hover:bg-gold hover:text-[#0b2245] text-foreground border border-border hover:border-gold rounded-xl font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer py-4"
                  >
                    Apply for this Role
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-foreground/50">
            No roles match your search criteria.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ApplyModal role={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
