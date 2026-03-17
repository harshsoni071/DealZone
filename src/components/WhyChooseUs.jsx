const features = [
  {
    icon: "🎯",
    title: "Curated Picks",
    desc: "Every product is hand-selected by our experts. No clutter — only the very best.",
    color: "from-brand-50 to-brand-100/50",
    border: "border-brand-200/60",
    iconBg: "bg-brand-100",
  },
  {
    icon: "✅",
    title: "Verified Products",
    desc: "All listings are genuine, in-stock, and verified before appearing on DealZone.",
    color: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "⚡",
    title: "Best Prices",
    desc: "We monitor prices 24/7 to guarantee you always see the lowest available deal.",
    color: "from-accent-50 to-accent-100/50",
    border: "border-accent-200/60",
    iconBg: "bg-accent-100",
  },
  {
    icon: "🔒",
    title: "Safe Checkout",
    desc: "All purchases happen directly on Amazon — the world's most trusted marketplace.",
    color: "from-violet-50 to-violet-100/50",
    border: "border-violet-200/60",
    iconBg: "bg-violet-100",
  },
  {
    icon: "⭐",
    title: "Trusted Reviews",
    desc: "Real ratings from thousands of verified Amazon buyers power our recommendations.",
    color: "from-amber-50 to-amber-100/50",
    border: "border-amber-200/60",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🚀",
    title: "Prime Delivery",
    desc: "Most featured products are Prime-eligible with fast 1–2 day delivery across India.",
    color: "from-sky-50 to-sky-100/50",
    border: "border-sky-200/60",
    iconBg: "bg-sky-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-500 text-xs font-bold uppercase tracking-widest bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-4">
            Our Promise
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-gradient-brand italic">DealZone?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We're not just another affiliate site. We're your personal shopping advisor — 
            saving you time and money, every day.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 via-brand-500 to-blue-400 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <h3 className="font-display text-3xl lg:text-4xl font-black mb-3 relative">Ready to save big?</h3>
          <p className="text-blue-100 mb-8 relative">Join thousands of smart shoppers who trust DealZone daily.</p>
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl hover:bg-blue-50 hover:shadow-xl transition-all"
          >
            Browse All Deals
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
