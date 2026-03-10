"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pool-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-pool-gold flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight block leading-tight">
                Montgomery
              </span>
              <span className="text-pool-gold text-xs font-semibold tracking-widest uppercase">
                Pool Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9364638855"
              className="text-sm font-semibold text-pool-gold hover:text-pool-gold-light transition-colors"
            >
              (936) 463-8855
            </a>
            <Link
              href="/contact"
              className="bg-pool-gold hover:bg-pool-gold/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-pool-gold/25"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-pool-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:9364638855"
                className="text-center text-pool-gold font-semibold text-lg"
              >
                (936) 463-8855
              </a>
              <Link
                href="/contact"
                className="bg-pool-gold text-white text-center py-3 rounded-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
