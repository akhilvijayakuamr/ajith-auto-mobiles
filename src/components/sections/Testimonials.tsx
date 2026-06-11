"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: Left, 1: Right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Rajesh K.",
      role: "Auto Rickshaw Owner-Driver",
      location: "Chettikuzhy",
      quote: "My Piaggio Ape had a severe gear-shifting lag that three other shops couldn't resolve. Ajith checked the transmission, fixed the selector, and returned it within 4 hours. Absolute experts!",
      rating: 5,
    },
    {
      name: "Hariprasad V.",
      role: "Cargo Fleet Operator",
      location: "Kootar",
      quote: "We run 5 Atul Auto cargo carriers. Ajith Auto Mobiles manages all our preventive servicing and overhauls. Their honesty in pricing and availability of genuine spares saves us a lot of money.",
      rating: 5,
    },
    {
      name: "Sunny Thomas",
      role: "Passenger Auto Driver",
      location: "Nedumkandam",
      quote: "Excellent response time. My vehicle stalled near Kootar due to an alternator issue. Sachin arrived within 20 minutes, diagnosed the issue, and did a temporary fix to get me back to the workshop.",
      rating: 5,
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        handleNext(),
      8000 // Rotate every 8s
    );

    return () => resetTimeout();
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Our Customers Say
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="glass-panel p-8 md:p-12 rounded-2xl border-white/5 bg-zinc-900/60 max-w-3xl w-full text-center relative"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-4 left-6 text-orange-500/10">
                <Quote className="h-20 w-20" />
              </div>

              <div className="flex flex-col items-center gap-6 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-medium italic">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    {testimonials[activeIndex].role} &bull; {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dot Indicators & Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="text-zinc-400 hover:text-white p-2 rounded-full border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 bg-orange-500" : "w-2 bg-zinc-800"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-zinc-400 hover:text-white p-2 rounded-full border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
