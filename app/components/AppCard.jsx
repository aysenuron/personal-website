"use client";
import { motion } from "framer-motion";
import tools from "../tools";
import ChipsContainer from "./ChipsContainer";

export default function AppCard({ data }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="hover:border-orange-500 hover:bg-white hover:shadow-inner duration-300 ease-in-out transition border-gray-400 border-[0.1px] rounded-3xl"
    >
      <div className="px-6 py-3 flex justify-between items-center">
        <span className="text-xl">{data.emoji}</span>
        <div className="flex gap-4 text-sm items-center">
          <div>
            <a href={data.githubLink} target="_blank">
              <p className="duration-200 ease-in-out transition cursor-pointer underline hover:text-orange-500 underline-offset-3">
                Github ↗️
              </p>
            </a>
          </div>
          {data.webLink ? (
            <a href={data.webLink} target="_blank">
              <button className="duration-200 ease-in-out transition forma bg-gradient-to-t from-gray-50 to-gray-100 drop-shadow-sm border border-gray-300 shadow-gray-300 w-fit px-4 py-1 text-gray-500 rounded-xl hover:from-gray-50 hover:to-gray-100 hover:text-orange-500 cursor-pointer hover:drop-shadow-none">
                View Live 🌐
              </button>
            </a>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start bg-gray-50 px-6 py-3">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="degular font-medium text-lg/tight lg:text-xl/tight 2xl:text-xl/tight text-gray-700"
        >
          {data.title}
        </motion.h3>
      </div>
      <div className="px-6 py-4 flex flex-col gap-5">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-gray-400 text-md"
        >
          {data.description}
        </motion.p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </motion.div>
  );
}
