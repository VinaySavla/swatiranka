"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/lib/mockData";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Check,
  ChevronDown,
  ShoppingBag,
} from "lucide-react";

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.handle === params.handle);

  if (!product) {
    return (
      <div className="page-width py-16 text-center">
        <h1 className="font-heading text-[2.4rem] font-light text-[#121212] mb-4">
          Product not found
        </h1>
        <Link href="/collections/all" className="button button--secondary">
          Back to collection
        </Link>
      </div>
    );
  }

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <section className="py-8 lg:py-12 bg-[#f5f5f5]">
      <div className="page-width">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[1.3rem] font-body text-[rgba(0,0,0,0.5)] tracking-wide">
          <Link href="/" className="hover:text-[#121212] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/collections/all"
            className="hover:text-[#121212] transition-colors"
          >
            Artworks
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#121212]">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative overflow-hidden bg-[#f3f3f3] mb-3 aspect-square">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                sizes="(min-width: 990px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-[#121212] transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-[#121212] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? "border-[#9bae9b]"
                      : "border-transparent hover:border-[rgba(0,0,0,0.2)]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-[2.8rem] lg:text-[3.4rem] font-light text-[#121212] mb-3 tracking-wide leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[1.8rem] font-body font-bold text-[#121212]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-[1.5rem] font-body text-[rgba(0,0,0,0.4)] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="text-[1.2rem] font-body font-bold text-[#9bae9b] uppercase tracking-wider">
                  Sale
                </span>
              )}
            </div>

            {/* Category */}
            <p className="text-[1.3rem] font-body text-[rgba(0,0,0,0.5)] mb-6 tracking-wide uppercase">
              {product.category}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-[1.3rem] font-body font-bold text-[#121212] mb-3 tracking-wider uppercase">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 text-[1.3rem] font-body border rounded-full transition-all tracking-wide ${
                      selectedSize === size
                        ? "bg-[#9bae9b] text-white border-[#9bae9b]"
                        : "border-[rgba(0,0,0,0.3)] text-[#121212] hover:border-[#121212]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[1.2rem] font-body text-red-500 mt-2 tracking-wide">
                  Please select a size
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-[1.3rem] font-body font-bold text-[#121212] mb-3 tracking-wider uppercase">
                Quantity
              </label>
              <div className="flex items-center border border-[rgba(0,0,0,0.2)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-[#121212] hover:bg-[#f3f3f3] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-[1.4rem] font-body text-[#121212]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-[#121212] hover:bg-[#f3f3f3] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`button w-full flex items-center justify-center gap-2 ${
                  addedToCart
                    ? "bg-green-600 border-green-600 text-white"
                    : selectedSize
                    ? "button--primary"
                    : "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to Cart
                  </>
                )}
              </button>
              <button className="button button--secondary w-full bg-[#121212] text-white border-[#121212] hover:bg-[#9bae9b] hover:border-[#9bae9b]">
                Buy it Now
              </button>
            </div>

            {/* Accordion / Description */}
            <div className="border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "description" ? null : "description"
                  )
                }
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <span className="text-[1.4rem] font-body font-bold text-[#121212] tracking-wider uppercase">
                  Description
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#121212] transition-transform duration-200 ${
                    openAccordion === "description" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "description" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pb-4"
                >
                  <p className="text-[1.5rem] font-body text-[rgba(0,0,0,0.75)] leading-relaxed tracking-wide">
                    {product.description}
                  </p>
                </motion.div>
              )}
            </div>

            <div className="border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "shipping" ? null : "shipping"
                  )
                }
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <span className="text-[1.4rem] font-body font-bold text-[#121212] tracking-wider uppercase">
                  Shipping & Returns
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#121212] transition-transform duration-200 ${
                    openAccordion === "shipping" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "shipping" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pb-4"
                >
                  <p className="text-[1.5rem] font-body text-[rgba(0,0,0,0.75)] leading-relaxed tracking-wide">
                    Free shipping on all orders within India. International
                    shipping available at checkout. Returns accepted within 7
                    days of delivery for undamaged pieces. Custom artworks are
                    non-refundable.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="border-t border-b border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "care" ? null : "care"
                  )
                }
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <span className="text-[1.4rem] font-body font-bold text-[#121212] tracking-wider uppercase">
                  Care Instructions
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#121212] transition-transform duration-200 ${
                    openAccordion === "care" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "care" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pb-4"
                >
                  <p className="text-[1.5rem] font-body text-[rgba(0,0,0,0.75)] leading-relaxed tracking-wide">
                    Avoid direct sunlight exposure for extended periods. Dust
                    gently with a soft, dry cloth. Do not use cleaning chemicals
                    or water on the painted surface. Handle with care during
                    transportation.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
