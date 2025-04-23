"use client";
import { motion } from "framer-motion";
import React from "react";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";
import Button from "./Button";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const aboutRef = React.useRef(null);
  const [isCompact, setIsCompact] = React.useState(false);

  React.useEffect(() => {
    const aboutMe = aboutRef.current;

    ScrollTrigger.create({
      trigger: aboutMe,
      start: "top top+=40",
      end: "bottom top",
      onEnter: () => setIsCompact(true),
      onLeaveBack: () => setIsCompact(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

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
          <span className="text-gray-900 font-medium">
            digital designer and web developer.
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
          <span className="text-gray-900 font-medium">
            {" "}
            My background in architecture{" "}
          </span>
          gives me a different way to look at digital problems.
        </>
      ),
      delay: 0.6,
    },
    {
      content: (
        <>
          At Elevate, I designed and developed the company website using Webflow
          while integrating custom JavaScript for enhanced functionality. I
          connected the site with HubSpot for lead generation and implemented
          GA4 and Google Tag Manager to gather actionable insights. My work
          extended to conducting A/B testing to optimize user engagement and
          creating marketing assets that effectively communicate product value.
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
          <span className="text-gray-900 font-medium">
            I learn quickly and adapt to new situations.
          </span>{" "}
          Each project teaches me something new that I can use in the next one.
        </>
      ),
      delay: 0.6,
    },
    {
      content:
        "Outside of work, I enjoy biking through city streets, trying new recipes in the kitchen, hiking whenever I can get out of town, and taking photos of pelicans (yes, specifically pelicans). Simple joys that fuel good work.",
      delay: 0.6,
    },
  ];

  return (
    <section>
      <div
        ref={aboutRef}
        className={`bg-[#E2DACC] p-4 transition-all duration-2000 ${
          isCompact
            ? "lg:p-16 2xl:p-8 p-4 lg:mx-12 2xl:mx-128 mx-4 mt-0 rounded-4xl"
            : "lg:py-40 mx-0 lg:mt-12 rounded-none"
        }`}
      >
        <div className="mx-auto container">
          <div className="relative grid lg:grid-cols-3 gap-4 lg:gap-10">
            <motion.div
              {...animations.image}
              className="hidden lg:sticky lg:top-8 lg:h-100 lg:flex justify-end items-center"
            >
              <img
                className="h-full w-auto"
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
                  About me
                </motion.h2>
                <p className="text-gray-700 text-md/relaxed">
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
              <div className="my-12">
                <Button handleClick={"/aysenurOnaran-CV.pdf"}>
                  Download Resume
                </Button>
              </div>

              <div>
                <motion.h3
                  {...animations.paragraph}
                  className="degular text-xl lg:text-2xl font-medium mb-6"
                >
                  Skills <span className="text-xl lg:text-2xl">🚲</span>
                </motion.h3>
                <motion.div {...animations.paragraph}>
                  <ChipsContainer selectedTools={tools} color={"white"} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
