"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/mockData";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const next = () => {
    setScrollIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };
  const prev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 lg:py-16 bg-[#f5f5f5]">
      <div className="page-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-[2.4rem] lg:text-[3rem] font-light text-[#121212] text-center mb-8 lg:mb-12 tracking-wide"
        >
          Testimonials
        </motion.h2>

        <div className="relative">
          {/* Mobile slider controls */}
          <div className="flex items-center justify-end gap-2 mb-4 md:hidden">
            <button
              onClick={prev}
              disabled={scrollIndex === 0}
              className="p-2 text-[#121212] disabled:opacity-30 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={scrollIndex === testimonials.length - 1}
              className="p-2 text-[#121212] disabled:opacity-30 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="relative overflow-hidden bg-[#f3f3f3] mb-4"
                  style={{ paddingBottom: "88.4%" }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(min-width: 990px) 33vw, (min-width: 750px) 50vw, 100vw"
                    className="object-cover"
                    style={{
                      objectPosition: testimonial.objectPosition,
                    }}
                  />
                </div>
                <h3 className="font-heading text-[1.6rem] font-light text-[#121212] mb-2 tracking-wide">
                  {testimonial.name}
                </h3>
                <p className="text-[1.4rem] text-[rgba(0,0,0,0.75)] font-body leading-relaxed tracking-wide">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pages/custom-artworks"
            className="button button--primary"
          >
            Contact for custom pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
