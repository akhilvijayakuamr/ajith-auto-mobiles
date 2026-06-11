"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Tilt3D from "../ui/Tilt3D";

export default function Brands() {
  const brands = [
    {
      name: "Piaggio Ape",
      image: "/piaggio_brand.png",
      desc: "Advanced electronic diagnostics, high-performance engine calibrations, and clutch replacements for Ape City, Ape Xtra LD, and Ape City DX models.",
      features: ["Ape City Passenger", "Ape Xtra LD Cargo", "Ape City DX Diesel"],
    },
    {
      name: "Atul Auto",
      image: "/atul_brand.png",
      desc: "Full engine rebuilding, steering ball racer corrections, leaf spring tensions, and brake adjustments for Atul Gem and Atul Smart series.",
      features: ["Atul Gem Cargo", "Atul Gem Passenger", "Atul Smart Cargo"],
    },
    {
      name: "Mahindra Alfa",
      image: "/alfa_brand.png",
      desc: "Master brake cylinder repair, complete wire harness diagnosis, emissions reduction tuning, and damper adjustments for all Alfa passenger/cargo models.",
      features: ["Alfa Passenger Rickshaw", "Alfa Cargo Carrier", "Alfa Champion Diesel"],
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-mesh opacity-20 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Core Vehicles We Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Brand Support
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Equipped with diagnostic software and original tools, we specialize in mechanical and electrical fixes for the region&apos;s leading three-wheeler brands.
          </p>
        </div>

        {/* Brands Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <Tilt3D key={brand.name} className="group relative" maxTilt={15}>
              <Card
                delay={idx * 0.1}
                className="h-full flex flex-col justify-between p-0 overflow-hidden border-white/5 bg-zinc-950/40 relative group-hover:border-transparent transition-colors duration-300"
              >
                {/* SVG Border Tracing Animation Overlay */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="12"
                    fill="none"
                    stroke="url(#brandGlowGrad)"
                    strokeWidth="2"
                    className="[stroke-dasharray:1000] [stroke-dashoffset:1000] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="brandGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Animated Image Banner with 3D Depth */}
                <div 
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                  className="relative h-60 w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />
                  <motion.img
                    src={brand.image}
                    alt={brand.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ transform: "translateZ(10px)" }}
                    className="w-full h-full object-cover select-none"
                  />
                  <div 
                    style={{ transform: "translateZ(40px)" }}
                    className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-extrabold text-orange-500 uppercase tracking-wider shadow-md"
                  >
                    {brand.name} Expert Care
                  </div>
                </div>

                {/* Card Body Content with 3D Depth */}
                <div 
                  style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
                  className="p-6 flex-1 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {brand.desc}
                    </p>
                  </div>

                  {/* Bullets */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block mb-2.5">
                      Serviced Models:
                    </span>
                    <div 
                      style={{ transform: "translateZ(15px)" }}
                      className="flex flex-wrap gap-1.5"
                    >
                      {brand.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-2.5 py-1 rounded bg-zinc-900/80 border border-white/5 text-[10px] font-semibold text-zinc-300"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
