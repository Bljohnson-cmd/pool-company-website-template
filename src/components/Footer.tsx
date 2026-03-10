import Link from "next/link";

const services = [
  { name: "Pool Maintenance", href: "/services#maintenance" },
  { name: "Pool Repair", href: "/services#repair" },
  { name: "Pool Remodeling", href: "/services#remodeling" },
  { name: "Equipment Service", href: "/services#equipment" },
  { name: "Pool Inspections", href: "/services#inspections" },
];

const areas = [
  "Montgomery",
  "Conroe",
  "Magnolia",
  "The Woodlands",
  "Willis",
  "Spring",
  "Bentwater",
  "Lake Conroe",
];

export function Footer() {
  return (
    <footer className="bg-pool-navy text-white">
      {/* CTA Banner */}
      <div className="bg-pool-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Transform Your Pool?
            </h3>
            <p className="text-white/90 mt-1">
              Call today for a free consultation — no obligation, no pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:9364638855"
              className="bg-white text-pool-gold px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors"
            >
              (936) 463-8855
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-pool-gold flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg block leading-tight">Montgomery</span>
                <span className="text-pool-gold text-xs font-semibold tracking-widest uppercase">Pool Services</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Family &amp; veteran-owned pool service company proudly serving Montgomery County since 2004. We treat every pool like it&apos;s our own.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg className="w-4 h-4 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50 mt-1">
              <svg className="w-4 h-4 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Veteran-Owned Business
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-white/60 hover:text-pool-gold text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-white/60 text-sm">
                  {area}, TX
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:9364638855" className="text-pool-gold font-semibold hover:text-pool-gold-light transition-colors">
                  (936) 463-8855
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@montgomerypoolservices.com" className="text-white/60 hover:text-pool-gold text-sm transition-colors">
                  info@montgomerypoolservices.com
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hours</p>
                <p className="text-white/60 text-sm">Mon – Fri: 8am – 6pm</p>
                <p className="text-white/60 text-sm">Sat: 9am – 2pm</p>
                <p className="text-white/60 text-sm">Emergency service available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Montgomery Pool Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
