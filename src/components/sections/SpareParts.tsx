"use client";

import React from "react";
import { Wrench, Phone, CheckCircle2, ShieldCheck, MessageCircle, Settings } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function SpareParts() {
  const categories = [
    { name: "Engine Components", desc: "Clutch assemblies, pistons, cylinder blocks, crank shafts, and gaskets." },
    { name: "Braking Systems", desc: "Master cylinders, premium brake shoes, wheel cylinders, and brake fluid." },
    { name: "Electrical Parts", desc: "Heavy-duty starter motors, alternators/dynamos, relays, and complete wiring harnesses." },
    { name: "Suspension & Chassis", desc: "Leaf springs, fork shock absorbers, steering cone ball racers, and bushes." },
    { name: "Filters & Fluids", desc: "High-flow air filters, fuel filters, diesel engine oils, and differential gears oil." },
  ];

  return (
    <section id="spare-parts" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Parts Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            100% Genuine Spare Part Supply
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            We source original manufacturer spare parts directly for all models of Piaggio Ape, Atul Auto, and cargo/passenger auto rickshaws.
          </p>
        </div>

        {/* Action Panel and Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Inquire Card */}
          <div className="lg:col-span-5 flex flex-col">
            <Card className="h-full flex flex-col justify-between p-8 border-white/10 bg-zinc-900/40 relative overflow-hidden" glow>
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 blur-xl rounded-full" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-orange-600 to-yellow-500 p-3 rounded-xl text-black shadow-lg shadow-orange-600/20">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Order or Check Stock
                    </h3>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold tracking-wider">
                      Immediate Assistance
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  We maintain a robust stock of regular replacement parts directly in our workshop. If you need a specific part for your commercial vehicle, contact us directly. We will check availability or source it within 24 hours.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                    <span>Direct compatibility guarantees</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                    <span>Manufacturer warranty backups</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                    <span>Professional installation options</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-8 border-t border-white/5 mt-6">
                <Button href="tel:06282771225" variant="primary" className="w-full justify-center">
                  <Phone className="h-4.5 w-4.5" />
                  Call for Parts Inquiry
                </Button>
                
                <Button 
                  href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20check%20the%20stock%20availability%20for%20a%20spare%20part."
                  variant="glass" 
                  className="w-full justify-center border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-950/10 text-emerald-400"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-emerald-400" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          {/* Right: Supplied Categories List */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight px-2">
              Spare Part Categories We Supply
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {categories.map((cat, idx) => (
                <div 
                  key={cat.name}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/30 hover:border-orange-500/20 hover:bg-zinc-900/50 transition-all duration-300 group"
                >
                  <div className="bg-zinc-900 p-2.5 rounded-lg border border-white/5 text-orange-500 group-hover:scale-110 transition-transform">
                    <Settings className="h-5 w-5 animate-spin-slow" style={{ animationDuration: "15s" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-orange-500 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sourcing notice */}
            <div className="p-4 rounded-xl border border-dashed border-white/5 bg-zinc-900/20 text-xs text-zinc-500 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-orange-500/80 flex-shrink-0" />
              <span>Have a specific model version? Share the part number or photo on WhatsApp for a quick compatibility matching.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
