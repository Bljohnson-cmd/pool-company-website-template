import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatsBar } from "@/components/StatsBar";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image placeholder — replace with real photo */}
        <div className="absolute inset-0 bg-pool-navy">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="water-shimmer absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-pool-gold" />
              <span className="text-white/90 text-sm font-medium">
                Family &amp; Veteran-Owned Since 2004
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Montgomery County&apos;s
              <br />
              <span className="text-pool-gold">Most Trusted</span> Pool
              <br />
              Service Professionals
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
              From weekly maintenance to complete remodels — we keep your pool
              pristine and your family safe. Over 20 years of hands-on
              experience serving Montgomery, Conroe, Magnolia &amp; The Woodlands.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="bg-pool-gold hover:bg-pool-gold/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-xl hover:shadow-pool-gold/25 inline-flex items-center gap-2"
              >
                Get Your Free Estimate
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:9364638855"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (936) 463-8855
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-sm font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <span className="text-sm font-medium">29+ Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
      <StatsBar />

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-24 bg-white pool-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-accent mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-pool-navy">
              Complete Pool Care, One Company
            </h2>
            <p className="mt-4 text-lg text-pool-slate/70">
              From routine maintenance to full-scale renovations — we handle
              every aspect of your pool so you can enjoy it worry-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="maintenance"
              title="Weekly Maintenance"
              description="Consistent, reliable pool cleaning with water chemistry management. Every visit includes a detailed photo report emailed directly to you."
              features={["Chemical balancing", "Skimming & vacuuming", "Filter cleaning", "Photo reports every visit"]}
            />
            <ServiceCard
              icon="repair"
              title="Pool & Spa Repair"
              description="Expert diagnostics and repair for leaks, cracks, plumbing issues, and structural damage. We fix it right the first time."
              features={["Leak detection & repair", "Structural crack repair", "Plumbing & pipe repair", "Skimmer replacement"]}
              featured
            />
            <ServiceCard
              icon="remodel"
              title="Pool Remodeling"
              description="Transform your outdated pool into a stunning backyard resort. Resurfacing, new tile, coping, decking, lighting, and more."
              features={["Resurfacing & replastering", "Tile & coping upgrade", "LED lighting", "Deck renovation"]}
            />
            <ServiceCard
              icon="equipment"
              title="Equipment Service"
              description="Installation, repair, and upgrade of all pool equipment — pumps, filters, heaters, salt systems, and automation controllers."
              features={["Pump & motor repair", "Filter replacement", "Heater installation", "Salt system conversion"]}
            />
            <ServiceCard
              icon="inspection"
              title="Pool Inspections"
              description="Comprehensive pool inspections for home buyers, sellers, and insurance requirements. Detailed written report within 24 hours."
              features={["Pre-purchase inspections", "Equipment assessment", "Safety compliance check", "Written report"]}
            />
            <ServiceCard
              icon="outdoor"
              title="Outdoor Living"
              description="Complete backyard transformations including outdoor kitchens, fire features, pergolas, and custom hardscaping around your pool."
              features={["Outdoor kitchens", "Fire pits & bowls", "Pergolas & shade", "Custom hardscaping"]}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-pool-blue font-semibold hover:text-pool-navy transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY CHOOSE US ═══════════════════════ */}
      <section className="py-24 bg-pool-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-accent mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Why Montgomery County
                <br />
                Trusts Us With Their Pools
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                When Bob founded Montgomery Pool Services over 20 years ago, he
                brought the same discipline and integrity from his military
                service to every pool he touched. Today, Theresa and the team
                carry that legacy forward — treating every customer like family.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Photo Reports Every Visit",
                    desc: "You get a photo of your pool and a water quality report emailed after every service visit. Total transparency.",
                  },
                  {
                    title: "20+ Years of Experience",
                    desc: "We've seen it all — from simple cleanings to complex structural repairs. Your pool is in expert hands.",
                  },
                  {
                    title: "Honest, Upfront Pricing",
                    desc: "No hidden fees, no surprise charges. We tell you exactly what it costs before we start any work.",
                  },
                  {
                    title: "Veteran-Owned Values",
                    desc: "Integrity, accountability, and showing up when we say we will. That's the standard, not the exception.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pool-gold/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-pool-blue/20">
                  <img
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
                    alt="Crystal clear pool water"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-pool-blue/20">
                  <img
                    src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=600&q=80"
                    alt="Pool maintenance professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square bg-pool-blue/20">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                    alt="Beautiful backyard pool"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-pool-blue/20">
                  <img
                    src="https://images.unsplash.com/photo-1564429238961-bf8f8643e7b5?auto=format&fit=crop&w=600&q=80"
                    alt="Pool remodeling result"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESS ═══════════════════════ */}
      <ProcessSteps />

      {/* ═══════════════════════ GALLERY PREVIEW ═══════════════════════ */}
      <section className="py-24 bg-pool-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-accent mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-pool-navy">
              Our Recent Work
            </h2>
            <p className="mt-4 text-lg text-pool-slate/70">
              From routine maintenance to complete transformations — see what
              we can do for your pool.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=600&q=80", alt: "Resort-style pool renovation" },
              { src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80", alt: "Crystal clear pool after service" },
              { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80", alt: "Luxury pool and outdoor living" },
              { src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=600&q=80", alt: "Spa and pool renovation" },
              { src: "https://images.unsplash.com/photo-1564429238961-bf8f8643e7b5?auto=format&fit=crop&w=600&q=80", alt: "Modern pool design" },
              { src: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=600&q=80", alt: "Pool equipment upgrade" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pool-navy/0 group-hover:bg-pool-navy/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-pool-navy hover:bg-pool-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-accent mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-pool-navy">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-pool-slate/70">
              Don&apos;t just take our word for it — hear from the homeowners
              who trust us with their pools week after week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="We've used Montgomery Pool Services for almost 2 years with no complaints. They come every week and the tech emails a picture of the pool with a water quality report each time. Highly recommend!"
              name="Verified Customer"
              location="Montgomery, TX"
              source="Nextdoor"
            />
            <TestimonialCard
              quote="Theresa and her team are absolutely wonderful. They go the extra mile to make sure our pool is clean and the chemicals are perfectly balanced. It's like having family take care of your pool."
              name="Verified Customer"
              location="Bentwater"
              source="Nextdoor"
            />
            <TestimonialCard
              quote="Professional, reliable, and honest. After trying three other pool companies, we finally found one that actually shows up every week and does what they say. Bob built this company the right way."
              name="Verified Customer"
              location="Conroe, TX"
              source="Facebook"
            />
          </div>

          {/* Rating summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-pool-light rounded-full px-8 py-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-pool-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-pool-navy font-bold text-lg">5.0</span>
              <span className="text-pool-slate/60">|</span>
              <span className="text-pool-slate/70 font-medium">29+ Recommendations on Nextdoor</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICE AREAS ═══════════════════════ */}
      <ServiceAreaMap />

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-pool-navy">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your Pool Deserves Better.
            <br />
            <span className="text-pool-gold">Let&apos;s Make It Happen.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Whether you need weekly service, emergency repair, or a complete
            transformation — we&apos;re ready. Free estimates, no pressure, just
            honest pool people who love what they do.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-pool-gold hover:bg-pool-gold/90 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-xl hover:shadow-pool-gold/25 inline-flex items-center gap-2"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:9364638855"
              className="text-white font-semibold text-lg hover:text-pool-gold transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (936) 463-8855
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
