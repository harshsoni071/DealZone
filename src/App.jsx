import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDeals from "./components/FeaturedDeals";
import ProductGrid from "./components/ProductGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { products } from "./products";

// Scroll-reveal: add "visible" class to .reveal elements when they enter viewport
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  useScrollReveal();

  const scrollToProducts = () =>
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-surface-50 antialiased">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero onShopNow={scrollToProducts} />

      <div className="reveal">
        <FeaturedDeals />
      </div>
      <div className="reveal">
        <ProductGrid products={products} searchQuery={searchQuery} />
      </div>
      <div className="reveal">
        <WhyChooseUs />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
