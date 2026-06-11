"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  glow = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        borderColor: glow ? "rgba(249, 115, 22, 0.4)" : "rgba(255, 255, 255, 0.15)",
        boxShadow: glow
          ? "0 10px 30px -10px rgba(249, 115, 22, 0.2)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {glow && (
        <div className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full bg-orange-600/10 blur-3xl transition-opacity duration-300" />
      )}
      {children}
    </motion.div>
  );
}
