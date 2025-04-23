"use client";
import { motion } from "framer-motion";
import apps from "../apps";
import AppCard from "./AppCard";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Playground() {
  const appContainerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const appContainer = appContainerRef.current;

    ScrollTrigger.create({
      trigger: appContainer,
      start: "top-=80 top",
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
      ref={appContainerRef}
      className="bg-gray-100 mt-10 lg:mt-20 py-10 lg:py-20"
    >
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-6">
          <div className="flex items-center h-full lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="degular  text-2xl lg:text-4xl font-medium"
            >
              Playground 👩🏻‍💻
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.5,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="text-gray-700 text-md lg:col-span-4"
          >
            These projects were developed during my learning journey and for
            personal use. Feel free to explore, use, or adapt any that interest
            you. You can find even more on my GitHub. <br /> <br />
            <span className="text-orange-500 ">
              Feedback is always welcome!
            </span>{" "}
            👉🏻{" "}
            <a
              className="underline-offset-1 hover:text-orange-500 font-medium"
              href="mailto:contact@aysenuronaran.com"
            >
              contact@aysenuronaran.com
            </a>
          </motion.p>
        </div>
      </div>
      <div
        className={`bg-white p-4 lg:p-8 space-y-8 lg:space-y-12 transition-all duration-800 ${
          isCompact
            ? "lg:mx-16 2xl:mx-128 rounded-4xl mt-0"
            : "mx-0 2xl:mt-24 mt-12 lg:mt-20"
        }`}
      >
        <div className="gap-4 container mx-auto lg:gap-10 grid lg:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.id} data={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
