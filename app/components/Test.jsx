"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Header from "./Header";
import SideMenuItem from "./SideMenuItem";
import websites from "../websites";
import P_Card from "./P_Card";
import { paragraphs } from "../about.js";
import WavyText from "./WavyText";
import Experience from "./Experience";

export default function Test() {
  return (
    <>
      <Header backBtn={false} />
      <section>
        <div className="container px-4 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-12 gap:12 lg:gap-18 2xl:gap-24">
            <div className="lg:col-span-3 flex flex-col gap-6 lg:z-20 lg:gap-12 lg:-mt-16 lg:sticky self-start lg:top-8 box-border">
              <div>
                <div className="w-40 rounded-full overflow-hidden">
                  <img src="/profile.png" alt="Aysenur Onaran profile img" />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <h1 className="font-semibold text-4xl">Ayşenur Onaran</h1>
                  <p className="text-[15px] 2xl:text-md text-gray-400 pr-4">
                    <span className="text-[#192de4] font-medium">
                      Designer / Developer.
                    </span>{" "}
                    Architect turned developer, crafting digital experiences
                    with curiosity, care, and a systems mindset—always learning
                    along the way.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                <SideMenuItem name="Projects" sectionId="projects" />
                <SideMenuItem name="Experience" sectionId="experience" />
                <SideMenuItem name="About" sectionId="about" />
              </div>
              <div>
                <div className="flex gap-2 text-lg items-center text-gray-500 cursor-pointer lg:fixed bottom-12">
                  <i className="fab fa-github hover:text-[#192de4]"></i>
                  <i className="fab fa-linkedin-in hover:text-[#192de4]"></i>
                  <i className="fab fa-instagram hover:text-[#192de4]"></i>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-20 lg:gap-40 pt-12 -pb-40">
              <div id="projects" className="flex flex-col gap-8 lg:gap-20">
                <h2 className="text-2xl -mb-12 lg:hidden">Projects</h2>
                {websites.map((website) => (
                  <P_Card key={website.id} data={website} />
                ))}
              </div>
              <div id="experience" className="flex flex-col gap-20 pr-24">
                <h2 className="text-2xl -mb-12 lg:hidden">Experience</h2>
                <Experience />
              </div>
              <div id="about" className="flex flex-col gap-20 pr-24">
                <h2 className="text-2xl -mb-12 lg:hidden">About</h2>
                <p className="text-gray-700 text-md/relaxed">
                  {paragraphs.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                      <span className={paragraph.className}>
                        {paragraph.content}
                      </span>
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="-mt-24">
                <Link href={"mailto:contact@aysenuronaran.com"} target="_blank">
                  <WavyText className="text-6xl transition-all duration-300 hover:text-[#192de4]">
                    Let's talk
                  </WavyText>
                </Link>
                <p className="mt-20 pb-12 text-sm text-gray-400">
                  This website is built with Next.js and Tailwind CSS, deployed
                  with Vercel. By moi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
