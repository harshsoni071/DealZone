/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        accent: {
          50:  "#fff7ed",
          100: "#ffedd5",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        surface: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
        },
      },
      boxShadow: {
        "card":    "0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)",
        "card-hover": "0 8px 30px rgba(0,0,0,.12)",
        "nav":     "0 1px 0 rgba(0,0,0,.06)",
        "glass":   "0 4px 24px rgba(0,0,0,.08)",
        "cta":     "0 8px 24px rgba(59,130,246,.35)",
        "orange":  "0 8px 24px rgba(249,115,22,.35)",
      },
      borderRadius: {
        "xl":  "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      animation: {
        "fade-up":   "fadeUp .6s ease both",
        "fade-in":   "fadeIn .5s ease both",
        "float":     "float 6s ease-in-out infinite",
        "shimmer":   "shimmer 2s linear infinite",
        "badge-pop": "badgePop .4s cubic-bezier(.34,1.56,.64,1) both",
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        fadeIn:   { from: { opacity: 0 },                                 to: { opacity: 1 } },
        float:    { "0%,100%": { transform: "translateY(0)" },             "50%": { transform: "translateY(-12px)" } },
        shimmer:  { from: { backgroundPosition: "-200% 0" },               to:   { backgroundPosition: "200% 0" } },
        badgePop: { from: { opacity: 0, transform: "scale(.6)" },          to:   { opacity: 1, transform: "scale(1)" } },
      },
    },
  },
  plugins: [],
};
