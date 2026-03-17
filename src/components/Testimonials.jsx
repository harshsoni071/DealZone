const testimonials = [
  {
    name: "Arjun Sharma",
    location: "Mumbai, MH",
    initials: "AS",
    color: "from-brand-400 to-brand-600",
    rating: 5,
    text: "DealZone is my secret weapon for online shopping. Found Sony headphones here at an incredible price. The Amazon redirect is super smooth — bought in 2 clicks!",
    product: "Sony WH-1000XM5",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Priya Reddy",
    location: "Bangalore, KA",
    initials: "PR",
    color: "from-violet-400 to-violet-600",
    rating: 5,
    text: "The product curation here is exceptional. Ratings, prices, discount percentages — everything I need. Saved ₹8,000 on my Fire TV Stick upgrade!",
    product: "Fire TV Stick 4K Max",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Rohit Verma",
    location: "New Delhi",
    initials: "RV",
    color: "from-emerald-400 to-emerald-600",
    rating: 5,
    text: "I check DealZone every morning before any Amazon purchase. Filters work perfectly — found my gaming keyboard setup in under 5 minutes. Absolutely love it.",
    product: "Gaming Keyboard + Mouse",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Kavya Nair",
    location: "Chennai, TN",
    initials: "KN",
    color: "from-pink-400 to-rose-500",
    rating: 5,
    text: "Gifted my sister a Fujifilm Instax Mini that I found on DealZone at a 22% discount. She was thrilled! The gift pick badge is such a helpful touch.",
    product: "Fujifilm Instax Mini 12",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Vikram Patel",
    location: "Ahmedabad, GJ",
    initials: "VP",
    color: "from-amber-400 to-orange-500",
    rating: 4,
    text: "Set up my entire home office using DealZone — monitor, mouse, headset, and webcam. Saved close to ₹12,000 combined. This site is genuinely different.",
    product: "Home Office Bundle",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Sneha Joshi",
    location: "Pune, MH",
    initials: "SJ",
    color: "from-teal-400 to-cyan-500",
    rating: 5,
    text: "As a college student on a budget, the 'Budget Pick' category is a lifesaver. Got excellent earbuds for under ₹1,000. Clean website, no ads, no distractions.",
    product: "boAt Airdopes 141",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${s <= count ? "text-amber-400" : "text-gray-200"}`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-500 text-xs font-bold uppercase tracking-widest bg-accent-50 border border-accent-200 px-3 py-1 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Loved by <span className="text-gradient-accent italic">Shoppers</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real people, real savings. Here's what our community says about DealZone.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5 flex-1 italic">
                "{t.text}"
              </p>

              {/* Product */}
              <div className="text-xs font-semibold text-brand-500 bg-brand-50 border border-brand-200 rounded-full px-3 py-1 inline-block mb-5 self-start">
                Bought: {t.product}
              </div>

              {/* User */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 overflow-hidden`}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-b border-gray-200">
          {[
            { num: "50K+", label: "Monthly Visitors" },
            { num: "4.8/5", label: "User Rating" },
            { num: "₹2Cr+", label: "Savings Generated" },
            { num: "40+", label: "Product Categories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-black text-gray-900">{s.num}</div>
              <div className="text-xs text-gray-400 mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
