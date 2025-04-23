"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import websites from "../websites";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };

export default function SelectedWorks() {
  const selectedWorksRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const selectedWorks = selectedWorksRef.current;

    ScrollTrigger.create({
      trigger: selectedWorks,
      start: "top top+=40",
      end: "bottom top",
      onEnter: () => setIsCompact(true),
      onLeaveBack: () => setIsCompact(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={selectedWorksRef} className="bg-gray-100">
      <div className="container mx-auto mt-2 px-4 lg:px-0 mb-5 lg:mb-10">
        <motion.h2
          initial={initial}
          animate={animate}
          transition={{
            delay: 3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="degular text-2xl lg:text-4xl font-medium "
        >
          Selected Works <span className="text-lg lg:text-2xl">👇🏻</span>
        </motion.h2>
      </div>
      <div
        className={`bg-white lg:p-8 space-y-8 lg:space-y-12 transition-all duration-2000 ${
          isCompact
            ? "lg:mx-16 2xl:mx-128 p-4 rounded-4xl mt-0"
            : "mx-0 2xl:mt-24 mt-32"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-4 lg:gap-10">
          {websites.map((website) => (
            <ProjectCard key={website.id} data={website} />
          ))}
        </div>
      </div>
    </section>
  );
}
