"use client";
import { motion } from "framer-motion";

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
      <div className="container mx-auto px-4 lg:px-0 py-20 lg:py-50">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="lg:col-start-2 lg:col-end-4 flex flex-col gap-5">
            <motion.h2
              {...animations}
              className="degular text-2xl lg:text-4xl font-medium"
            >
              Get in touch <span className="text-lg lg:text-2xl">🫧</span>
            </motion.h2>
            <p>I repsond the quickest to mails.</p>
            <motion.div
              {...animations}
              className="flex gap-2 font-medium lg:text-lg"
            >
              <p>Send me an email</p>
              <span>👉🏻</span>
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
    </section>
  );
}
