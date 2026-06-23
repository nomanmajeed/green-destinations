import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  "For families": [
    { name: "Book a Journey", href: "/contact" },
    { name: "SEND transport", href: "/services" },
    { name: "Passenger support", href: "/services" },
    { name: "Safeguarding", href: "/about" },
  ],
  "For operators": [
    { name: "LA partnerships", href: "/services" },
    { name: "Route coordination", href: "/services" },
    { name: "Compliance", href: "/services" },
    { name: "Reporting", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--section-bg)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Closing CTA */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to plan a safer school route?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Talk to our team about routes, training, or partnerships.
            </p>
          </div>
          <Button asChild className="btn-gold h-12 shrink-0 rounded-xl px-6 text-base shadow-none">
            <Link href="/contact">Book a Journey</Link>
          </Button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b2245] text-[var(--gold-cta-bg)] text-[11px] font-black tracking-tight">
                GD
              </span>
              <span className="text-[15px] font-bold tracking-tight text-foreground">Green Destinations</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Specialist SEND home-to-school transport across the West Midlands.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                386 Park Road, Hockley, Birmingham, B18 5ST
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="mailto:admin@greendestinationsltd.com" className="transition-colors hover:text-foreground">
                  admin@greendestinationsltd.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="tel:01215533363" className="transition-colors hover:text-foreground">
                  0121 553 3363
                </a>
              </li>
            </ul>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold tracking-tight text-foreground">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Green Destinations Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">Terms of Service</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">Safeguarding Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
