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
    <header className="px-4 md:px-0">
      <div className="bg-white container h-fit mx-auto py-4 px-8 my-4 rounded-3xl flex justify-between items-center">
        <div>
          <a href="/">
            <span className="degular font-medium text-xl lg:text-3xl duration-200 ease-in-out transition hover:text-orange-500">
              Ay<span className="text-[18px] lg:text-[27px]">ş</span>enur Onaran
            </span>
          </a>
        </div>
        <div className="hidden md:flex md:items-center md:gap-8">
          <Links />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="forma text-md underline">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div
          className={`md:hidden flex flex-col gap-6 ${
            !menuOpen ? "hidden" : "fixed"
          } bg-white z-10 left-0 right-0 p-8 top-24 w-full h-[100vh]`}
        >
          <Links />
        </div>
      </div>
    </header>
  );
}
