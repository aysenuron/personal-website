"use client";
import React from "react";
import Link from "next/link";

import Header from "./Header";
import SideMenuItem from "./SideMenuItem";
import apps from "../projects_apps";
import cc from "../projects_cc";
import research from "../projects_research";
import P_Card from "./P_Card";
import { paragraphs } from "../about.js";
import WavyText from "./WavyText";
import Experience from "./Experience";
import Footer from "./Footer";

import { useCookieConsent } from "../hooks/useCookieConsent";

export default function Test() {
  const hasConsent = useCookieConsent();

  return (
    <>
      <Header backBtn={false} />
      <section>
        <div className="container px-4 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-12 gap:12 lg:gap-4 2xl:gap-24">
            <div className="lg:col-span-3 flex flex-col gap-8 lg:z-20 lg:gap-12 lg:-mt-16 lg:sticky self-start lg:top-8 box-border">
              <div>
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Aysenur Onaran profile img"
                    className="w-full h-full object-cover object-left-top scale-250 origin-[45%_55%]"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <h1 className="font-semibold text-4xl">Ayşenur Onaran</h1>
                  <p className="text-[16px] 2xl:text-md text-[#192de4] font-medium">
                    Designer / Developer
                  </p>
                  <div className="flex gap-2 text-lg items-center text-gray-500 cursor-pointer transition-all duration-200">
                    <Link
                      href={"https://www.linkedin.com/in/onaranaysenur/"}
                      target="blank"
                    >
                      <i className="fab fa-linkedin-in hover:text-[#192de4]"></i>
                    </Link>
                    <Link href={"https://github.com/aysenuron"} target="blank">
                      <i className="fab fa-github hover:text-[#192de4]"></i>
                    </Link>
                  </div>
                  <p className="text-[14px] 2xl:text-md text-gray-500">
                    This website is built with Next.js and Tailwind CSS,
                    deployed with Vercel. By moi.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                <SideMenuItem name="About" sectionId="about" />
                <SideMenuItem
                  name="Selected Projects"
                  sectionId="selected_projects"
                />
                <SideMenuItem name="Experience" sectionId="experience" />
              </div>
              <div>
                {hasConsent && (
                  <div className="lg:fixed bottom-6">
                    <button
                      onClick={() => {
                        localStorage.removeItem("cookieConsent");
                        window.location.reload();
                      }}
                      className="hover:bg-[#192de4] mt-2 text-white py-1 px-2 rounded-full cursor-pointer text-xs bg-gray-400 transition-all duration-200"
                    >
                      <i className="fa-solid fa-cookie-bite pr-4"></i>
                      Cookie Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-start-5 lg:col-end-13 flex flex-col gap-16 lg:gap-28 2xl:gap-40 pt-4 -pb-40">
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
              <div
                id="selected_projects"
                className="flex flex-col gap-8 lg:gap-12"
              >
                <div id="projects_webapps" className="flex flex-col gap-8">
                  <Link
                    href="/projects#web-apps"
                    className="group font-bold text-sm text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Web Design & Development (6){" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {apps
                    .filter((app) => app.id == 1 || app.id == 2)
                    .map((app) => (
                      <P_Card
                        key={app.id}
                        data={app}
                        chipsVisible={true}
                        className={`${app.id == 1 ? "mb-4" : ""}`}
                      />
                    ))}
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div id="projects_research" className="flex flex-col gap-4">
                  <Link
                    href="/projects#research"
                    className="group font-bold text-sm text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Research (3){" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {research
                    .filter((r) => r.id == 1)
                    .map((r) => (
                      <P_Card key={r.id} data={r} chipsVisible={false} />
                    ))}
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div id="projects_cc" className="flex flex-col gap-4">
                  <Link
                    href="/projects#creative-coding"
                    className="group font-bold text-sm text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    Creative Coding (1){" "}
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  </Link>
                  {cc
                    .filter((c) => c.id == 1)
                    .map((c) => (
                      <P_Card key={c.id} data={c} chipsVisible={true} />
                    ))}
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <Link
                  href={`/projects`}
                  passHref
                  className="group text-[#192de4] hover:text-red-600 underline underline-offset-6 text-sm font-bold transition-all duration-200"
                >
                  See All Projects (10){" "}
                  <i className="fa-solid fa-arrow-right text-xs pl-1 group-hover:pl-2 transition-all duration-200"></i>
                </Link>
              </div>
              <div id="experience" className="flex flex-col gap-16 lg:pr-24">
                <h2 className="text-2xl -mb-12 lg:hidden">Experience</h2>
                <Experience />
              </div>

              <div className="lg:-mt-12 border-t-1 pt-18 border-gray-400">
                <Link href={"mailto:contact@aysenuronaran.com"} target="_blank">
                  <WavyText className="text-6xl transition-all duration-300 hover:text-[#192de4]">
                    Let's talk
                  </WavyText>
                </Link>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
