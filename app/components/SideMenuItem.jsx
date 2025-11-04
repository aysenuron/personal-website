import React from "react";

export default function SideMenuItem({ name, sectionId, isActive }) {
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
            ? "bg-red-600 w-16"
            : "bg-black w-10 group-hover:w-16 group-hover:bg-red-600"
        }`}
      ></div>
      <p
        className={`transition-all duration-200 text-md ${
          isActive
            ? "font-semibold text-red-500"
            : "text-gray-500 group-hover:font-semibold group-hover:text-red-600"
        } active:text-red-600`}
      >
        {name}
      </p>
    </div>
  );
}
