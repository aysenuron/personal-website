"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import websites from "../websites";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };

export default function SelectedWorks() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto mt-5 px-4 lg:px-0">
        <motion.h2
          initial={initial}
          animate={animate}
          transition={{
            delay: 3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="degular text-2xl lg:text-4xl font-medium mb-5 lg:mb-10"
        >
          Selected Works <span className="text-lg lg:text-2xl">👇🏻</span>
        </motion.h2>
      </div>
      <div className="container mx-auto px-4 lg:p-8 rounded-4xl bg-white">
        <div className="flex flex-col gap-4 lg:gap-10">
          {websites.map((website) => (
            <ProjectCard key={website.id} data={website} />
          ))}
        </div>
      </div>
    </section>
  );
}
