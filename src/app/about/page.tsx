import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Family & Veteran-Owned | Montgomery Pool Services",
  description: "Family and veteran-owned pool service company serving Montgomery TX since 2004. Founded by Bob, a veteran with 20+ years in the pool industry. Meet our team.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-pool-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="gold-accent mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About Our Family
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Built on veteran values. Driven by family pride.
              Trusted by Montgomery County since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pool-navy mb-6">
                From Military Service to Pool Service
              </h2>
              <div className="space-y-4 text-pool-slate/70 leading-relaxed">
                <p>
                  When Bob founded Montgomery Pool Services over 20 years ago, he
                  brought something most pool companies lack: military discipline,
                  attention to detail, and an unwavering commitment to doing
                  things the right way — even when no one is watching.
                </p>
                <p>
                  As a veteran, Bob understood that trust is earned through
                  consistent action, not empty promises. That principle became
                  the foundation of our company. Every pool we service, every
                  repair we make, and every customer we serve reflects that
                  standard.
                </p>
                <p>
                  Today, Theresa leads the day-to-day operations with the same
                  warmth and dedication that has made us Montgomery County&apos;s
                  most recommended pool service. Our team treats every customer
                  like family — because to us, they are.
                </p>
              </div>

              {/* Values */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: "shield", label: "Veteran-Owned", desc: "Military values in every job" },
                  { icon: "heart", label: "Family-Operated", desc: "Personal touch, every time" },
                  { icon: "star", label: "Faith-Driven", desc: "Christian values at our core" },
                  { icon: "check", label: "20+ Years", desc: "Unmatched local experience" },
                ].map((value) => (
                  <div key={value.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pool-light flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-pool-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-pool-navy text-sm">{value.label}</p>
                      <p className="text-pool-slate/50 text-xs">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-pool-light">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful pool we service in Montgomery TX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-pool-navy rounded-2xl p-8">
                <blockquote className="text-white/80 italic leading-relaxed">
                  &ldquo;We don&apos;t just clean pools. We take care of people.
                  Every homeowner deserves a pool company that shows up, does
                  excellent work, and treats them with respect. That&apos;s all
                  we know how to do.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pool-gold flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MPS</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Montgomery Pool Services</p>
                    <p className="text-white/50 text-xs">Proudly serving since 2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-pool-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-pool-navy">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Photo Reports Every Visit",
                description: "After every service visit, your technician emails you a photo of your pool along with a complete water quality report. You always know exactly what we did and how your pool looks.",
                icon: "📸",
              },
              {
                title: "Consistent Weekly Service",
                description: "Same technician, same day, every week. No random strangers at your property. Your tech knows your pool, your preferences, and your equipment inside and out.",
                icon: "📅",
              },
              {
                title: "Honest Recommendations",
                description: "We'll never sell you something you don't need. If a repair can wait, we'll tell you. If your equipment has life left, we won't push a replacement. Our reputation matters more than any single sale.",
                icon: "🤝",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 card-lift">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-pool-navy mb-3">{item.title}</h3>
                <p className="text-pool-slate/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 text-pool-slate/40">
            {["Licensed & Insured", "Veteran-Owned", "BBB Listed", "Nextdoor Recommended", "20+ Years Experience"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-pool-navy text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pool-gold py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-3 text-white/90">
            Join the hundreds of Montgomery County families who trust us with their pools.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
