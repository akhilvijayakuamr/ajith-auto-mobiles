"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Zap, Settings, Award } from "lucide-react";
import Card from "../ui/Card";

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  desc: string;
  specialtyIcon: React.ReactNode;
  specialtyName: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Ajith Kumar V",
      role: "Founder & Senior Mechanic",
      experience: "17 Years Experience",
      desc: "Specialist in advanced three-wheeler repair, engine diagnostics, gearbox rebuilds, and overall workshop management.",
      specialtyIcon: <Award className="h-5 w-5 text-orange-500" />,
      specialtyName: "Diagnostics & Overhauls",
    },
    {
      name: "Ajith Soman",
      role: "Service Technician",
      experience: "5 Years Experience",
      desc: "Specialist in mechanical repairs, leaf spring tensioning, brakes calibration, and general periodical maintenance.",
      specialtyIcon: <Wrench className="h-5 w-5 text-orange-500" />,
      specialtyName: "Mechanical Repairs",
    },
    {
      name: "Sachin Jose",
      role: "Service Technician",
      experience: "5 Years Experience",
      desc: "Specialist in auto electrical system routing, starter motor rebuilding, dynamos, and genuine spare part fitments.",
      specialtyIcon: <Zap className="h-5 w-5 text-orange-500" />,
      specialtyName: "Electricals & Spares",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-80 w-80 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Meet the Crew
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Skilled Mechanics
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Highly trained and certified technicians who treat your three-wheeler with absolute care and precision.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card
              key={member.name}
              delay={idx * 0.1}
              className="flex flex-col justify-between items-center text-center p-8 group"
              glow={idx === 0}
            >
              {/* Profile Avatar Frame */}
              <div className="relative mb-6">
                {/* Outer spin gear vector */}
                <div className="absolute inset-0 -m-3 border-2 border-dashed border-orange-500/10 rounded-full group-hover:rotate-45 transition-transform duration-700" />
                
                {/* Inner container */}
                <div className="h-28 w-28 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-600 group-hover:text-orange-500 transition-colors relative overflow-hidden group-hover:border-orange-500/30">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Stylized Mechanical Wrench Avatar representation */}
                  <div className="relative flex flex-col items-center justify-center text-zinc-500 group-hover:text-orange-500 transition-colors duration-300">
                    <Settings className="h-12 w-12 animate-spin-slow" style={{ animationDuration: "12s" }} />
                    <Wrench className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  </div>
                </div>

                {/* Experience counter badge */}
                <span className="absolute bottom-0 right-0 px-2 py-0.5 rounded-full bg-orange-600 text-[10px] font-extrabold text-black uppercase tracking-wider shadow shadow-black/50 border border-black/10">
                  {member.experience.split(" ")[0]} Yrs Exp
                </span>
              </div>

              {/* Profile Copy */}
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider block">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                  {member.desc}
                </p>
              </div>

              {/* Specialty Tag */}
              <div className="mt-6 pt-5 border-t border-white/5 w-full flex items-center justify-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="p-1.5 rounded-md bg-zinc-950 border border-white/5 text-orange-500 group-hover:scale-110 transition-transform">
                  {member.specialtyIcon}
                </span>
                <span>{member.specialtyName}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
