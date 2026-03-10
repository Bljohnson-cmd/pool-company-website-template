import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Pool Renovation Gallery | Montgomery Pool Services",
  description: "Browse our portfolio of pool renovations, remodeling projects, and maintenance work in Montgomery, Conroe, and The Woodlands TX.",
};

const projects = [
  {
    title: "Complete Pool Renovation",
    location: "Lake Estates, Montgomery",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PebbleTec Resurfacing",
    location: "Bentwater, Montgomery",
    category: "Resurfacing",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Backyard Transformation",
    location: "The Woodlands",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Spa & Water Feature Addition",
    location: "Conroe",
    category: "Water Features",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Pool Redesign",
    location: "Magnolia",
    category: "Remodeling",
    image: "https://images.unsplash.com/photo-1564429238961-bf8f8643e7b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Equipment Upgrade & Automation",
    location: "Montgomery",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tile & Coping Replacement",
    location: "Lake Conroe",
    category: "Resurfacing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Deck Expansion & Fire Feature",
    location: "Spring",
    category: "Outdoor Living",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Weekly Maintenance Client",
    location: "Willis",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Remodeling", "Resurfacing", "Water Features", "Equipment", "Outdoor Living", "Maintenance"];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-pool-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="gold-accent mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-white/70">
              See what 20+ years of pool expertise looks like. From routine
              maintenance to jaw-dropping transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter (static for prototype) */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-pool-navy text-white"
                    : "bg-gray-100 text-pool-slate/60 hover:bg-pool-light hover:text-pool-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-pool-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 card-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-pool-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-pool-navy mt-1">
                    {project.title}
                  </h3>
                  <p className="text-pool-slate/50 text-sm flex items-center gap-1 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-xl px-8 py-5 border border-gray-100 shadow-sm">
              <svg className="w-6 h-6 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <p className="text-pool-slate/70">
                <span className="font-semibold text-pool-navy">Want to see your pool here?</span>
                {" "}Every project starts with a free consultation.
              </p>
              <Link
                href="/contact"
                className="bg-pool-gold text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-pool-gold/90 transition-colors ml-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
