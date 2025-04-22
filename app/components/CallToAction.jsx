"use client";
import { motion } from "framer-motion";
import WavyText from "./WavyText";

const animations = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: (delay = 0.2) => ({
    delay,
    duration: 0.3,
    ease: "easeInOut",
  }),
};

export default function CallToAction() {
  return (
    <section>
      <div className="container bg-white mx-auto px-4 lg:px-0 py-20 lg:py-60">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="lg:col-start-2 lg:col-end-4 flex flex-col gap-12">
            <motion.h2 {...animations} className="degular text-8xl font-medium">
              <WavyText>Let's talk</WavyText>
            </motion.h2>
            <div>
              <p className="mb-4">I respond the quickest to emails.</p>
              <motion.div
                {...animations}
                className="flex flex-col md:flex-row gap-2 font-medium lg:text-lg"
              >
                <p className="hidden md:block">Send me an email</p>
                <span className="hidden md:block">👉🏻</span>
                <a
                  className="underline underline-offset-2 cursor-pointer hover:text-orange-500 transition duration-200 ease-in-out"
                  href="mailto:contact@aysenuronaran.com"
                >
                  contact@aysenuronaran.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
