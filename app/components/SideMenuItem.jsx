import React, { useState, useEffect } from "react";

export default function SideMenuItem({ name, sectionId }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(
          `${sectionId}: ${entry.isIntersecting ? "ACTIVE" : "inactive"}`
        );
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Observing element: ${sectionId}`, element);
      observer.observe(element);
    } else {
      console.log(`Element not found: ${sectionId}`);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId]);

  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className="flex gap-2 items-center group hover:cursor-pointer"
    >
      <div
        className={`mt-0.5 h-[1px] transition-all duration-200 ${
          isActive
            ? "bg-red-500 w-20"
            : "bg-black w-10 group-hover:w-20 group-hover:bg-red-500"
        }`}
      ></div>
      <p
        className={`transition-all duration-200 text-md ${
          isActive
            ? "font-semibold text-red-500"
            : "text-gray-500 group-hover:font-semibold group-hover:text-red-500"
        } active:text-red-500`}
      >
        {name}
      </p>
    </div>
  );
}
