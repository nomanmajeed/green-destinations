import { Mail, Phone, MapPin } from "lucide-react";

const links = {
  Company: ["About Us", "Services", "Careers", "Contact Us"],
  "For Families": ["Book a Journey", "SEND Transport", "Passenger Support", "Safeguarding"],
  "For Operators": ["LA Partnerships", "Route Coordination", "Compliance", "Reporting"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-slate-100 dark:bg-[#050f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="#0b2245" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-extrabold text-foreground text-sm">Green</span>
                <span className="font-extrabold text-gold text-sm ml-1">Destinations</span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-5">
              Specialist SEND home‑to‑school transport across the West Midlands.
            </p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                386 Park Road, Hockley, Birmingham, B18 5ST
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href="mailto:admin@greendestinationsltd.com" className="hover:text-foreground transition-colors">
                  admin@greendestinationsltd.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href="tel:+441210000000" className="hover:text-foreground transition-colors">
                  +44 (0)121 000 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-foreground font-bold text-sm mb-4 tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-foreground/60 text-sm hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <span>© 2026 Green Destinations Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Safeguarding Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
