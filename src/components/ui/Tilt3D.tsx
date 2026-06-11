"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees
}

export default function Tilt3D({ children, className = "", maxTilt = 12 }: Tilt3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate motion values normalized to a -0.5 to 0.5 range
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Create smooth springs for rotation angles
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  // Map normalized coordinates to rotation angles
  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  // Map normalized coordinates to glare positioning
  const glareLeft = useTransform(springX, [0, 1], ["-20%", "60%"]);
  const glareTop = useTransform(springY, [0, 1], ["-20%", "60%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates between 0 and 1
    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    // Return to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      style={{ perspective: "1200px" }}
      className="w-full h-full"
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full rounded-xl transition-shadow duration-300 ${className}`}
      >
        {/* Glamorous Glossy Glare reflection overlay */}
        <motion.div
          style={{
            left: glareLeft,
            top: glareTop,
            transform: "translateZ(20px)",
          }}
          className="absolute h-[150%] w-[150%] rounded-full bg-gradient-to-r from-white/10 to-transparent blur-3xl pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Outer content container preserving 3D child translations */}
        <div style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
