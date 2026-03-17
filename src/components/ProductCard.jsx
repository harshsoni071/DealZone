const BADGE_STYLES = {
  "Best Seller":  "bg-amber-100 text-amber-700 border-amber-200",
  "Top Rated":    "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Hot Deal":     "bg-red-100 text-red-600 border-red-200",
  "New Arrival":  "bg-sky-100 text-sky-700 border-sky-200",
  "Limited Offer":"bg-violet-100 text-violet-700 border-violet-200",
  "Popular":      "bg-orange-100 text-orange-700 border-orange-200",
  "Premium":      "bg-slate-100 text-slate-700 border-slate-200",
  "Gift Pick":    "bg-pink-100 text-pink-700 border-pink-200",
  "Budget Pick":  "bg-lime-100 text-lime-700 border-lime-200",
};

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3.5 h-3.5 ${
            s <= Math.floor(rating)
              ? "text-amber-400"
              : s - 0.5 <= rating
              ? "text-amber-300"
              : "text-gray-200"
          }`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const handleOpen = () => window.open(product.amazonLink, "_blank");

  const discount = product.originalPrice
    ? Math.round(
        ((parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
          parseInt(product.price.replace(/[₹,]/g, ""))) /
          parseInt(product.originalPrice.replace(/[₹,]/g, ""))) *
          100
      )
    : null;

  return (
    <article
      onClick={handleOpen}
      className="group relative bg-white rounded-2xl shadow-card card-hover cursor-pointer overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Badges row */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.badge && (
          <span
            className={`inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-full border animate-badge-pop ${
              BADGE_STYLES[product.badge] ?? "bg-gray-100 text-gray-600 border-gray-200"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      {discount && (
        <div className="absolute top-3 right-3 z-10 w-10 h-10 gradient-accent rounded-full flex items-center justify-center shadow-orange/30 shadow-md">
          <span className="text-white text-[10px] font-black leading-none text-center">-{discount}%</span>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-surface-50 img-zoom">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/8 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 backdrop-blur text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-md border border-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View on Amazon ↗
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1.5">
          {product.category}
        </span>

        <h3 className="text-gray-800 text-sm font-semibold leading-snug line-clamp-2 mb-3 group-hover:text-brand-700 transition-colors flex-1">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <Stars rating={product.rating} />
          <span className="text-gray-400 text-xs">
            {product.rating} ({product.reviews?.toLocaleString("en-IN")})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-gray-900 text-lg font-black">{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 text-xs line-through">{product.originalPrice}</span>
          )}
        </div>

        {/* CTA button */}
        <button
          onClick={(e) => { e.stopPropagation(); handleOpen(); }}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 gradient-brand text-white text-sm font-semibold rounded-xl shadow-cta/20 shadow-md hover:shadow-cta/40 hover:shadow-lg hover:brightness-105 transition-all"
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.097v-.41c0-.753.06-1.642-.384-2.292-.385-.579-1.128-.82-1.785-.82-1.214 0-2.291.623-2.556 1.911l-3.085-.333c.51-2.96 3.878-4.48 6.903-4.48 1.553 0 3.584.414 4.814 1.588 1.155 1.248 1.046 2.914 1.046 4.727v4.282c0 1.286.534 1.852 1.038 2.549.176.248.215.545-.009.729l-2.038 1.919z" />
          </svg>
          View on Amazon
        </button>
      </div>
    </article>
  );
}
