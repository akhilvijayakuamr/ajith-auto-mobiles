"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Phone, MapPin, ShieldCheck, Settings, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ThreeVehicle from "../ui/ThreeVehicle";
import Tilt3D from "../ui/Tilt3D";

export default function Hero() {
  const btnCallRef = useRef<HTMLAnchorElement>(null);
  const btnMapsRef = useRef<HTMLAnchorElement>(null);
  const btnWaRef = useRef<HTMLAnchorElement>(null);

  // 1. GSAP Magnetic Hover Effect on CTA Buttons
  useEffect(() => {
    const bindMagnetic = (element: HTMLElement | null) => {
      if (!element) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        // Mouse coordinates relative to the button center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Pull button towards cursor by 35% of offset
        gsap.to(element, {
          x: x * 0.38,
          y: y * 0.38,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        // Bounce back to center elastic style
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanupCall = bindMagnetic(btnCallRef.current);
    const cleanupMaps = bindMagnetic(btnMapsRef.current);
    const cleanupWa = bindMagnetic(btnWaRef.current);

    return () => {
      cleanupCall?.();
      cleanupMaps?.();
      cleanupWa?.();
    };
  }, []);

  // 2. Letter-by-letter reveal configuration
  const headline = "Keeping Kerala's Three Wheelers Moving";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.4 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black bg-grid-mesh"
    >
      {/* Background Glowing Ambiences */}
      <div className="absolute inset-0 bg-radial-gradient -z-10" />
      <div className="absolute top-1/4 left-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-orange-600/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Floating Mechanical Symbols */}
      <motion.div
        className="absolute top-24 left-10 md:left-24 text-orange-500/15 pointer-events-none hidden sm:block"
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Wrench className="h-16 w-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-16 md:left-36 text-yellow-500/10 pointer-events-none hidden sm:block"
        animate={{ y: [0, 15, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Settings className="h-20 w-20 animate-spin-slow" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content Block */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-orange-500 shadow-inner"
            >
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              <span>Certified Three-Wheeler Specialists</span>
            </motion.div>

            {/* Letter by Letter Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] select-none"
            >
              {headline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={char === "T" || char === "M" || char === "K" || char === "W" ? "text-gradient" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0"
            >
              17+ Years of Trusted Service, Repairs & Genuine Spare Parts for Piaggio Ape, Atul Auto, and all commercial passenger and cargo three-wheelers.
            </motion.p>

            {/* GSAP Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 z-20 relative"
            >
              <a
                ref={btnCallRef}
                href="tel:06282771225"
                className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-colors duration-200 outline-none bg-gradient-to-r from-orange-600 to-yellow-500 text-black shadow-lg shadow-orange-600/20 w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4.5 w-4.5" />
                  Call Now
                </span>
              </a>

              <a
                ref={btnMapsRef}
                href="https://maps.google.com/?q=Chettikuzhy,+Near+Kootar,+Lekshmivilasam+Building"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-colors duration-200 outline-none border border-white/10 text-white hover:bg-white/5 w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4.5 w-4.5 text-orange-500" />
                  Get Directions
                </span>
              </a>

              <a
                ref={btnWaRef}
                href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20have%20an%20inquiry%20regarding%20three-wheeler%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-colors duration-200 outline-none border border-emerald-500/20 text-emerald-400 hover:bg-emerald-950/10 w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                  WhatsApp
                </span>
              </a>
            </motion.div>

            {/* Quick Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8 text-left max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block text-2xl font-bold text-white">17+</span>
                <span className="text-xs text-zinc-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">15K+</span>
                <span className="text-xs text-zinc-500">Autos Serviced</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-zinc-500">Genuine Parts</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Piaggio Ape Realistic Image with Tilt3D & Sway */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 flex justify-center relative w-full h-[380px] md:h-[450px] items-center"
          >
            {/* Outer dotted circles */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="h-80 w-80 md:h-[26rem] md:w-[26rem] rounded-full border border-dashed border-orange-500/10 animate-spin-slow" style={{ animationDuration: "40s" }} />
            </div>

            {/* Glowing Image Card wrapped in Tilt3D */}
            <Tilt3D className="relative w-full max-w-[420px] aspect-square" maxTilt={15}>
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotateY: [-12, 12, -12],
                  rotateX: [-6, 6, -6],
                  rotate: [0, 0.8, -0.8, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_35px_rgba(249,115,22,0.25)] bg-zinc-950/70 backdrop-blur-md group cursor-pointer"
              >
                <img
                  src="/piaggio_ape.png"
                  alt="Ajith Auto Mobiles Piaggio Ape Mechanical Workshop"
                  style={{ transform: "translateZ(20px)" }}
                  className="w-full h-full object-cover select-none"
                />
                {/* Subtle glass overlay bottom badge */}
                <div 
                  style={{ transform: "translateZ(45px)" }}
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border-white/5 bg-black/60 flex items-center justify-between gap-3 shadow-2xl pointer-events-none select-none"
                >
                  <div>
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest block">
                      Our Workshop
                    </span>
                    <h4 className="text-xs font-bold text-white mt-0.5">
                      Advanced Three-Wheeler Diagnostics
                    </h4>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            </Tilt3D>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 select-none">
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-5 w-3.5 rounded-full border border-zinc-500 flex justify-center p-1"
        >
          <div className="h-1 w-1 rounded-full bg-orange-500" />
        </motion.div>
      </div>
    </section>
  );
}
