"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Wrench, Zap, Settings, ShieldAlert, Cpu, Flame, Hammer, ClipboardCheck, X, Check } from "lucide-react";
import Button from "../ui/Button";

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  details: string[];
  duration: string;
}

// Inner Component to implement the Magnetic Hover Pull effect on Service Cards
function MagneticServiceCard({
  children,
  onClick,
  glow = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  glow?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for offset position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for magnetic attraction
  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor distance from the card center
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull by max 18px toward mouse
    x.set(distanceX * 0.12);
    y.set(distanceY * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      className={`relative cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-orange-500/40 ${
        glow ? "shadow-[0_0_20px_rgba(249,115,22,0.08)]" : ""
      }`}
    >
      {glow && (
        <div className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full bg-orange-600/10 blur-3xl" />
      )}
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "engine",
      title: "Engine Repair",
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      shortDesc: "Decoking, piston replacement, cylinder boring, compression tests, and diesel tuning.",
      details: [
        "Cylinder head grinding and valve alignment",
        "High durability piston and connecting rod replacement",
        "Engine block boring and sizing",
        "Fuel pump and injector testing (Diesel/LPG)",
        "Gasket fitting to eliminate oil dripping",
        "Advanced post-assembly compression tuning",
      ],
      duration: "1 - 2 Days",
    },
    {
      id: "electrical",
      title: "Electrical Repair",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      shortDesc: "Complete rewiring, starter motor overhauls, dynamo winds, relays, and battery checks.",
      details: [
        "Short-circuit diagnostics and wire routing fixes",
        "Starter motor carbon brush replacement",
        "Dynamo/alternator re-winding and testing",
        "Relay settings and high-luminosity headlight setups",
        "Instrument cluster and wiper motor fixes",
      ],
      duration: "2 - 4 Hours",
    },
    {
      id: "brakes",
      title: "Brake Service",
      icon: <Cpu className="h-6 w-6 text-orange-500" />,
      shortDesc: "Brake shoe replacement, cylinder bleeding, master cylinder adjustments, and road tests.",
      details: [
        "Asbestos-free premium brake shoe installation",
        "Brake drum machining and polishing",
        "Master hydraulic cylinder calibration or replacement",
        "System bleeding and fluid replenishment",
        "Handbrake cables and play setting adjustments",
      ],
      duration: "1.5 - 2 Hours",
    },
    {
      id: "suspension",
      title: "Suspension Service",
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
      shortDesc: "Shock absorber rebuilding, leaf spring tensioning, and front fork adjustments.",
      details: [
        "Front fork rebuilds and oil seal replacement",
        "Shock absorber damper swap",
        "Leaf spring bushing replacement & re-tensioning",
        "Steering cone set adjustments and racer replacement",
        "Wheel bearing greasing and replacement",
      ],
      duration: "3 - 5 Hours",
    },
    {
      id: "spares",
      title: "Spare Parts",
      icon: <Settings className="h-6 w-6 text-orange-500" />,
      shortDesc: "Fitments for genuine engine, gear cables, brake parts, and body components.",
      details: [
        "Replacement using original factory spare parts",
        "Clutch assembly plate swap",
        "Exhaust silencer muffler mounting",
        "Accelerator, clutch, and gear cables installation",
      ],
      duration: "1 - 2 Hours",
    },
    {
      id: "welding",
      title: "Welding & Fabrication",
      icon: <Hammer className="h-6 w-6 text-orange-500" />,
      shortDesc: "Heavy duty chassis reinforcement, cracked frame welding, and bumper fixes.",
      details: [
        "Chassis welding and load bed reinforcements",
        "Bumper and engine cage fabrication",
        "Silencer bracket mounting repairs",
        "Rusty panel replacements and sheet metal welding",
      ],
      duration: "2 - 4 Hours",
    },
    {
      id: "maintenance",
      title: "Maintenance & Service",
      icon: <ClipboardCheck className="h-6 w-6 text-orange-500" />,
      shortDesc: "Periodic multi-point checkups, oil flushes, greasing, and mileage calibrations.",
      details: [
        "Periodic lubrication and complete oil change",
        "Steering check and clutch cable adjustment",
        "Greasing of all vital chassis points",
        "Tyre rotation and air pressure checking",
      ],
      duration: "1 - 3 Hours",
    },
    {
      id: "emergency",
      title: "Emergency Breakdown Support",
      icon: <ShieldAlert className="h-6 w-6 text-orange-500" />,
      shortDesc: "On-call mobile mechanic support and towing solutions near Chettikuzhy.",
      details: [
        "On-road diagnostics for stalled autos",
        "On-the-spot cable replacement and tyres swap",
        "Towing assistance coordinates to our workshop workshop",
        "Emergency battery jump-start and fuel delivery",
      ],
      duration: "Immediate On-Call",
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Servicing &amp; Maintenance
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Tactile, magnetic-responsive service cards. Click to expand and explore our checklist.
          </p>
        </div>

        {/* Services Magnetic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <MagneticServiceCard
              key={service.id}
              onClick={() => setActiveService(service)}
              glow={service.id === "engine" || service.id === "emergency"}
            >
              <div className="space-y-4 select-none pointer-events-none">
                <div className="bg-zinc-950 p-3 rounded-lg border border-white/5 w-fit text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed min-h-[40px]">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  Est: {service.duration}
                </span>
                <span className="text-xs text-orange-500 font-bold flex items-center gap-1">
                  Details &rarr;
                </span>
              </div>
            </MagneticServiceCard>
          ))}
        </div>
      </div>

      {/* Cinematic Modal details popup */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-lg rounded-xl border border-white/10 bg-neutral-900 p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Corner Neon Ambient glow */}
              <div className="absolute -right-24 -top-24 -z-10 h-48 w-48 rounded-full bg-orange-600/10 blur-3xl" />

              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-800 p-3 rounded-lg text-orange-500">
                    {activeService.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold tracking-wider block mt-0.5">
                      Service Duration: {activeService.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-zinc-300 leading-relaxed border-l-2 border-orange-500 pl-3">
                    {activeService.shortDesc}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Diagnostics Checklist:
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <Check className="h-4.5 w-4.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                  <Button
                    href="tel:06282771225"
                    variant="primary"
                    className="w-full sm:w-auto text-sm justify-center"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    onClick={() => setActiveService(null)}
                    variant="glass"
                    className="w-full sm:w-auto text-sm justify-center border-white/5"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
