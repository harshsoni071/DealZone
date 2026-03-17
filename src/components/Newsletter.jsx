import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) { setStatus("error"); return; }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="newsletter" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-600 to-blue-500 rounded-3xl px-8 py-16 sm:px-16 text-center overflow-hidden">

          {/* Background deco */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🔔
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
              Never Miss a Deal
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto">
              Get the hottest Amazon deals delivered to your inbox every morning — before they sell out.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur rounded-2xl py-5 px-8 max-w-md mx-auto">
                <span className="text-2xl">🎉</span>
                <div className="text-left">
                  <p className="text-white font-bold">You're in!</p>
                  <p className="text-blue-100 text-sm">Deals are on their way to your inbox.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                    className={`w-full pl-11 pr-4 py-3.5 bg-white rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      status === "error"
                        ? "ring-2 ring-red-400"
                        : "focus:ring-brand-300"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm rounded-xl shadow-orange hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-red-300 text-sm mt-2">Please enter a valid email address.</p>
            )}

            <p className="text-blue-200/70 text-xs mt-5">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>

            {/* Subscriber count */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="flex -space-x-2">
                {["from-pink-400 to-rose-500", "from-brand-400 to-brand-600", "from-emerald-400 to-teal-500", "from-amber-400 to-orange-500"].map((g, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-white`}>
                    {["A","P","R","K"][i]}
                  </div>
                ))}
              </div>
              <span className="text-blue-100 text-sm">Join <strong className="text-white">12,000+</strong> deal hunters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
