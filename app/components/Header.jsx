"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  }

  function Links() {
    return (
      <>
        <Link
          className={`forma hover:text-orange-500 duration-200 ease-in-out transition `}
          href="/aysenurOnaran-CV.pdf"
          target="_blank"
        >
          Download Resume
        </Link>

        <Button handleClick={"mailto:contact@aysenuronaran.com"}>
          Send me an email
        </Button>
      </>
    );
  }

  return (
    <header className="bg-white container mx-auto px-4 lg:px-0 py-4 flex justify-between items-center">
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
        } bg-white z-10 absolute top-20 w-full h-[100vh]`}
      >
        <Links />
      </div>
    </header>
  );
}
