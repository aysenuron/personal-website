import React from "react";
import Link from "next/link";

export default function SideMenuItem({ name, link }) {
  return (
    <Link href={link} target="_blank">
      <div className="flex gap-2 items-center group hover:cursor-pointer">
        <div className="bg-black mt-0.5 w-6 h-[1px] group-hover:w-16 group-hover:bg-red-600 transition-all duration-200"></div>
        <p className="group-hover:font-semibold transition-all duration-200 text-md text-gray-500 active:text-red-600 group-hover:text-red-600">
          {name}
        </p>
      </div>
    </Link>
  );
}
