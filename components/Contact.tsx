"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const info = [
  {
    icon: MapPin,
    title: "Office Address",
    v: "386 Park Road, Hockley\nBirmingham, B18 5ST",
  },
  {
    icon: Mail,
    title: "Email Channels",
    v: "General: admin@greendestinationsltd.com\nCareers: recruitment@greendestinationsltd.com",
    href: "mailto:admin@greendestinationsltd.com",
  },
  {
    icon: Phone,
    title: "Enquiry Line",
    v: "0121 553 3363",
    href: "tel:01215533363",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    v: "Monday – Friday · 7:00 – 19:00",
  },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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

  return (
    <section
      id="contact"
      ref={ref}
      className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden"
      style={{ background: "var(--section-bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Get in touch with{" "}
            <span className="text-gradient-gold">our team</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-foreground/75 text-lg max-w-xl mx-auto">
            Whether you&apos;re a family, school, or local authority — we&apos;d
            love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Info cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-4"
          >
            <motion.h3 variants={fadeUp} className="text-foreground font-bold text-xl mb-2">
              Send us a message
            </motion.h3>
            <motion.p variants={fadeUp} className="text-foreground/70 text-sm leading-relaxed mb-4">
              Our team is available Monday to Friday. We aim to respond within
              one working day.
            </motion.p>

            {info.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="bg-card/45 border-border hover:bg-card/75 hover:border-foreground/15 transition-all duration-300 group">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground/50 text-xs font-medium uppercase tracking-widest mb-0.5">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground text-sm font-medium hover:text-gold transition-colors whitespace-pre-line"
                        >
                          {item.v}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm font-medium whitespace-pre-line">
                          {item.v}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="bg-card/45 border-border shadow-2xl shadow-black/5 dark:shadow-black/30">
              <CardContent className="p-7">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-5 shadow-xl shadow-yellow-500/30">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#0b2245"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="text-foreground font-extrabold text-xl mb-2">
                      Message Received
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                      Thanks for reaching out. A member of the team will be
                      in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-foreground/70 text-xs font-medium block mb-1.5">
                          Full Name
                        </label>
                        <Input
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Jane Smith"
                          className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl h-11"
                        />
                      </div>
                      <div>
                        <label className="text-foreground/70 text-xs font-medium block mb-1.5">
                          Phone
                        </label>
                        <Input
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="+44 7xxx xxxxxx"
                          className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-foreground/70 text-xs font-medium block mb-1.5">
                        Email
                      </label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jane@example.com"
                        className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl h-11"
                      />
                    </div>
                    <div>
                      <label className="text-foreground/70 text-xs font-medium block mb-1.5">
                        Message
                      </label>
                      <Textarea
                        required
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about your transport needs…"
                        rows={5}
                        className="bg-card/45 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 rounded-xl resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-gold hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl h-12 text-base transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-yellow-500/20 cursor-pointer"
                    >
                      {sending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#0b2245]/40 border-t-[#0b2245] rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-card/45 border-border overflow-hidden shadow-2xl rounded-3xl">
            <div className="relative w-full h-[350px] sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2136006421066!2d-1.9213455!3d52.4933946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc7e5c9a4449%3A0xe54e389d4fb842b1!2s386%20Park%20Rd%2C%20Hockley%2C%20Birmingham%20B18%205ST!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-95 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 glass px-4 py-2.5 rounded-xl border border-border pointer-events-none select-none">
                <p className="text-foreground font-bold text-xs uppercase tracking-wider">Birmingham Head Office</p>
                <p className="text-foreground/75 text-xs">386 Park Road, Hockley, B18 5ST</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
