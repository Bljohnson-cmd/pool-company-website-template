const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "1,500+", label: "Pools Serviced" },
  { value: "5.0", label: "Star Rating" },
  { value: "29+", label: "Neighbor Recommendations" },
];

export function StatsBar() {
  return (
    <section className="bg-pool-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-pool-gold">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
