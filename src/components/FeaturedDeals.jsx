import { products } from "../products";
import ProductCard from "./ProductCard";

const featured = products.filter((p) =>
  ["Best Seller", "Top Rated", "Hot Deal"].includes(p.badge)
).slice(0, 4);

export default function FeaturedDeals() {
  return (
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-accent-500 text-xs font-bold uppercase tracking-widest bg-accent-50 border border-accent-200 px-3 py-1 rounded-full mb-3">
              Editor's Picks
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900">
              Featured <span className="text-gradient-accent italic">Deals</span>
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all group whitespace-nowrap"
          >
            See all products
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "40+", label: "Curated Products", icon: "🎯" },
            { num: "4.6★", label: "Average Rating", icon: "⭐" },
            { num: "100%", label: "Amazon Verified", icon: "✅" },
            { num: "₹0", label: "Extra Charges", icon: "🎁" },
          ].map((s) => (
            <div key={s.label} className="bg-surface-50 border border-surface-200 rounded-2xl p-5 text-center hover:shadow-card transition-shadow">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-display text-2xl font-black text-gray-900">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
