import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Services | Repair, Remodeling & Maintenance | Montgomery Pool Services",
  description: "Complete pool care in Montgomery TX — weekly maintenance, leak repair, pool remodeling, equipment service, inspections, and outdoor living construction.",
};

const services = [
  {
    id: "maintenance",
    title: "Weekly Pool Maintenance",
    subtitle: "Set it and forget it — we handle everything.",
    description: "Our weekly maintenance program keeps your pool crystal clear, chemically balanced, and equipment running smoothly all year round. Every visit includes a full service with a photo report emailed directly to you.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Weekly skimming, brushing, and vacuuming",
      "Water chemistry testing and chemical balancing",
      "Filter cleaning and basket emptying",
      "Equipment inspection every visit",
      "Photo report emailed after each service",
      "Seasonal opening and closing included",
    ],
    price: "Starting at $175/month",
  },
  {
    id: "repair",
    title: "Pool & Spa Repair",
    subtitle: "Expert diagnostics. Lasting repairs.",
    description: "From hairline cracks to major structural issues, our repair team has seen and fixed it all. We diagnose the root cause — not just the symptom — so your repair lasts. All major repairs backed by our written warranty.",
    image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Leak detection and repair",
      "Bond beam crack repair",
      "Skimmer replacement",
      "Spa jet and plumbing repair",
      "Structural crack repair with rebar reinforcement",
      "Pool light replacement and GFCI compliance",
    ],
    price: "Free assessment — quotes within 24 hours",
  },
  {
    id: "remodeling",
    title: "Pool Remodeling",
    subtitle: "Transform your pool into a backyard resort.",
    description: "Whether your pool needs a fresh surface or a complete transformation, we design and execute renovations that dramatically increase your home's value and your family's enjoyment. From PebbleTec resurfacing to new tile, coping, decking, lighting, and water features.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Full pool resurfacing (plaster, PebbleTec, PebbleSheen)",
      "Waterline tile replacement",
      "Coping replacement (travertine, limestone, bull nose)",
      "LED color-changing lighting upgrades",
      "Deck resurfacing and expansion",
      "Water features — bubblers, deck jets, sheer descents",
      "Fire bowls and fire features",
      "Smart automation (control pool from your phone)",
    ],
    price: "Free design consultation",
  },
  {
    id: "equipment",
    title: "Equipment Installation & Repair",
    subtitle: "Keep your pool running efficiently.",
    description: "We service and install all major brands — Pentair, Hayward, Jandy, and more. Whether you need a pump motor replaced or want to upgrade to a variable-speed system that cuts your energy bill in half, we've got you covered.",
    image: "https://images.unsplash.com/photo-1564429238961-bf8f8643e7b5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Variable-speed pump installation",
      "Filter repair and replacement",
      "Heater and heat pump service",
      "Salt chlorine generator installation",
      "Automation controller upgrades",
      "Chemical feed systems",
    ],
    price: "Service call + parts",
  },
  {
    id: "inspections",
    title: "Pool Inspections",
    subtitle: "Know exactly what you're buying — or selling.",
    description: "Our comprehensive pool inspections cover every component of the pool system. Perfect for home buyers, sellers, and insurance requirements. You receive a detailed written report with photos within 24 hours.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    features: [
      "Complete structural assessment",
      "Equipment condition and age evaluation",
      "Safety compliance check (drain covers, barriers, GFCI)",
      "Water chemistry analysis",
      "Leak indicators assessment",
      "Written report with photos within 24 hours",
    ],
    price: "Starting at $250",
  },
  {
    id: "outdoor",
    title: "Outdoor Living & Kitchens",
    subtitle: "Extend your living space — year round.",
    description: "We design and build complete outdoor living spaces that complement your pool. From full outdoor kitchens to fire pits, pergolas, and custom hardscaping — we create spaces where memories are made.",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom outdoor kitchen design and build",
      "Fire pits and fire feature installation",
      "Pergola and shade structure construction",
      "Paver patios and walkways",
      "Retaining walls and raised planters",
      "Outdoor lighting design",
    ],
    price: "Free design consultation",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-pool-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="gold-accent mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Everything your pool needs, from one trusted team. Over 20 years
              of experience serving Montgomery County homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-pool-warm"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="text-pool-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  {service.subtitle}
                </p>
                <h2 className="text-3xl font-bold text-pool-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-pool-slate/70 leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-pool-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-pool-slate/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <Link
                    href="/contact"
                    className="bg-pool-gold hover:bg-pool-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get a Quote
                  </Link>
                  <span className="text-pool-slate/50 text-sm font-medium">{service.price}</span>
                </div>
              </div>

              <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-pool-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Not Sure What You Need?
          </h2>
          <p className="mt-3 text-white/70">
            Call us and we&apos;ll help you figure it out. Free assessments, honest advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9364638855"
              className="bg-pool-gold hover:bg-pool-gold/90 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-colors"
            >
              (936) 463-8855
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
