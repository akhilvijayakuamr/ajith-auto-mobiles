"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Users, Clock } from "lucide-react";
import Counter from "../ui/Counter";
import Card from "../ui/Card";

export default function About() {
  const highlights = [
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "17+ Years Experience",
      desc: "Deep knowledge in all three-wheeler models, engine setups, and diagnostic workflows.",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Expert Mechanics",
      desc: "Our technicians undergo periodic skill upgrades to stay aligned with modern vehicle setups.",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Genuine Spares",
      desc: "We source directly from manufacturers, assuring quality parts replacement.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-orange-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Columns - Images & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Metric Card 1 */}
              <Card className="flex flex-col justify-center items-center py-8 text-center" glow>
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 flex items-baseline justify-center">
                  <Counter end={17} suffix="+" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 mt-2">Years of Expertise</span>
              </Card>

              {/* Metric Card 2 */}
              <Card className="flex flex-col justify-center items-center py-8 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 flex items-baseline justify-center">
                  <Counter end={15} suffix="k+" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 mt-2">Vehicles Repaired</span>
              </Card>

              {/* Metric Card 3 */}
              <Card className="flex flex-col justify-center items-center py-8 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 flex items-baseline justify-center">
                  <Counter end={100} suffix="%" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 mt-2">Satisfaction Rate</span>
              </Card>

              {/* Metric Card 4 */}
              <Card className="flex flex-col justify-center items-center py-8 text-center" glow>
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 flex items-baseline justify-center">
                  <Counter end={3} suffix="" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 mt-2">Certified Specialists</span>
              </Card>
            </div>

            {/* Quality Statement */}
            <div className="glass-panel p-6 rounded-xl border-white/5 bg-gradient-to-r from-orange-950/10 to-transparent">
              <span className="text-xs text-orange-500 font-extrabold uppercase tracking-widest block mb-1">
                Quality Assurance
              </span>
              <p className="text-sm text-zinc-400 italic">
                &ldquo;We don&apos;t just patch issues; we diagnose the root causes to guarantee your vehicle stays reliable on commercial roads.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Columns - Story Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Empowering Three-Wheelers For Over 17 Years
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
            </div>

            <p className="text-zinc-300 leading-relaxed text-base">
              Founded by <strong>Ajith Kumar V</strong>, a veteran mechanic with a passion for three-wheel diagnostics, Ajith Auto Mobiles has evolved into the region&apos;s most trusted servicing hub. Operating from our fully-equipped workshop near Kootar, we service hundreds of cargo and passenger vehicles monthly.
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm">
              We understand that your auto rickshaw or commercial carrier is your livelihood. That is why we emphasize quick turnaround times, transparent estimations, and original spare replacements to keep down-times minimal.
            </p>

            {/* Highlighting Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5 w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Point Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Piaggio Ape & Atul Auto Authorized Techs",
                "Advanced electrical wire harness fixing",
                "24/7 Breakdown emergency help desk",
                "Engine overhaul with warranty backups",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
