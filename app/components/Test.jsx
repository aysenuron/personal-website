"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import SideMenuItem from "./SideMenuItem";
import websites from "../websites";
import ProjectCard from "./ProjectCard";
import P_Card from "./P_Card";

export default function Test() {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 flex flex-col gap-6 pt-12 lg:gap-12 sticky self-start top-0 box-border">
            <div>
              <div className="w-40 rounded-full overflow-hidden">
                <img src="/profile.png" alt="Aysenur Onaran profile img" />
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <h1 className="font-semibold text-4xl">Ayşenur Onaran</h1>
                <h2 className="font-medium text-xl text-gray-400">
                  Designer / Developer
                </h2>
                <p className="text-md text-gray-500">
                  Architect turned developer, crafting digital experiences with
                  curiosity, care, and a systems mindset—always learning along
                  the way.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              <SideMenuItem name="Projects" link="#" />
              <SideMenuItem name="Experience" link="#" />
              <SideMenuItem name="About" link="#" />
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <p>socials</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 pt-12">
            <div className="flex flex-col gap-20">
              {websites.map((website) => (
                <P_Card key={website.id} data={website} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
