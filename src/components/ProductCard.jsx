"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link href={`/products/${product.handle}`} className="block">
        <div
          className="relative overflow-hidden bg-[#f3f3f3] mb-4"
          style={{ paddingBottom: "100%" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(min-width: 1200px) 25vw, (min-width: 750px) 50vw, 100vw"
            className="object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.title}
              fill
              sizes="(min-width: 1200px) 25vw, (min-width: 750px) 50vw, 100vw"
              className="object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          )}
          {product.compareAtPrice && (
            <span className="absolute top-3 left-3 bg-[#9bae9b] text-white text-[1.1rem] font-body font-bold px-3 py-1 uppercase tracking-wider">
              Sale
            </span>
          )}
        </div>
        <div className="text-left">
          <h3 className="font-heading text-[1.5rem] font-light text-[#121212] mb-1 tracking-wide group-hover:text-[#9bae9b] transition-colors">
            {product.title}
          </h3>
          <p className="text-[1.3rem] text-[rgba(0,0,0,0.6)] mb-1 font-body tracking-wide">
            {product.category}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[1.4rem] font-body font-bold text-[#121212]">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[1.3rem] font-body text-[rgba(0,0,0,0.4)] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
