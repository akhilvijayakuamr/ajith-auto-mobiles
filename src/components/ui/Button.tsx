"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 text-black shadow-lg shadow-orange-600/20 font-bold",
    secondary:
      "border border-orange-500/50 hover:border-orange-400 text-orange-500 hover:text-orange-400 bg-orange-950/10 hover:bg-orange-950/20",
    glass:
      "glass-panel text-white hover:bg-white/10 border-white/10 hover:border-white/20",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-900/50",
  };

  const buttonContent = (
    <motion.span
      className="flex items-center gap-2"
      initial={{ y: 0 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
}
