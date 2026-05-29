"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MeetTheMaker() {
  return (
    <section className="py-20 lg:py-28 bg-[#f6f6f3]">
      <div className="page-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-0 items-start"
        >
          {/* Image - Right on desktop */}
          <div className="order-2 md:order-2 relative overflow-hidden bg-[#f0f0f0]">
            <div style={{ paddingBottom: "62%" }} className="relative">
              <Image
                src="/images/Home/83A0821-maker.jpg"
                alt="Meet the Maker"
                fill
                sizes="(min-width: 750px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "43% 15%" }}
              />
            </div>
          </div>

          {/* Text - Left on desktop */}
          <div className="order-1 md:order-1">
            <div className="bg-[#9eaf9e] p-12 md:p-16 lg:p-[72px] w-full">
              <h2 className="font-heading text-[3.6rem] lg:text-[4.6rem] font-light text-[#1f1f1f] mb-6 tracking-[0.015em] leading-tight">
                Meet the Maker
              </h2>
              <p className="text-[1.45rem] lg:text-[1.55rem] text-[rgba(31,31,31,0.72)] font-body leading-[2] mb-12 tracking-[0.02em]">
                A former fund manager, Swati Ranka&apos;s painting sabbatical
                unveiled her true self. She shares her creations to spread
                faith, hope, and love. Every painting of hers has a story or
                something her heart communicated along its journey, and she
                would love to share it with a belief that it will reach the
                souls it&apos;s meant to reach.
              </p>
              <Link
                href="/pages/about-the-artist"
                className="button button--secondary border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white text-[1.1rem] tracking-[0.12em] normal-case"
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
