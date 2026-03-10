import Link from "next/link";

const areas = [
  { name: "Montgomery", distance: "Home base" },
  { name: "Conroe", distance: "15 min" },
  { name: "Magnolia", distance: "20 min" },
  { name: "The Woodlands", distance: "25 min" },
  { name: "Willis", distance: "15 min" },
  { name: "Spring", distance: "30 min" },
  { name: "Bentwater", distance: "10 min" },
  { name: "Lake Conroe", distance: "10 min" },
];

export function ServiceAreaMap() {
  return (
    <section className="py-24 bg-pool-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-pool-navy">
              Proudly Serving
              <br />
              Montgomery County
            </h2>
            <p className="mt-4 text-lg text-pool-slate/70 leading-relaxed">
              Based right here in Montgomery, we serve homeowners and
              businesses throughout Montgomery County and western Harris County.
              Local roots, local knowledge, local commitment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pool-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="font-medium text-pool-navy text-sm">{area.name}</span>
                  </div>
                  <span className="text-xs text-pool-slate/50">{area.distance}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-pool-blue font-semibold hover:text-pool-navy transition-colors"
              >
                Not listed? Contact us — we may still serve your area
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-square bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110614.01934442!2d-95.75!3d30.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647260e98c4db87%3A0x26cf6ab7c11e28c0!2sMontgomery%2C%20TX%2077356!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Montgomery Pool Services Service Area"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
