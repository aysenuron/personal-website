import React, { useState, useEffect } from "react";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu({ items }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // invisible horizontal line 40% down the viewport
        // when a section's top crosses this → becomes active
        rootMargin: "-40% 0px 0px 0px",
        threshold: 0,
      }
    );

    items.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="flex flex-col gap-4">
      {items.map(({ name, sectionId }) => (
        <SideMenuItem
          key={sectionId}
          name={name}
          sectionId={sectionId}
          isActive={activeSection === sectionId}
        />
      ))}
    </div>
  );
}
