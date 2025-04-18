"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const DropProfileImage = ({ src, alt, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      // Set initial state - above viewport and transparent
      await controls.set({
        y: -300,
        opacity: 0,
      });

      // Animate drop with spring and fade in
      await controls.start({
        y: 0,
        opacity: 1,
        transition: {
          y: {
            type: "spring",
            stiffness: 100, // Lower for more bounce
            damping: 10, // Lower for more oscillation
            mass: 1, // Mass affects momentum
            velocity: 100, // Initial velocity for more natural drop
          },
          opacity: {
            duration: 0.4, // Fade in duration
            ease: "easeOut", // Smooth fade in
          },
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <motion.div animate={controls} className={className}>
      <img
        src={src}
        alt={alt}
        className="rounded-full w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default DropProfileImage;
