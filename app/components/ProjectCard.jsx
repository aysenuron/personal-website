"use client";

import { motion } from "framer-motion";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function ProjectCard({ data, index }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <div className="lg:grid relative lg:grid-cols-5 px-6 py-6 p-2.5 flex flex-col gap-5 justify-center hover:border-orange-500 bg-white hover:drop-shadow-xl duration-200 ease-in-out transition border-gray-300 border-[0.5px] rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: index * 0.5,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="lg:col-span-2"
      >
        <img src={data.img} alt={data.title} />
      </motion.div>
      <div className="lg:col-span-3 flex flex-col gap-5 justify-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: index * 1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="degular font-medium text-xl lg:text-2xl text-gray-700"
        >
          {data.title}
        </motion.h3>
        <div className="lg:absolute top-4 right-4 flex gap-4 text-sm items-center">
          {data.githubLink ? (
            <a href={data.githubLink} target="_blank">
              <p className="duration-200 ease-in-out transition cursor-pointer underline hover:text-orange-500 underline-offset-3">
                Github ↗️
              </p>
            </a>
          ) : null}
          {data.webLink ? (
            <a href={data.webLink} target="_blank">
              <button className="duration-200 ease-in-out transition forma bg-gradient-to-t from-gray-50 to-gray-100 drop-shadow-sm border border-gray-300 shadow-gray-300 w-fit px-4 py-1 text-gray-500 rounded-xl hover:from-gray-50 hover:to-gray-100 hover:text-orange-500 cursor-pointer hover:drop-shadow-none">
                View Live 🌐
              </button>
            </a>
          ) : null}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: index * 1.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-gray-500 text-md"
        >
          {data.description}
        </motion.p>
        <ChipsContainer selectedTools={websiteTools} color={"gray-50"} />
      </div>
    </div>
  );
}
