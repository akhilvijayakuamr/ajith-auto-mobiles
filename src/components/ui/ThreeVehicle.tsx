"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeVehicle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [webglError, setWebglError] = useState(false);

  // Guard against server-side rendering / pre-hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;

    // Keep track of all geometries and materials for absolute cleanup
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    try {
      const container = containerRef.current;
      // Get initial dimensions or fall back to container bounds/default
      const rect = container.getBoundingClientRect();
      const width = rect.width || container.clientWidth || 400;
      const height = rect.height || container.clientHeight || 400;

      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(2.8, 1.6, 4.2);
      camera.lookAt(0, 0.12, 0);

      // Create WebGLRenderer. This can throw if WebGL context creation is disabled or unsupported.
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // 2. Setup Lighting (Studio/Workshop Setup)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
      scene.add(ambientLight);

      // Key Light (Sun/Spotlight)
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
      keyLight.position.set(5, 8, 4);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 15;
      keyLight.shadow.bias = -0.001;
      scene.add(keyLight);

      // Warm Workshop Fill Light
      const fillLight = new THREE.DirectionalLight(0xff9955, 0.6);
      fillLight.position.set(-6, 3, -4);
      scene.add(fillLight);

      // Neon Accent Highlight Light (Amber glowing point)
      const neonLight = new THREE.PointLight(0xff6b00, 1.8, 8);
      neonLight.position.set(0, 2, 0);
      scene.add(neonLight);

      // 3. Materials (Metallic Yellow, Canvas Black, Chrome & Rubber)
      const yellowBodyMat = new THREE.MeshStandardMaterial({
        color: 0xf39c12, // Indian Rickshaw Yellow
        roughness: 0.18,
        metalness: 0.1,
      });
      materials.push(yellowBodyMat);

      const blackCanopyMat = new THREE.MeshStandardMaterial({
        color: 0x1e1e1e, // Canvas Black
        roughness: 0.85,
        metalness: 0.05,
      });
      materials.push(blackCanopyMat);

      const chassisSteelMat = new THREE.MeshStandardMaterial({
        color: 0x121212, // Dark Frame
        roughness: 0.5,
        metalness: 0.7,
      });
      materials.push(chassisSteelMat);

      const steelPillarsMat = new THREE.MeshStandardMaterial({
        color: 0x3f3f46, // Metal tubes
        roughness: 0.2,
        metalness: 0.9,
      });
      materials.push(steelPillarsMat);

      const chromeRimMat = new THREE.MeshStandardMaterial({
        color: 0xd4d4d8, // Chrome plating
        roughness: 0.1,
        metalness: 0.95,
      });
      materials.push(chromeRimMat);

      const tyreRubberMat = new THREE.MeshStandardMaterial({
        color: 0x0c0c0e, // Matte Rubber
        roughness: 0.85,
      });
      materials.push(tyreRubberMat);

      const seatLeatherMat = new THREE.MeshStandardMaterial({
        color: 0x27272a, // Seat Dark Grey
        roughness: 0.7,
      });
      materials.push(seatLeatherMat);

      const glassWindshieldMat = new THREE.MeshStandardMaterial({
        color: 0x93c5fd, // Light blue transparent glass
        transparent: true,
        opacity: 0.45,
        roughness: 0.05,
        metalness: 0.9,
      });
      materials.push(glassWindshieldMat);

      const headlightGlassMat = new THREE.MeshBasicMaterial({
        color: 0xfffbeb, // Warm yellow glow
      });
      materials.push(headlightGlassMat);

      const tailLightMat = new THREE.MeshBasicMaterial({
        color: 0xef4444, // Brake Red
      });
      materials.push(tailLightMat);

      const floorShadowMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.38,
      });
      materials.push(floorShadowMat);

      // 4. Assemble the Piaggio Ape 3D Model
      const rickshawGroup = new THREE.Group();

      // A. Main Chassis Frame
      const chassisGeo = new THREE.BoxGeometry(0.8, 0.12, 2.1);
      geometries.push(chassisGeo);
      const chassis = new THREE.Mesh(chassisGeo, chassisSteelMat);
      chassis.position.y = -0.32;
      chassis.castShadow = true;
      chassis.receiveShadow = true;
      rickshawGroup.add(chassis);

      // B. Cabin Floorboard
      const floorGeo = new THREE.BoxGeometry(1.05, 0.06, 1.85);
      geometries.push(floorGeo);
      const floor = new THREE.Mesh(floorGeo, blackCanopyMat);
      floor.position.y = -0.26;
      floor.position.z = -0.1;
      floor.castShadow = true;
      floor.receiveShadow = true;
      rickshawGroup.add(floor);

      // C. Windshield Lower Nose Shield (Slanted front hood)
      const noseGeo = new THREE.BoxGeometry(0.9, 0.65, 0.5);
      geometries.push(noseGeo);
      const nose = new THREE.Mesh(noseGeo, yellowBodyMat);
      nose.position.set(0, 0.06, 0.68);
      nose.rotation.x = -0.15;
      nose.castShadow = true;
      nose.receiveShadow = true;
      rickshawGroup.add(nose);

      // D. Front Mudguard Shield (Arched shield over front wheel)
      const mudguardGeo = new THREE.BoxGeometry(0.32, 0.18, 0.48);
      geometries.push(mudguardGeo);
      const mudguard = new THREE.Mesh(mudguardGeo, yellowBodyMat);
      mudguard.position.set(0, -0.42, 0.85);
      mudguard.castShadow = true;
      rickshawGroup.add(mudguard);

      // E. Back Wall Partition (Behind driver, in front of passengers)
      const midWallGeo = new THREE.BoxGeometry(1.05, 0.5, 0.04);
      geometries.push(midWallGeo);
      const midWall = new THREE.Mesh(midWallGeo, yellowBodyMat);
      midWall.position.set(0, 0.02, -0.05);
      midWall.castShadow = true;
      rickshawGroup.add(midWall);

      // F. Back Compartment Outer Wall (Rear of passenger cabin)
      const backWallGeo = new THREE.BoxGeometry(1.05, 0.85, 0.04);
      geometries.push(backWallGeo);
      const backWall = new THREE.Mesh(backWallGeo, yellowBodyMat);
      backWall.position.set(0, 0.18, -0.92);
      backWall.castShadow = true;
      rickshawGroup.add(backWall);

      // G. Side Mudguards (Rear wheel arches)
      const rearGuardLeftGeo = new THREE.BoxGeometry(0.2, 0.22, 0.65);
      geometries.push(rearGuardLeftGeo);
      const rearGuardLeft = new THREE.Mesh(rearGuardLeftGeo, yellowBodyMat);
      rearGuardLeft.position.set(-0.55, -0.3, -0.6);
      rearGuardLeft.castShadow = true;
      rickshawGroup.add(rearGuardLeft);

      const rearGuardRight = rearGuardLeft.clone();
      rickshawGroup.add(rearGuardRight);

      // H. Steel Pillars (Supporting the roof)
      const pillarGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.88, 8);
      geometries.push(pillarGeo);
      
      const pillarRearLeft = new THREE.Mesh(pillarGeo, steelPillarsMat);
      pillarRearLeft.position.set(-0.5, 0.4, -0.9);
      rickshawGroup.add(pillarRearLeft);

      const pillarRearRight = pillarRearLeft.clone();
      pillarRearRight.position.x = 0.5;
      rickshawGroup.add(pillarRearRight);

      const pillarMidLeft = pillarRearLeft.clone();
      pillarMidLeft.position.set(-0.5, 0.4, -0.05);
      rickshawGroup.add(pillarMidLeft);

      const pillarMidRight = pillarMidLeft.clone();
      pillarMidRight.position.x = 0.5;
      rickshawGroup.add(pillarMidRight);

      const pillarFrontLeft = new THREE.Mesh(pillarGeo, steelPillarsMat);
      pillarFrontLeft.position.set(-0.43, 0.44, 0.45);
      pillarFrontLeft.rotation.x = -0.15;
      rickshawGroup.add(pillarFrontLeft);

      const pillarFrontRight = pillarFrontLeft.clone();
      pillarFrontRight.position.x = 0.43;
      rickshawGroup.add(pillarFrontRight);

      // I. Windshield Glass & Inner Frame
      const windshieldGeo = new THREE.BoxGeometry(0.85, 0.55, 0.02);
      geometries.push(windshieldGeo);
      const windshield = new THREE.Mesh(windshieldGeo, glassWindshieldMat);
      windshield.position.set(0, 0.62, 0.58);
      windshield.rotation.x = -0.15;
      rickshawGroup.add(windshield);

      const wiperGeo = new THREE.BoxGeometry(0.015, 0.3, 0.01);
      geometries.push(wiperGeo);
      const wiper = new THREE.Mesh(wiperGeo, chassisSteelMat);
      wiper.position.set(0, 0.62, 0.6);
      wiper.rotation.z = -0.4;
      wiper.rotation.x = -0.15;
      rickshawGroup.add(wiper);

      // J. Rounded Roof / Canvas Canopy
      const roofGeo = new THREE.BoxGeometry(1.08, 0.08, 1.95);
      geometries.push(roofGeo);
      const roof = new THREE.Mesh(roofGeo, blackCanopyMat);
      roof.position.set(0, 0.84, -0.22);
      roof.castShadow = true;
      rickshawGroup.add(roof);

      // K. Interior Seats
      const driverSeatGeo = new THREE.BoxGeometry(0.38, 0.18, 0.35);
      geometries.push(driverSeatGeo);
      const driverSeat = new THREE.Mesh(driverSeatGeo, seatLeatherMat);
      driverSeat.position.set(0, -0.1, 0.15);
      driverSeat.castShadow = true;
      rickshawGroup.add(driverSeat);

      const passengerSeatGeo = new THREE.BoxGeometry(0.98, 0.18, 0.42);
      geometries.push(passengerSeatGeo);
      const passengerSeat = new THREE.Mesh(passengerSeatGeo, seatLeatherMat);
      passengerSeat.position.set(0, -0.1, -0.65);
      passengerSeat.castShadow = true;
      rickshawGroup.add(passengerSeat);

      const passengerBackrestGeo = new THREE.BoxGeometry(0.98, 0.42, 0.06);
      geometries.push(passengerBackrestGeo);
      const passengerBackrest = new THREE.Mesh(passengerBackrestGeo, seatLeatherMat);
      passengerBackrest.position.set(0, 0.2, -0.87);
      passengerBackrest.castShadow = true;
      rickshawGroup.add(passengerBackrest);

      // L. Wheels Setup (1 Front, 2 Rear)
      const tyreGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.15, 16);
      tyreGeo.rotateZ(Math.PI / 2);
      geometries.push(tyreGeo);

      const rimGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.16, 12);
      rimGeo.rotateZ(Math.PI / 2);
      geometries.push(rimGeo);

      // Front Wheel
      const frontWheelGroup = new THREE.Group();
      const frontTyre = new THREE.Mesh(tyreGeo, tyreRubberMat);
      const frontRim = new THREE.Mesh(rimGeo, chromeRimMat);
      frontWheelGroup.add(frontTyre);
      frontWheelGroup.add(frontRim);
      frontWheelGroup.position.set(0, -0.58, 0.85);
      frontWheelGroup.castShadow = true;
      rickshawGroup.add(frontWheelGroup);

      // Rear Wheel Left
      const rearWheelLeftGroup = new THREE.Group();
      const rearTyreLeft = new THREE.Mesh(tyreGeo, tyreRubberMat);
      const rearRimLeft = new THREE.Mesh(rimGeo, chromeRimMat);
      rearWheelLeftGroup.add(rearTyreLeft);
      rearWheelLeftGroup.add(rearRimLeft);
      rearWheelLeftGroup.position.set(-0.54, -0.58, -0.6);
      rearWheelLeftGroup.castShadow = true;
      rickshawGroup.add(rearWheelLeftGroup);

      // Rear Wheel Right
      const rearWheelRightGroup = new THREE.Group();
      const rearTyreRight = new THREE.Mesh(tyreGeo, tyreRubberMat);
      const rearRimRight = new THREE.Mesh(rimGeo, chromeRimMat);
      rearWheelRightGroup.add(rearTyreRight);
      rearWheelRightGroup.add(rearRimRight);
      rearWheelRightGroup.position.set(0.54, -0.58, -0.6);
      rearWheelRightGroup.castShadow = true;
      rickshawGroup.add(rearWheelRightGroup);

      // Axle
      const axleGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.0, 8);
      axleGeo.rotateZ(Math.PI / 2);
      geometries.push(axleGeo);
      const axle = new THREE.Mesh(axleGeo, steelPillarsMat);
      axle.position.set(0, -0.58, -0.6);
      rickshawGroup.add(axle);

      // M. Double Front Headlights
      const headlightGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.04, 12);
      headlightGeo.rotateX(Math.PI / 2);
      geometries.push(headlightGeo);

      const headlightLeft = new THREE.Mesh(headlightGeo, headlightGlassMat);
      headlightLeft.position.set(-0.25, -0.05, 0.95);
      rickshawGroup.add(headlightLeft);

      const headlightRight = headlightLeft.clone();
      headlightRight.position.x = 0.25;
      rickshawGroup.add(headlightRight);

      // N. Rear Tail Lights
      const tailLightGeo = new THREE.BoxGeometry(0.12, 0.06, 0.02);
      geometries.push(tailLightGeo);
      
      const tailLightLeft = new THREE.Mesh(tailLightGeo, tailLightMat);
      tailLightLeft.position.set(-0.35, -0.22, -0.95);
      rickshawGroup.add(tailLightLeft);

      const tailLightRight = tailLightLeft.clone();
      tailLightRight.position.x = 0.35;
      rickshawGroup.add(tailLightRight);

      // Offset
      rickshawGroup.position.y = 0.12;
      scene.add(rickshawGroup);

      // 5. Floor Circle Shadow
      const floorShadowGeo = new THREE.RingGeometry(0.01, 1.2, 32);
      floorShadowGeo.rotateX(-Math.PI / 2);
      geometries.push(floorShadowGeo);
      const floorShadow = new THREE.Mesh(floorShadowGeo, floorShadowMat);
      floorShadow.position.y = -0.58;
      scene.add(floorShadow);

      // 6. Interactive Drag Event Handlers
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };
      let lastInteractionTime = 0;

      const handleStart = (clientX: number, clientY: number) => {
        isDragging = true;
        previousMousePosition = { x: clientX, y: clientY };
        lastInteractionTime = Date.now();
      };

      const handleMove = (clientX: number, clientY: number) => {
        if (!isDragging) return;

        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        rickshawGroup.rotation.y += deltaX * 0.008;

        const currentX = rickshawGroup.rotation.x + deltaY * 0.008;
        rickshawGroup.rotation.x = Math.max(-0.25, Math.min(0.4, currentX));

        previousMousePosition = { x: clientX, y: clientY };
        lastInteractionTime = Date.now();
      };

      const handleEnd = () => {
        isDragging = false;
      };

      const onMouseDown = (e: MouseEvent) => {
        handleStart(e.clientX, e.clientY);
      };

      const onMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX, e.clientY);
      };

      const onMouseUp = () => {
        handleEnd();
      };

      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          handleStart(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          e.preventDefault();
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      const onTouchEnd = () => {
        handleEnd();
      };

      container.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      container.addEventListener("touchstart", onTouchStart, { passive: false });
      container.addEventListener("touchmove", onTouchMove, { passive: false });
      container.addEventListener("touchend", onTouchEnd);

      rickshawGroup.rotation.y = 0.55;

      // 7. ResizeObserver (Ensures layout size updates container instantly)
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width: newWidth, height: newHeight } = entry.contentRect;
          if (newWidth > 0 && newHeight > 0) {
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer?.setSize(newWidth, newHeight);
          }
        }
      });
      resizeObserver.observe(container);

      // 8. Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Spin wheels
        frontWheelGroup.rotation.x = elapsedTime * 4.5;
        rearWheelLeftGroup.rotation.x = elapsedTime * 4.5;
        rearWheelRightGroup.rotation.x = elapsedTime * 4.5;

        // Suspension bounce
        rickshawGroup.position.y = 0.12 + Math.sin(elapsedTime * 2.2) * 0.025;

        // Auto rotation
        const timeSinceInteract = Date.now() - lastInteractionTime;
        if (!isDragging && timeSinceInteract > 2200) {
          rickshawGroup.rotation.y += 0.0055;
          rickshawGroup.rotation.x += (0.08 - rickshawGroup.rotation.x) * 0.05;
        }

        renderer?.render(scene, camera);
      };

      animate();

      // Return cleanup handler
      return () => {
        cancelAnimationFrame(animationId!);
        resizeObserver?.disconnect();
        
        container.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);

        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);

        if (container && renderer?.domElement) {
          container.removeChild(renderer.domElement);
        }

        // Clean memory
        geometries.forEach((g) => g.dispose());
        materials.forEach((m) => m.dispose());
        renderer?.dispose();
      };

    } catch (error) {
      console.error("Three.js initialization error:", error);
      setWebglError(true);
    }
  }, [mounted]);

  // Server-side loading placeholder
  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[350px] bg-zinc-950/20 animate-pulse flex items-center justify-center text-xs text-zinc-500 font-mono tracking-widest">
        INITIALIZING 3D WEBGL...
      </div>
    );
  }

  // Fallback to high-quality realistic image on error
  if (webglError) {
    return (
      <div className="w-full h-full min-h-[350px] relative rounded-2xl overflow-hidden bg-neutral-900 group">
        <img
          src="/piaggio_ape.png"
          alt="Ajith Auto Mobiles Piaggio Ape Rickshaw"
          className="w-full h-full object-cover select-none"
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[350px] relative select-none cursor-grab active:cursor-grabbing"
    />
  );
}
