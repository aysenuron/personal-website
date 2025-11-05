import React, { useEffect, useRef, useState } from "react";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu({ items }) {
  const [activeSection, setActiveSection] = useState(
    items?.[0]?.sectionId ?? null
  );
  const observerRef = useRef(null);
  const isClickScrollingRef = useRef(false);
  const ACTIVATION_OFFSET_PX = 200;

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Clean up any old observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Don't update during programmatic scrolling
        if (isClickScrollingRef.current) return;

        // Find all currently intersecting sections
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id,
            top: e.boundingClientRect.top,
            ratio: e.intersectionRatio,
          }));

        if (intersecting.length === 0) return;

        // Pick the section whose top edge is closest to our activation line
        // (which is ACTIVATION_OFFSET_PX from viewport top)
        const closest = intersecting.reduce((prev, curr) => {
          const prevDist = Math.abs(prev.top - ACTIVATION_OFFSET_PX);
          const currDist = Math.abs(curr.top - ACTIVATION_OFFSET_PX);
          return currDist < prevDist ? curr : prev;
        });

        setActiveSection(closest.id);
      },
      {
        root: null,
        rootMargin: `-${ACTIVATION_OFFSET_PX}px 0px -30% 0px`,
        threshold: 0,
      }
    );

    // Observe each section element
    items.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observerRef.current.observe(el);
    });

    // Set initial active section
    setActiveSection(items[0].sectionId);

    return () => observerRef.current && observerRef.current.disconnect();
  }, [items]);

  const handleClick = (e, sectionId) => {
    e.preventDefault();

    const target = document.getElementById(sectionId);
    if (!target) return;

    // Disable observer updates during scroll
    isClickScrollingRef.current = true;

    // Set active immediately
    setActiveSection(sectionId);

    // Calculate scroll position
    const top =
      window.scrollY +
      target.getBoundingClientRect().top -
      ACTIVATION_OFFSET_PX;

    // Smooth scroll
    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // Re-enable observer after scroll completes
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000);
  };

  return (
    <nav className="flex flex-col gap-4">
      {items.map(({ name, sectionId }) => (
        <button
          key={sectionId}
          onClick={(e) => handleClick(e, sectionId)}
          aria-current={activeSection === sectionId ? "true" : "false"}
          className="text-left"
        >
          <SideMenuItem
            name={name}
            sectionId={sectionId}
            isActive={activeSection === sectionId}
          />
        </button>
      ))}
    </nav>
  );
}
