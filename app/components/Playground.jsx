"use client";
import { motion } from "framer-motion";
import apps from "../apps";
import AppCard from "./AppCard";

export default function Playground() {
  return (
    <section className="container mx-auto px-4 space-y-8 lg:space-y-12 pt-20  lg:px-0 py-20">
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
      <div className="gap-4 lg:gap-10 grid lg:grid-cols-2">
        {apps.map((app) => (
          <AppCard key={app.id} data={app} />
        ))}
      </div>
    </section>
  );
}
