"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f5f5f5]">
      <div className="page-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-[2.4rem] lg:text-[3.2rem] font-light text-[#121212] mb-8 tracking-wide leading-snug">
            &ldquo;I dream my painting and I paint my dream.&rdquo; - Vincent
            Van Gogh
          </h2>
          <Link
            href="/collections/all"
            className="button button--secondary"
          >
            Explore Artworks
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
