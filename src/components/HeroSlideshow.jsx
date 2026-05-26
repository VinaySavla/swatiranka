"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: heroSlides[currentSlide].objectPosition,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute top-4 left-0 right-0 z-10 page-width">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 text-white/70 hover:text-white transition-colors ml-4"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
