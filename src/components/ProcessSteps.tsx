const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Call us or fill out our form. We'll discuss your needs, schedule a visit, and assess your pool — all at no charge.",
  },
  {
    number: "02",
    title: "Detailed Assessment",
    description:
      "We inspect everything — equipment, surface, structure, water chemistry. You get a clear, written assessment with photos.",
  },
  {
    number: "03",
    title: "Transparent Quote",
    description:
      "No surprises. We provide an itemized quote with options so you can choose the right solution for your budget.",
  },
  {
    number: "04",
    title: "Expert Execution",
    description:
      "Our experienced team gets to work. We keep you updated throughout and don't leave until the job meets our standard.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-pool-navy">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-pool-slate/70">
            Getting started is simple. Here&apos;s what to expect when you
            call Montgomery Pool Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-pool-gold/40 to-transparent z-0" />
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-pool-navy flex items-center justify-center mb-5">
                  <span className="text-pool-gold font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-pool-navy mb-2">{step.title}</h3>
                <p className="text-pool-slate/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
