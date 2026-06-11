"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 200); // Small buffer
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Animated Gear Background glow */}
          <div className="absolute h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

          {/* Logo container */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            {/* Spinning Gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-orange-600 to-yellow-500 p-4 rounded-2xl text-black shadow-lg shadow-orange-600/20"
            >
              <Wrench className="h-10 w-10" />
            </motion.div>

            {/* Title */}
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-extrabold tracking-wider text-white">
                AJITH AUTO MOBILES
              </h1>
              <p className="text-[10px] text-zinc-500 tracking-[0.2em] font-semibold mt-1">
                THREE WHEELER WORKSHOP
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-6 border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full"
              />
            </div>

            {/* Percentage */}
            <span className="text-xs font-semibold text-zinc-400 mt-2">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
