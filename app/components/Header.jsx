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
    "Works",
    "Playground",
    "Testimonials",
    "Download Resume",
    "Send me an email",
  ];

  function Links() {
    return linkNames.map((link, index) => (
      <Link
        key={link}
        className={`forma hover:text-orange-500 duration-200 ease-in-out transition ${
          index === linkNames.length - 1 &&
          "bg-gray-900 px-4 py-2 text-white rounded-2xl drop-shadow-xl font-medium hover:bg-gray-100 hover:drop-shadow-none"
        }`}
        href={`${
          index === linkNames.length - 1
            ? "mailto:contact@aysenuronaran.com"
            : "/" + link
        }`}
      >
        {link}
      </Link>
    ));
  }

  return (
    <header className="container relative mx-auto px-4 lg:px-0 py-4 lg:py-9 flex justify-between items-center">
      <div>
        <a href="/">
          <span className="degular font-medium text-xl lg:text-3xl duration-200 ease-in-out transition hover:text-orange-500">
            Ay<span className="text-[18px] lg:text-[27px]">ş</span>enur Onaran
          </span>
        </a>
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-8">
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
