"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Header from "./Header";
import SideMenuItem from "./SideMenuItem";
import apps from "../projects_apps";
import websites from "../projects_websites";
import cc from "../projects_cc";
import research from "../projects_research";
import P_Card from "./P_Card";
import { paragraphs } from "../about.js";
import WavyText from "./WavyText";
import Experience from "./Experience";

import { formatType } from "../utils/formatType";

export default function Test() {
  return (
    <>
      <Header backBtn={false} />
      <section>
        <div className="container px-4 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-12 gap:12 lg:gap-4 2xl:gap-24">
            <div className="lg:col-span-3 flex flex-col gap-6 lg:z-20 lg:gap-12 lg:-mt-16 lg:sticky self-start lg:top-8 box-border">
              <div>
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Aysenur Onaran profile img"
                    className="w-full h-full object-cover object-left-top scale-250 origin-[45%_55%]"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <h1 className="font-semibold text-4xl">Ayşenur Onaran</h1>
                  <p className="text-[15px] 2xl:text-md text-gray-500">
                    <span className="text-[#192de4] font-medium">
                      Designer / Developer.
                    </span>{" "}
                    Creating digital experiences through design, code, and
                    experimentation.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                <SideMenuItem
                  name="Selected Projects"
                  sectionId="selected_projects"
                />
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
            <div className="lg:col-start-5 lg:col-end-13 flex flex-col gap-16 lg:gap-40 pt-12 -pb-40">
              <div
                id="selected_projects"
                className="flex flex-col gap-8 lg:gap-12"
              >
                <div id="projects_websites" className="flex flex-col gap-2">
                  <Link
                    href="/projects#websites"
                    className="group text-md text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Websites{" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {websites
                    .filter((website) => website.id == 1)
                    .map((website) => (
                      <P_Card
                        key={website.id}
                        data={website}
                        chipsVisible={true}
                      />
                    ))}
                </div>
                <div id="projects_cc" className="flex flex-col gap-2">
                  <Link
                    href="/projects#creative-coding"
                    className="group text-md text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Creative Coding{" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {cc
                    .filter((c) => c.id == 1)
                    .map((c) => (
                      <P_Card key={c.id} data={c} chipsVisible={true} />
                    ))}
                </div>
                <div id="projects_webapps" className="flex flex-col gap-2">
                  <Link
                    href="/projects#web-apps"
                    className="group text-md text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Web Apps{" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {apps
                    .filter((app) => app.id == 2)
                    .map((app) => (
                      <P_Card key={app.id} data={app} chipsVisible={true} />
                    ))}
                </div>
                <div id="projects_research" className="flex flex-col gap-2">
                  <Link
                    href="/projects#research"
                    className="group text-md text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Research{" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {research
                    .filter((r) => r.id == 1)
                    .map((r) => (
                      <P_Card key={r.id} data={r} chipsVisible={true} />
                    ))}
                </div>
                <Link
                  href={`/projects`}
                  passHref
                  className="group text-[#192de4] hover:text-red-600 underline underline-offset-6 text-sm font-bold transition-all duration-200"
                >
                  See All Projects{" "}
                  <i className="fa-solid fa-arrow-right text-xs pl-1 group-hover:pl-2 transition-all duration-200"></i>
                </Link>
              </div>
              <div id="experience" className="flex flex-col gap-16 lg:pr-24">
                <h2 className="text-2xl -mb-12 lg:hidden">Experience</h2>
                <Experience />
              </div>
              <div id="about" className="flex flex-col gap-16 lg:pr-24">
                <h2 className="text-2xl -mb-12 lg:hidden">About</h2>
                <p className="text-gray-500 text-md/relaxed">
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
              <div className="lg:-mt-24 border-t-1 pt-18 border-gray-400">
                <Link href={"mailto:contact@aysenuronaran.com"} target="_blank">
                  <WavyText className="text-6xl transition-all duration-300 hover:text-[#192de4]">
                    Let's talk
                  </WavyText>
                </Link>
                <p className="mt-20 pb-12 text-sm text-gray-500">
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
