"use client";

import Link from "next/link";
import Image from "next/image";
import { collections } from "@/lib/mockData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CollectionList() {
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
          Artworks by Style and Subject
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/collections/all?category=${collection.handle}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-[#f3f3f3]" style={{ paddingBottom: "100%" }}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(min-width: 990px) 33vw, (min-width: 750px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      objectPosition: collection.objectPosition,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-heading text-[1.6rem] lg:text-[1.8rem] font-light text-[#121212] group-hover:text-[#9bae9b] transition-colors inline-flex items-center gap-2">
                    {collection.title}
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <ArrowRight size={16} />
                    </span>
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
