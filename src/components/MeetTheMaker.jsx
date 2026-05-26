"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MeetTheMaker() {
  return (
    <section className="py-12 lg:py-16 bg-[#f5f5f5]">
      <div className="page-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch -mx-2 lg:-mx-5"
        >
          {/* Image - Right on desktop (reversed) */}
          <div className="order-2 md:order-1 relative overflow-hidden bg-[#f3f3f3]">
            <div style={{ paddingBottom: "66.67%" }} className="relative">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1500&q=80"
                alt="Meet the Maker"
                fill
                sizes="(min-width: 750px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "43% 15%" }}
              />
            </div>
          </div>

          {/* Text - Left on desktop */}
          <div className="order-1 md:order-2 flex items-center">
            <div className="bg-[#9bae9b] p-8 md:p-10 lg:p-14 w-full">
              <h2 className="font-heading text-[2.8rem] lg:text-[3.8rem] font-light text-[#121212] mb-6 tracking-wide leading-tight">
                Meet the Maker
              </h2>
              <p className="text-[1.5rem] lg:text-[1.6rem] text-[rgba(18,18,18,0.8)] font-body leading-relaxed mb-8 tracking-wide">
                A former fund manager, Swati Ranka&apos;s painting sabbatical
                unveiled her true self. She shares her creations to spread
                faith, hope, and love. Every painting of hers has a story or
                something her heart communicated along its journey, and she
                would love to share it with a belief that it will reach the
                souls it&apos;s meant to reach.
              </p>
              <Link
                href="/pages/about-the-artist"
                className="button button--secondary border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
