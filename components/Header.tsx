"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Detect scroll without a scroll listener (IntersectionObserver on a sentinel).
  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-1 w-px" aria-hidden />
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
        <nav
          className={cn(
            "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-2xl px-4 sm:px-6 transition-all duration-300",
            scrolled
              ? "glass border border-border shadow-[0_8px_30px_-12px_rgba(11,34,69,0.25)]"
              : "border border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b2245] text-[var(--gold-cta-bg)] font-black text-[11px] tracking-tight">
              GD
            </span>
            <span className="font-bold text-[15px] tracking-tight text-foreground">
              Green Destinations
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[var(--gold)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle variant="icon" defaultTheme="light" duration={600} />

            <Button
              asChild
              size="sm"
              className="btn-gold hidden sm:inline-flex h-9 rounded-xl px-4 shadow-none"
            >
              <Link href="/contact">Book a Journey</Link>
            </Button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden -m-1.5 p-1.5 rounded-xl text-foreground hover:bg-muted transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mx-auto mt-2 max-w-7xl rounded-2xl border border-border glass p-3 shadow-xl"
            >
              <ul className="flex flex-col">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="my-2 h-px bg-border" />
              <Button asChild className="btn-gold w-full h-11 rounded-xl shadow-none">
                <Link href="/contact">Book a Journey</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
