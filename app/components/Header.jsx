"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  }

  const linkNames = [
    "About",
    "Selected Works",
    "Playground",
    "Testimonials",
    "Download Resume",
    "Send me an email",
  ];

  function Links() {
    return linkNames.map((link) => (
      <Link key={link} className="forma hover:text-gray-500" href="/projects">
        {link}
      </Link>
    ));
  }

  return (
    <header className="container relative mx-auto px-4 lg:px-0 py-4 lg:py-9 flex justify-between items-center">
      <div>
        <a href="/">
          <span className="degular text-xl lg:text-3xl">Ayşenur Onaran</span>
        </a>
      </div>
      <div className="hidden lg:flex lg:gap-8">
        <Links />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="forma text-md underline">
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`lg:hidden flex flex-col gap-6 ${
          !menuOpen && "hidden"
        } bg-white z-10 absolute top-20 w-full h-[80vh]`}
      >
        <Links />
      </div>
    </header>
  );
}
