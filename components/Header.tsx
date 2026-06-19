"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on page change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // If we're not on the home page, the menu should look floating/scrolled from the start for visual clarity
    if (pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2 mt-2">
      <nav
        className={cn(
          "mx-auto max-w-6xl px-6 py-3 transition-all duration-300 rounded-2xl border border-transparent",
          isScrolled
            ? "bg-background/80 border-border backdrop-blur-lg shadow-lg max-w-4xl lg:px-6"
            : "bg-transparent lg:px-12"
        )}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f7d36f] text-[#0b2245] font-black text-xs shadow">
              GD
            </span>
            <span className="font-extrabold text-sm tracking-tight text-foreground">
              Green <span className="text-[#f7d36f]">Destinations</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="flex gap-6 text-sm">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-medium hover:text-[#f7d36f] transition-colors duration-150 relative py-1",
                        isActive
                          ? "text-[#f7d36f]"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f7d36f] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Section: Theme Toggle, CTA, and Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <ThemeToggle variant="icon" defaultTheme="dark" duration={600} />
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn(
                "hidden sm:inline-flex border-border/50 hover:bg-[#f7d36f] hover:text-[#0b2245] hover:border-[#f7d36f] transition-all duration-200",
                isScrolled && "lg:hidden"
              )}
            >
              <Link href="/contact">
                <span>Get in Touch</span>
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold shadow hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">
                <span className="hidden sm:inline">Book a Journey</span>
                <span className="sm:hidden">Book</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 -m-2 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-2 right-2 top-full mt-2 p-4 rounded-2xl border border-border bg-background/95 backdrop-blur-lg shadow-xl lg:hidden flex flex-col gap-3"
          >
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#f7d36f]/10 text-[#f7d36f]"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="h-px bg-border my-1" />
            <Button asChild className="w-full bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold py-2.5 rounded-xl">
              <Link href="/contact">Book a Journey</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
