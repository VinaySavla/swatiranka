"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/lib/mockData";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";

function CollectionContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "All Artworks";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered =
      selectedCategory === "All Artworks"
        ? [...products]
        : products.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#9bae9b] py-12 lg:py-16">
        <div className="page-width text-center">
          <h1 className="font-heading text-[3rem] lg:text-[4rem] font-light text-[#121212] tracking-wide">
            {selectedCategory === "All Artworks"
              ? "Artworks"
              : selectedCategory}
          </h1>
          <p className="text-[1.5rem] text-[rgba(18,18,18,0.7)] font-body mt-2 tracking-wide">
            {filteredProducts.length} {filteredProducts.length === 1 ? "artwork" : "artworks"}
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-[#f5f5f5]">
        <div className="page-width">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(0,0,0,0.1)]">
            <button
              className="flex items-center gap-2 text-[1.3rem] font-body text-[#121212] lg:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>

            {/* Desktop Category Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[1.3rem] font-body tracking-wider uppercase transition-colors ${
                    selectedCategory === cat
                      ? "text-[#9bae9b] font-bold"
                      : "text-[rgba(0,0,0,0.6)] hover:text-[#121212]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative flex items-center gap-2">
              <label className="text-[1.3rem] font-body text-[rgba(0,0,0,0.6)] tracking-wide hidden md:block">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[1.3rem] font-body text-[#121212] bg-transparent border border-[rgba(0,0,0,0.2)] px-3 py-2 outline-none focus:border-[#9bae9b] transition-colors tracking-wide appearance-none pr-8"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
                <option value="title-asc">A-Z</option>
                <option value="title-desc">Z-A</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden mb-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[1.4rem] font-body font-bold text-[#121212] tracking-wide">
                  Categories
                </span>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-[rgba(0,0,0,0.4)]"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className={`text-[1.3rem] font-body px-4 py-2 border tracking-wide transition-colors ${
                      selectedCategory === cat
                        ? "bg-[#9bae9b] text-white border-[#9bae9b]"
                        : "border-[rgba(0,0,0,0.2)] text-[#121212] hover:border-[#9bae9b]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="font-heading text-xl font-light text-[#121212] mb-4">
                No artworks found in this category
              </p>
              <button
                onClick={() => setSelectedCategory("All Artworks")}
                className="button button--secondary"
              >
                View all artworks
              </button>
            </div>
)}
</div>
</section>
</>
);
}

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#9bae9b] py-12 lg:py-16">
          <div className="page-width text-center">
            <div className="animate-pulse h-10 w-48 bg-white/30 mx-auto rounded" />
          </div>
        </div>
      }
    >
      <CollectionContent />
    </Suspense>
  );
}
