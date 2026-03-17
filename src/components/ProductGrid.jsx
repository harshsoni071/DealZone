import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { categories } from "../products";

export default function ProductGrid({ products, searchQuery }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(12);

  const toNum = (price) => parseInt(price.replace(/[₹,]/g, ""));

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCat;
    });

    switch (sortBy) {
      case "price-asc":   return [...list].sort((a, b) => toNum(a.price) - toNum(b.price));
      case "price-desc":  return [...list].sort((a, b) => toNum(b.price) - toNum(a.price));
      case "rating":      return [...list].sort((a, b) => b.rating - a.rating);
      case "discount":    return [...list].sort((a, b) => {
        const disc = (p) => p.originalPrice ? ((toNum(p.originalPrice) - toNum(p.price)) / toNum(p.originalPrice)) : 0;
        return disc(b) - disc(a);
      });
      default: return list;
    }
  }, [products, searchQuery, activeCategory, sortBy]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="products" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-500 text-xs font-bold uppercase tracking-widest bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
            Full Collection
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            All <span className="text-gradient-brand italic">Products</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Browse our full catalog — click any card to buy directly on Amazon.
          </p>
        </div>

        {/* Filter + Sort bar */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-8 flex flex-col gap-4 shadow-card">
          {/* Category pills — horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(12); }}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "gradient-brand text-white shadow-cta/25 shadow-md"
                    : "bg-surface-100 text-gray-600 hover:bg-surface-200 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + count row */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{filtered.length}</span> products found
              {searchQuery && <span className="text-brand-600"> for "{searchQuery}"</span>}
            </p>

            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500 font-medium whitespace-nowrap">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-surface-100 border border-surface-200 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400/30 cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Best Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="font-display text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or category filter.</p>
            <button
              onClick={() => { setActiveCategory("All"); }}
              className="px-6 py-3 gradient-brand text-white font-semibold rounded-xl"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {visible.map((product, i) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${(i % 12) * 60}ms`, animationFillMode: "both" }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < filtered.length && (
              <div className="text-center mt-14">
                <p className="text-sm text-gray-400 mb-4">
                  Showing {visible.length} of {filtered.length} products
                </p>
                <button
                  onClick={() => setVisibleCount((v) => v + 8)}
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white border-2 border-brand-200 text-brand-600 font-bold rounded-2xl hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-cta transition-all duration-300"
                >
                  Load More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
