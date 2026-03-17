import { useState, useEffect } from "react";

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-glass border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <button
            onClick={() => nav("home")}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="w-9 h-9 gradient-brand rounded-xl flex items-center justify-center shadow-cta/30 shadow-lg group-hover:scale-105 transition-transform">
              <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              Deal<span className="text-gradient-accent">Zone</span>
            </span>
          </button>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-100 border border-surface-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400 transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", id: "home" },
              { label: "Best Deals", id: "featured" },
              { label: "Categories", id: "products" },
              { label: "Contact", id: "footer" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => nav(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => nav("products")}
              className="ml-3 px-5 py-2.5 gradient-brand text-white text-sm font-semibold rounded-xl shadow-cta hover:shadow-xl hover:scale-105 transition-all"
            >
              Shop Now
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-100 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 bg-white/95 backdrop-blur">
            {[
              { label: "Home", id: "home" },
              { label: "Best Deals", id: "featured" },
              { label: "Categories", id: "products" },
              { label: "Contact", id: "footer" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => nav(item.id)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => nav("products")}
                className="w-full px-4 py-3 gradient-brand text-white text-sm font-semibold rounded-xl"
              >
                Shop Now →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
