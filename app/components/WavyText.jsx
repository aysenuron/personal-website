"use client";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({
  children,
  className = "",
  startDelay = 1500,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // First, ensure fonts are loaded
    document.fonts.ready.then(() => {
      // Then add your custom delay before starting the animation
      const timer = setTimeout(() => {
        if (!containerRef.current) return;
        const { chars } = splitText(
          containerRef.current.querySelector(".wavy-content")
        );

        containerRef.current.style.visibility = "visible";
        const staggerDelay = 0.15;
        animate(
          chars,
          { y: [-10, 10] },
          {
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 2,
            delay: stagger(staggerDelay, {
              startDelay: -staggerDelay * chars.length,
            }),
          }
        );
      }, startDelay);

      // Clean up the timer if component unmounts
      return () => clearTimeout(timer);
    });
  }, [startDelay]);

  return (
    <span className={`wavy-container ${className}`} ref={containerRef}>
      <span className="wavy-content">{children}</span>
      <Stylesheet />
    </span>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .wavy-container {
        display: inline-block;
        visibility: hidden;
      }
      .split-char {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
