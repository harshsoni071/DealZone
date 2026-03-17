export default function Hero({ onShopNow }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-16">

      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="text-center lg:text-left">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-accent-200 rounded-full shadow-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-accent-600 text-sm font-semibold">🔥 Up to 70% off — Today only</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[68px] leading-[1.04] font-black text-gray-900 mb-6 text-balance animate-fade-up">
              Discover the{" "}
              <span className="text-gradient-brand italic">Best Deals</span>
              <br />on Amazon
            </h1>

            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              Handpicked products with the best prices — curated daily by our
              experts so you never miss a bargain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <button
                onClick={onShopNow}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-brand text-white font-bold text-base rounded-2xl shadow-cta hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Deals
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold text-base rounded-2xl border border-gray-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                View Featured
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start animate-fade-up delay-400">
              {[
                { icon: "🛡️", text: "Secure Checkout" },
                { icon: "⭐", text: "4.8★ Avg Rating" },
                { icon: "🚀", text: "Fast Delivery" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product collage */}
          <div className="hidden lg:block relative h-[540px]">

            {/* Card 1 — large, center-left */}
            <div className="absolute left-0 top-16 w-52 bg-white rounded-3xl shadow-card-hover overflow-hidden animate-float border border-gray-100/80">
              <div className="h-36 overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" alt="headphones" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-gray-800 line-clamp-1">Sony WH-1000XM5</p>
                <p className="text-brand-600 font-bold text-sm mt-0.5">₹26,990</p>
              </div>
            </div>

            {/* Card 2 — top-right */}
            <div className="absolute right-8 top-4 w-48 bg-white rounded-3xl shadow-card-hover overflow-hidden animate-float delay-200 border border-gray-100/80" style={{ animationDelay: "1s" }}>
              <div className="h-32 overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=200&fit=crop" alt="airpods" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-gray-800 line-clamp-1">AirPods Pro</p>
                <p className="text-brand-600 font-bold text-sm mt-0.5">₹19,900</p>
              </div>
            </div>

            {/* Card 3 — center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-56 bg-white rounded-3xl shadow-card-hover overflow-hidden border border-gray-100/80" style={{ zIndex: 10 }}>
              <div className="h-40 overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop" alt="camera" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="inline-block px-2 py-0.5 bg-accent-100 text-accent-600 text-[10px] font-bold rounded-full mb-1">Best Seller</div>
                <p className="text-sm font-semibold text-gray-800 line-clamp-1">Canon EOS M50 II</p>
                <p className="text-brand-600 font-bold mt-0.5">₹49,990</p>
              </div>
            </div>

            {/* Card 4 — bottom-left */}
            <div className="absolute left-4 bottom-12 w-44 bg-white rounded-3xl shadow-card-hover overflow-hidden animate-float border border-gray-100/80" style={{ animationDelay: "2s" }}>
              <div className="h-32 overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop" alt="watch" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-gray-800 line-clamp-1">Galaxy Watch 6</p>
                <p className="text-brand-600 font-bold text-sm mt-0.5">₹32,999</p>
              </div>
            </div>

            {/* Card 5 — bottom-right */}
            <div className="absolute right-4 bottom-8 w-48 bg-white rounded-3xl shadow-card-hover overflow-hidden animate-float border border-gray-100/80" style={{ animationDelay: "1.5s" }}>
              <div className="h-32 overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop" alt="speaker" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-gray-800 line-clamp-1">JBL Flip 6</p>
                <p className="text-brand-600 font-bold text-sm mt-0.5">₹9,999</p>
              </div>
            </div>

            {/* Amazon badge floating */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-card flex items-center gap-2 animate-fade-in delay-500">
              <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 leading-none">Powered by</p>
                <p className="text-xs font-bold text-gray-800">Amazon India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="text-xs text-gray-400 font-medium">Scroll</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
