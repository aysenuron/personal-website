"use client";
import { motion } from "framer-motion";
import DropProfileImage from "./DropProfileImage";
import React from "react";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };

export default function Hero() {
  // const heroRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom top",
      onEnter: () => setIsCompact(true),
      onLeaveBack: () => setIsCompact(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`bg-white transition-all duration-1500 ${
        isCompact
          ? "lg:mx-20 2xl:mx-60 mx-4 lg:mt-56 mt-20 mb-8 lg:px-10 p-2 lg:py-6 rounded-4xl"
          : "mx-0 mb-8 rounded-none "
      }`}
    >
      <div className="container py-24 px-4 lg:px-0 lg:py-6 lg:pt-20 2xl:pt-60 2xl:pb-30 h-5/6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-start-2 lg:col-end-4">
            <div className="flex items-end gap-6 lg:gap-4">
              <motion.h1
                initial={initial}
                animate={animate}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="degular font-medium text-4xl lg:text-7xl mb-4"
              >
                Hi, I'm Ay
                <span className="text-[33px] lg:text-[64px]">ş</span>
                enur
              </motion.h1>
              <DropProfileImage
                className={"w-20 lg:w-28 rounded-full overflow-hidden"}
                src={"/profile.png"}
                alt={"Profile picture"}
              />
            </div>
            <motion.p
              initial={initial}
              animate={animate}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="degular mb-8 text-[#999999] font-medium text-2xl md:text-4xl lg:text-5xl"
            >
              Web Developer & Designer
            </motion.p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-4 lg:gap-6 text-md lg:text-lg font-medium">
          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="lg:col-start-2 lg:col-end-4 lg:row-start-1 flex gap-2"
          >
            <p className="hidden lg:block">Contact me</p>
            <span className="hidden lg:block">👉🏻</span>
            <a
              className="underline underline-offset-2 cursor-pointer hover:text-orange-500 transition duration-200 ease-in-out"
              href="mailto:contact@aysenuronaran.com"
            >
              contact@aysenuronaran.com
            </a>
          </motion.div>
          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              delay: 2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="lg:col-start-1 lg:col-end-2 lg:row-start-1 items-center flex gap-3 text-[#999999]"
          >
            <p className="hidden lg:block">Follow me</p>
            <span className="hidden lg:block">👉🏻</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/onaranaysenur/"
                target="_blank"
              >
                <img
                  className="w-5 h-auto"
                  src="/logos/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/aysenuron" target="_blank">
                <img
                  className="w-5 h-auto"
                  src="/logos/github.png"
                  alt="github"
                />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-52 2xl:mt-100">
          <div className="lg:col-start-2 lg:col-end-3">
            <motion.p
              initial={initial}
              animate={animate}
              transition={{
                delay: 2.5,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="text-sm lg:text-md"
            >
              This website is{" "}
              <a href="https://github.com/aysenuron/personal-website">
                <span className="underline underline-offset-2">
                  open source.
                </span>
              </a>{" "}
              Designed in Figma, built with Next.js and Tailwind CSS, deployed
              with Vercel.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
