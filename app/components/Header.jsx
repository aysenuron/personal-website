"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

export default function Header({ backBtn = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  }

  function Links() {
    return (
      <>
        <Link
          className={`hover:text-[#192de4] text-gray-500 duration-200 ease-in-out transition `}
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
    <header className="px-4 md:px-0 sticky top-0 py-4 lg:py-6 bg-white z-10">
      <div
        className={`container h-fit mx-auto flex items-center ${
          backBtn ? "justify-between" : "justify-end"
        }`}
      >
        {/* Back button */}
        <div className={`${backBtn ? "block" : "hidden"}`}>
          <button
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push("/projects");
              }
            }}
            className="text-[#192de4] hover:text-red-600 flex items-center gap-2 cursor-pointer"
          >
            <i className="fas fa-arrow-left"></i>
            Go Back
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          <Links />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-md underline ${
              menuOpen ? "text-red-600" : "text-[#192de4]"
            }`}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div
          className={`md:hidden flex flex-col gap-6 ${
            !menuOpen ? "hidden" : "fixed"
          } bg-white z-10 left-0 right-0 p-8 top-12 w-full h-[100vh]`}
        >
          <Links />
        </div>
      </div>
    </header>
  );
}
