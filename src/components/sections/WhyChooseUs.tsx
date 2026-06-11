"use client";

import React from "react";
import { Trophy, Wrench, ShieldAlert, BadgeCent, Flame, Smile } from "lucide-react";
import Card from "../ui/Card";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Trophy className="h-6 w-6 text-orange-500" />,
      title: "17+ Years Experience",
      desc: "A rich history of diagnosing and rebuilding complex three-wheeler layouts.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
      title: "Skilled Mechanics",
      desc: "Our technicians possess industry training certifications on diesel & electrical lines.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-orange-500" />,
      title: "Genuine Spare Part",
      desc: "We prioritize original manufacturer spares, protecting your vehicle's mechanical health.",
    },
    {
      icon: <BadgeCent className="h-6 w-6 text-orange-500" />,
      title: "Affordable Pricing",
      desc: "Clear upfront quotes with absolutely zero hidden service costs or diagnostics bills.",
    },
    {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      title: "Fast Service",
      desc: "Quick diagnostic evaluations and repairs to return you to the road rapidly.",
    },
    {
      icon: <Smile className="h-6 w-6 text-orange-500" />,
      title: "Customer Satisfaction",
      desc: "Loved and endorsed by hundred of auto drivers around Chettikuzhy & Kootar.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Grids */}
      <div className="absolute inset-0 bg-grid-mesh opacity-20 -z-10" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-80 w-80 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Ajith Auto Mobiles?
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            We merge standard mechanical skills with modern digital diagnostic tools to offer premium, long-term road support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <Card
              key={reason.title}
              delay={idx * 0.05}
              className="flex items-start gap-4 border-white/5 bg-zinc-950/40 relative group"
              glow={idx === 0 || idx === 5}
            >
              {/* Icon Container */}
              <div className="bg-zinc-900 p-3 rounded-lg border border-white/5 text-orange-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {reason.icon}
              </div>

              {/* Text info */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Neon border detail */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
