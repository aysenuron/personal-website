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
          className={`forma hover:text-blue-500 text-gray-500 duration-200 ease-in-out transition `}
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
      <div className=" container h-fit mx-auto mt-6 flex justify-between items-center">
        <div className="w-8 h-8 rounded-full bg-red-600 hover:bg-blue-700 cursor-pointer">
          <a href="/"></a>
        </div>
        <div className="hidden md:flex md:items-center md:gap-6">
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
          } bg-white z-10 left-0 right-0 p-8 top-14 w-full h-[100vh]`}
        >
          <Links />
        </div>
      </div>
    </header>
  );
}
