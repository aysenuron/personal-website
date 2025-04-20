"use client";
import { motion } from "framer-motion";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };

const dropVariants = {
  hidden: {
    y: -500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.2,
      y: {
        delay: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 5,
        mass: 1,
      },
    },
  },
};

export default function AboutMe() {
  return (
    <section className="container mx-auto py-8 px-4 lg:px-0">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 5,
            mass: 1,
          }}
          className="hidden lg:h-full xl:h-2/3 lg:flex justify-end items-center"
        >
          <img
            className="h-full lg:pt-16"
            src="/about-me.png"
            alt="Ayşenur Onaran picture"
          />
        </motion.div>
        <div className="lg:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="degular text-2xl lg:text-4xl font-medium mb-2 lg:mb-5"
          >
            About me <span className="text-lg lg:text-2xl">🤙🏻</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.5,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="text-gray-400 text-md"
          >
            <span className="text-gray-900">
              {" "}
              Architect turned developer, crafting digital experiences with
              curiosity, care, and a systems mindset—always learning along the
              way.
            </span>
            <br />
            <br />I have both bachelor's and master's degrees in architecture,
            but I found my true calling in the digital world. For three years, I
            worked at Elevate Health Technologies as a digital designer and
            Webflow developer. <br />
            <br />
            Along the way, I've taught myself frontend development and started
            taking on freelance projects building websites for clients. I see
            myself as a generalist. My background in architecture gives me a
            different way to look at digital problems.
            <br />
            <br />
            When I face a challenge, my philosophy is simple: "I'll figure it
            out." And so far, I always have. I don't believe in putting myself
            in one box. I learn quickly and adapt to new situations. Each
            project teaches me something new that I can use in the next one.
            <br />
            <br />
            Outside of work, I enjoy biking through city streets, trying new
            recipes in the kitchen, hiking whenever I can get out of town, and
            taking photos of pelicans (yes, specifically pelicans). Simple joys
            that fuel good work. <br />
            <br />
            Let's work together to create something that looks good and works.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
