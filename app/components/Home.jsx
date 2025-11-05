"use client";
import React from "react";
import Link from "next/link";

import Button from "./Button";
import { paragraphs } from "../about.js";
import Footer from "./Footer";

import { useCookieConsent } from "../hooks/useCookieConsent";

export default function Test() {
  const hasConsent = useCookieConsent();

  return (
    <>
      <section>
        <div className="container pt-16 px-4 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-12 gap:12 lg:gap-4 2xl:gap-10">
            <div className="lg:col-span-3 flex flex-col gap-8 lg:z-20 lg:gap-12 lg:-mt-8 box-border">
              <div>
                <div className="w-40 2xl:w-48 h-40 2xl:h-48 rounded-full overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Aysenur Onaran profile img"
                    className="w-full h-full object-cover object-left-top scale-250 origin-[45%_55%]"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <h1 className="font-semibold text-4xl 2xl:text-5xl">
                    Ayşenur Onaran
                  </h1>
                  <p className="text-[16px] 2xl:text-lg text-[#192de4] font-medium">
                    UX Designer / Web Developer
                  </p>
                  <div className="flex gap-2 text-lg 2xl:text-xl items-center text-gray-500 cursor-pointer transition-all duration-200">
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
                  <p className="text-[14px] 2xl:text-[16px] text-gray-700">
                    This website is built with Next.js and Tailwind CSS,
                    deployed with Vercel. By moi.
                  </p>
                </div>
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
            <div className="lg:col-start-5 lg:col-end-13 flex lg:flex-col flex-col-reverse gap-10 mt-12 lg:mt-6">
              <Footer className={"lg:hidden mb-6"} />
              <div id="about" className="flex flex-col gap-16 lg:pr-24">
                <p className="text-gray-700 text-md/relaxed 2xl:text-lg">
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
              <div className="flex gap-4 flex-wrap">
                <Button handleClick={"/projects"} primary={true}>
                  Projects
                </Button>
                <Button handleClick={"/aysenurOnaran-CV.pdf"}>Resume</Button>
                <Button handleClick={"mailto:onaranays@gmail.com"}>
                  Send me an email
                </Button>
              </div>
              <Footer className={"hidden lg:block lg:fixed bottom-8"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
