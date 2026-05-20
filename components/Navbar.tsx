"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.reduce((acc, el) => {
        if (el && el.getBoundingClientRect().top <= 120) return el.id;
        return acc;
      }, "home");
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center shadow-lg shadow-yellow-500/25">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                fill="#0b2245"
                stroke="#0b2245"
                strokeWidth="1"
              />
              <path
                d="M5 13h4v9H5zM15 13h4v9h-4z"
                fill="#0b2245"
              />
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-extrabold text-white text-sm tracking-tight">
              Green
            </span>
            <span className="font-extrabold text-gold-light text-sm tracking-tight ml-1">
              Destinations
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                active === link.id
                  ? "text-[#f7d36f]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold text-sm px-5 rounded-xl transition-all duration-200 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 hover:scale-105"
          >
            Book a Journey
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollTo(link.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === link.id
                      ? "bg-white/10 text-[#f7d36f]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollTo("contact");
                  setOpen(false);
                }}
                className="mt-3 w-full bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold rounded-xl"
              >
                Book a Journey
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
