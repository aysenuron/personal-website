"use client";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({
  children,
  className = "",
  startDelay = 500,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;

      // Don’t split twice
      if (el.querySelector(".split-char")) {
        console.warn("Already split, skipping splitText");
        el.style.visibility = "visible";
        return;
      }

      const { chars } = splitText(el);
      el.style.visibility = "visible";

      if (!chars || chars.length === 0) return;

      animate(
        chars,
        { y: [-10, 10] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(0.15, {
            startDelay: -0.15 * chars.length,
          }),
        }
      );
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <span
      ref={containerRef}
      className={`wavy-container ${className}`}
      style={{ visibility: "hidden", display: "inline-block" }}
    >
      {children}
    </span>
  );
}
