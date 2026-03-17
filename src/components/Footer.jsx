const nav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Featured Deals", id: "featured" },
  { label: "All Products", id: "products" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Newsletter", id: "newsletter" },
];

const categories = [
  "Electronics", "Wearables", "Cameras", "Laptops",
  "Gaming", "Audio", "Smart Home", "Kitchen",
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => nav("home")} className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 gradient-brand rounded-xl flex items-center justify-center">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Deal<span className="text-accent-400">Zone</span>
              </span>
            </button>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              India's most trusted Amazon deals curator. We handpick the best prices on top-rated products so you save more with every purchase.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "Twitter", icon: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /> },
                { label: "Instagram", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                { label: "YouTube", icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-brand-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill={s.label === "Twitter" ? "currentColor" : "none"} stroke={s.label === "Twitter" ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth={s.label === "YouTube" ? 0 : 1.5}>
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => nav(l.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => nav("products")}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Affiliate disclaimer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-5 py-4 mb-6">
            <p className="text-gray-500 text-xs leading-relaxed text-center">
              <span className="text-accent-400 font-semibold">⚠️ Affiliate Disclosure:</span>{" "}
              DealZone is a participant in the Amazon Associates Program, an affiliate advertising program
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in.
              As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} DealZone. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
