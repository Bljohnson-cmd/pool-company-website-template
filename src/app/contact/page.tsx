import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Quote | Montgomery Pool Services | Montgomery TX",
  description: "Get a free pool service quote from Montgomery Pool Services. Call (936) 463-8855 or fill out our form. Serving Montgomery, Conroe, Magnolia & The Woodlands TX.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-pool-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="gold-accent mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Get Your Free Estimate
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Tell us about your pool and we&apos;ll get back to you within 24
              hours with an honest assessment and transparent quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-pool-navy mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-pool-navy mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-pool-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-pool-navy mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                      placeholder="(936) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-pool-navy mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                    placeholder="123 Main St, Montgomery, TX 77356"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-pool-navy mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="maintenance">Weekly Pool Maintenance</option>
                    <option value="repair">Pool or Spa Repair</option>
                    <option value="remodeling">Pool Remodeling / Renovation</option>
                    <option value="equipment">Equipment Repair or Installation</option>
                    <option value="inspection">Pool Inspection</option>
                    <option value="outdoor">Outdoor Kitchen / Living Space</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-pool-navy mb-2">
                    Tell Us About Your Pool
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20 outline-none transition-all text-pool-slate resize-none"
                    placeholder="Describe what's going on with your pool — any issues, what you're looking for, or any questions you have. The more detail, the better!"
                  />
                </div>

                {/* Photo upload placeholder */}
                <div>
                  <label className="block text-sm font-semibold text-pool-navy mb-2">
                    Upload Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-pool-blue/40 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                    </svg>
                    <p className="text-pool-slate/50 text-sm">
                      Drag photos here or click to upload
                    </p>
                    <p className="text-pool-slate/30 text-xs mt-1">
                      JPG, PNG up to 10MB each
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pool-gold hover:bg-pool-gold/90 text-white py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-pool-gold/25"
                >
                  Send My Request
                </button>

                <p className="text-pool-slate/40 text-xs text-center">
                  We respond to all inquiries within 24 hours. Your information is never shared.
                </p>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Direct Contact */}
              <div className="bg-pool-navy rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Prefer to Talk?
                </h3>

                <div className="space-y-6">
                  <a href="tel:9364638855" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-pool-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Call Us</p>
                      <p className="text-pool-gold font-bold text-xl group-hover:text-pool-gold-light transition-colors">
                        (936) 463-8855
                      </p>
                    </div>
                  </a>

                  <a href="mailto:info@montgomerypoolservices.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-pool-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-white/80 group-hover:text-white transition-colors">
                        info@montgomerypoolservices.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pool-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pool-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                      <p className="text-white/80">Mon – Fri: 8am – 6pm</p>
                      <p className="text-white/80">Sat: 9am – 2pm</p>
                      <p className="text-white/50 text-sm mt-1">Emergency service available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-pool-warm rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-pool-navy mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "How quickly can you come out?",
                      a: "For estimates and assessments, we can usually schedule within 2-3 business days. Emergency repairs are prioritized same-day when possible.",
                    },
                    {
                      q: "Do you offer free estimates?",
                      a: "Yes! All consultations and estimates are completely free with no obligation.",
                    },
                    {
                      q: "What areas do you serve?",
                      a: "Montgomery, Conroe, Magnolia, The Woodlands, Willis, Spring, Bentwater, and the Lake Conroe area.",
                    },
                  ].map((item) => (
                    <div key={item.q}>
                      <p className="font-semibold text-pool-navy text-sm">{item.q}</p>
                      <p className="text-pool-slate/60 text-sm mt-1">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-pool-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-pool-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-pool-navy text-sm">Your Privacy Matters</p>
                  <p className="text-pool-slate/50 text-xs mt-0.5">
                    We never share your information. No spam, no selling your data — just honest pool service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
