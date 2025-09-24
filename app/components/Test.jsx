"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import SideMenuItem from "./SideMenuItem";
import websites from "../websites";
import P_Card from "./P_Card";

export default function Test() {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-3 flex flex-col gap-6 pt-12 lg:gap-12 sticky self-start top-16 box-border">
            <div>
              <div className="w-40 rounded-full overflow-hidden">
                <img src="/profile.png" alt="Aysenur Onaran profile img" />
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <h1 className="font-semibold text-4xl">Ayşenur Onaran</h1>
                <p className="text-md text-gray-400">
                  <span className="text-[#192de4] font-medium">
                    Designer / Developer.
                  </span>{" "}
                  Architect turned developer, crafting digital experiences with
                  curiosity, care, and a systems mindset—always learning along
                  the way.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              <SideMenuItem name="Projects" sectionId="projects" />
              <SideMenuItem name="Experience" sectionId="experience" />
              <SideMenuItem name="About" sectionId="about" />
            </div>
            <div>
              <div className="flex gap-2 text-lg items-center text-gray-500 cursor-pointer fixed bottom-12">
                <i className="fab fa-github hover:text-[#192de4]"></i>
                <i className="fab fa-linkedin-in hover:text-[#192de4]"></i>
                <i className="fab fa-instagram hover:text-[#192de4]"></i>
              </div>
            </div>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-64 py-12">
            <div id="projects" className="flex flex-col gap-20">
              {websites.map((website) => (
                <P_Card key={website.id} data={website} />
              ))}
            </div>
            <div id="experience" className="flex flex-col gap-20">
              {websites.map((website) => (
                <P_Card key={website.id} data={website} />
              ))}
            </div>
            <div id="about" className="flex flex-col gap-20">
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
