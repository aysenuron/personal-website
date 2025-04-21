"use client";
import { motion } from "framer-motion";
import React from "react";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

const animations = {
  paragraph: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: (delay = 0.2) => ({
      delay,
      duration: 0.3,
      ease: "easeInOut",
    }),
  },
  image: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      delay: 0.2,
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 5,
      mass: 1,
    },
  },
};

function AnimatedParagraph({ children, delay = 0.2, className = "" }) {
  return (
    <motion.span
      initial={animations.paragraph.initial}
      whileInView={animations.paragraph.whileInView}
      viewport={animations.paragraph.viewport}
      transition={animations.paragraph.transition(delay)}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export default function AboutMe() {
  const paragraphs = [
    {
      content:
        "Architect turned developer, crafting digital experiences with curiosity, care, and a systems mindset—always learning along the way.",
      className: "text-gray-900 font-medium",
      delay: 0.4,
    },
    {
      content: (
        <>
          I have both bachelor's and master's degrees in architecture, but I
          found my true calling in the digital world. For three years, I worked
          at Elevate Health Technologies as a{" "}
          <span className="text-gray-900">
            digital designer and Web developer.
          </span>
        </>
      ),
      delay: 0.5,
    },
    {
      content: (
        <>
          Along the way, I've taught myself frontend development and started
          taking on freelance projects building websites for clients. I see
          myself as a generalist.
          <span className="text-gray-900"> My background in architecture </span>
          gives me a different way to look at digital problems.
        </>
      ),
      delay: 0.6,
    },
    {
      content: (
        <>
          When I face a challenge, my philosophy is simple: "I'll figure it
          out." And so far, I always have. I don't believe in putting myself in
          one box.{" "}
          <span className="text-gray-900">
            I learn quickly and adapt to new situations.
          </span>{" "}
          Each project teaches me something new that I can use in the next one.
        </>
      ),
      delay: 0.7,
    },
    {
      content:
        "Outside of work, I enjoy biking through city streets, trying new recipes in the kitchen, hiking whenever I can get out of town, and taking photos of pelicans (yes, specifically pelicans). Simple joys that fuel good work.",
      delay: 0.8,
    },
    {
      content:
        "Let's work together to create something that looks good and works.",
      delay: 0.9,
    },
  ];

  return (
    <section className="container mx-auto py-12 lg:py-4 px-4 lg:px-0">
      <div className="relative grid lg:grid-cols-3 gap-5 lg:gap-10">
        <motion.div
          {...animations.image}
          className="hidden lg:sticky lg:top-0 lg:h-full xl:h-2/3 lg:flex justify-end items-center"
        >
          <img
            className="h-full lg:pt-16"
            src="/about-me.png"
            alt="Ayşenur Onaran picture"
          />
        </motion.div>
        <div className="lg:col-span-2">
          <div>
            <motion.h2
              {...animations.paragraph}
              className="degular text-2xl lg:text-4xl font-medium mb-2 lg:mb-5"
            >
              About me <span className="text-lg lg:text-2xl">🤙🏻</span>
            </motion.h2>
            <p className="text-gray-400 text-md">
              {paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <>
                      <br />
                      <br />{" "}
                    </>
                  )}
                  <AnimatedParagraph
                    delay={paragraph.delay}
                    className={paragraph.className}
                  >
                    {paragraph.content}
                  </AnimatedParagraph>
                </React.Fragment>
              ))}
            </p>
          </div>
          <div>
            <motion.h3
              {...animations.paragraph}
              className="degular text-xl mt-9 lg:text-2xl font-medium mb-2 lg:mb-5"
            >
              Skills <span className="text-lg lg:text-2xl">🚲</span>
            </motion.h3>
            <motion.div {...animations.paragraph}>
              <ChipsContainer selectedTools={tools} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
