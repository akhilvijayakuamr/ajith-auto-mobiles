"use client";

import React from "react";
import { FaCogs, FaSlidersH, FaFilter, FaRing, FaTools, FaBolt } from "react-icons/fa";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface PartCategory {
  name: string;
  desc: string;
  fits: string;
  icon: React.ReactNode;
}

export default function SparePartsGallery() {
  const parts: PartCategory[] = [
    {
      name: "Engine Parts",
      desc: "Clutch assemblies, cylinder blocks, piston kits, valves, and crankshaft bearings.",
      fits: "Ape / Atul / Alfa Diesel",
      icon: <FaCogs className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Brake Parts",
      desc: "Premium asbestos-free brake shoes, wheel cylinders, master cylinders, and drums.",
      fits: "Piaggio Ape Cargo & Passenger",
      icon: <FaSlidersH className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Filters & Lubricants",
      desc: "High-density diesel fuel filters, paper element air filters, Differential oils.",
      fits: "All Three-Wheeler Models",
      icon: <FaFilter className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Bearings & Seals",
      desc: "Precision wheel bearings, clutch release bearings, axle oil seals, and cone sets.",
      fits: "Ape City / Atul Gem / Alfa",
      icon: <FaRing className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Suspension Components",
      desc: "Front fork coil shock dampers, heavy load rear leaf spring assemblies, and bushes.",
      fits: "Piaggio Ape Cargo & Atul Pax",
      icon: <FaTools className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Electrical Components",
      desc: "High starting torque 12V starter motors, dynamos, relays, and harness wiring.",
      fits: "Diesel & CNG Models",
      icon: <FaBolt className="h-6 w-6 text-orange-500" />,
    },
  ];

  // Duplicate items twice to ensure seamless infinite looping across large screens
  const doubledParts = [...parts, ...parts, ...parts];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic Keyframes for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background glow highlights */}
      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Store Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premium Spare Parts Gallery
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Hover over any category card to pause the marquee and explore compatibility or details.
          </p>
        </div>

        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden mask-fade py-4 select-none">
          {/* Side Gradients for fading effect */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex w-[300%] sm:w-[200%] lg:w-[150%] animate-marquee gap-6">
            {doubledParts.map((part, idx) => (
              <div
                key={`${part.name}-${idx}`}
                className="w-80 flex-shrink-0 cursor-pointer"
              >
                <Card 
                  className="h-full flex flex-col justify-between p-6 border-white/5 bg-zinc-900/40 relative hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] group transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-zinc-950 p-2.5 rounded-lg border border-white/5 text-orange-500 group-hover:scale-110 transition-transform">
                        {part.icon}
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-orange-500 transition-colors">
                        {part.name}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[48px]">
                      {part.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    <span>Fits: {part.fits}</span>
                    <span className="text-orange-500 group-hover:translate-x-0.5 transition-transform">Inquire &rarr;</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing CTA */}
        <div className="mt-12 text-center">
          <Button 
            href="tel:06282771225"
            variant="secondary"
            className="text-xs tracking-wider"
          >
            Looking for a specific part? Call Store Direct
          </Button>
        </div>
      </div>
    </section>
  );
}
