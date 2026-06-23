"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const info = [
  { icon: MapPin, title: "Office", v: "386 Park Road, Hockley\nBirmingham, B18 5ST" },
  {
    icon: Mail,
    title: "Email",
    v: "admin@greendestinationsltd.com",
    href: "mailto:admin@greendestinationsltd.com",
  },
  { icon: Phone, title: "Enquiry line", v: "0121 553 3363", href: "tel:01215533363" },
  { icon: Clock, title: "Operating hours", v: "Monday to Friday, 7:00 to 19:00" },
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  const inputClass =
    "h-11 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--gold)]/60";

  return (
    <section id="contact" ref={ref} className="bg-[var(--section-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: heading + info */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.span variants={fadeUp} className="rule-gold block" />
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Start the conversation.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Whether you are a family, school, or local authority, we aim to
              respond within one working day.
            </motion.p>

            <motion.ul variants={stagger} className="mt-10 divide-y divide-border border-y border-border">
              {info.map((item) => (
                <motion.li key={item.title} variants={fadeUp} className="flex items-center gap-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gold-soft)]">
                    <item.icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="whitespace-pre-line text-sm font-medium text-foreground transition-colors hover:text-[var(--gold)]"
                      >
                        {item.v}
                      </a>
                    ) : (
                      <p className="whitespace-pre-line text-sm font-medium text-foreground">{item.v}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] border border-border bg-card p-7 sm:p-9"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-[var(--gold-soft)]">
                  <Check className="h-8 w-8 text-[var(--gold)]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Message received</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out. A member of the team will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground/80">Full name</label>
                    <Input required value={form.name} onChange={set("name")} placeholder="Aisha Okonkwo" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground/80">Phone</label>
                    <Input value={form.phone} onChange={set("phone")} placeholder="07700 900318" className={inputClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">Email</label>
                  <Input required type="email" value={form.email} onChange={set("email")} placeholder="aisha@example.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground/80">Message</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your transport needs."
                    rows={5}
                    className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--gold)]/60 resize-none"
                  />
                </div>
                <Button type="submit" disabled={sending} className="btn-gold h-12 w-full rounded-xl text-base shadow-none">
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b2245]/40 border-t-[#0b2245]" />
                      Sending
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Send message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-border"
        >
          <div className="relative h-[340px] sm:h-[440px]">
            <iframe
              title="Green Destinations office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2136006421066!2d-1.9213455!3d52.4933946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc7e5c9a4449%3A0xe54e389d4fb842b1!2s386%20Park%20Rd%2C%20Hockley%2C%20Birmingham%20B18%205ST!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full w-full"
            />
            <a
              href="https://maps.google.com/?q=386+Park+Road,+Hockley,+Birmingham,+B18+5ST"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl border border-border bg-card/90 px-3.5 py-2 text-xs font-semibold text-foreground shadow-md backdrop-blur transition-colors hover:text-[var(--gold)]"
            >
              Open in Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
