"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Clock, X, Send, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const roles = [
  {
    id: 1,
    tag: "Driver",
    h: "PSV / D1 Driver",
    p: "Drive a dedicated home‑to‑school SEND route. Calm temperament and D1 license required.",
    loc: "Birmingham",
    type: "Full‑time / Part-time",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: 2,
    tag: "Assistant",
    h: "Passenger Assistant",
    p: "Support pupils on daily journeys with patience, structure, and warmth.",
    loc: "West Midlands",
    type: "Term‑time",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    id: 3,
    tag: "Driver",
    h: "PHV / HCV Drivers",
    p: "Join the wider fleet with regular shift patterns and route consistency.",
    loc: "Birmingham",
    type: "Full‑time",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: 4,
    tag: "Operations",
    h: "Route Coordinator",
    p: "Plan and oversee daily routes alongside schools and local authorities.",
    loc: "Hockley, B18",
    type: "Full‑time",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    id: 5,
    tag: "Care",
    h: "Safeguarding Lead",
    p: "Champion our safeguarding culture across the driver and assistant team.",
    loc: "Hybrid",
    type: "Full‑time",
    tagColor: "bg-[#f7d36f]/20 text-[#f7d36f] border-[#f7d36f]/30",
  },
  {
    id: 6,
    tag: "Training",
    h: "Driver Trainer",
    p: "Onboard and tutor new drivers in safe SEND‑specific practices.",
    loc: "Birmingham",
    type: "Part‑time",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", statement: "" });
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        className="relative w-full max-w-lg glass rounded-3xl border border-white/15 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10">
          <div>
            <p className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase mb-1">
              Green Destinations · {role.loc} · {role.type}
            </p>
            <h3 className="text-white font-extrabold text-xl">{role.h}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 transition-colors text-white/50 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
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
              <h4 className="text-white font-bold text-lg mb-2">Application Sent!</h4>
              <p className="text-blue-200/60 text-sm">
                Thanks {form.name.split(" ")[0]}! We'll be in touch soon.
              </p>
              <Button onClick={onClose} className="mt-6 bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl">
                Close
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-white/60 text-xs font-medium block mb-1">Full Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Smith"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#f7d36f]/50 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium block mb-1">Phone</label>
                  <Input
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+44 7xxx xxxxxx"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#f7d36f]/50 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium block mb-1">Email</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jane@example.com"
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#f7d36f]/50 rounded-xl"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium block mb-1">
                  Brief Statement
                </label>
                <Textarea
                  required
                  value={form.statement}
                  onChange={set("statement")}
                  placeholder="Explain your experience with SEND or transport..."
                  rows={3}
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#f7d36f]/50 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl py-3 transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-yellow-500/20"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#0b2245]/40 border-t-[#0b2245] rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Submit Application
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
      className="relative py-24 lg:py-32"
      style={{ background: "rgba(7,24,48,0.5)" }}
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7d36f]" />
              <span className="text-[#f7d36f] text-xs font-semibold tracking-widest uppercase">
                Join the Team
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Build a meaningful role in{" "}
              <span className="text-gradient-gold">SEND transport</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <p className="text-blue-200/70 leading-relaxed mb-4">
              Our values shape every journey, every interaction, and every role
              across Green Destinations. Join a team that makes a real
              difference.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <Input
                placeholder="Search roles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-xl focus:border-[#f7d36f]/50"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Role cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((role) => (
            <motion.div key={role.id} variants={fadeUp}>
              <Card className="group h-full bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(role)}>
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className={`text-[10px] font-bold tracking-widest ${role.tagColor}`}>
                      {role.tag}
                    </Badge>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#f7d36f] transition-colors">
                    {role.h}
                  </h3>
                  <p className="text-blue-200/55 text-sm leading-relaxed flex-1 mb-4">
                    {role.p}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-blue-300/60 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {role.loc}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {role.type}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-white/8 hover:bg-[#f7d36f] hover:text-[#0b2245] text-white border border-white/15 hover:border-[#f7d36f] rounded-xl font-semibold text-xs transition-all duration-200 flex items-center gap-1.5"
                  >
                    Apply Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-blue-200/50">
            No roles match your search.
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
