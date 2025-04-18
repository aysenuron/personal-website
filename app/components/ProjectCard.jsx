"use client";

import { easeInOut, motion } from "framer-motion";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function ProjectCard({ data, index }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  // Smooth upward animation similar to Cubtale
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Start from below
      scale: 1, // No scaling effect, just like Cubtale
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7, // Slightly longer for smoother feel
        ease: "easeInOut", // Custom cubic-bezier that mimics Cubtale's smooth motion
        delay: index * 0.08, // Short delay between cards
      },
    },
  };

  return (
    <motion.div
      className="lg:grid relative lg:grid-cols-5 px-6 py-3 p-2.5 flex flex-col gap-5 justify-center hover:border-orange-500 hover:bg-white hover:drop-shadow-xl hover:cursor-pointer duration-200 ease-in-out transition border-gray-300 border-[0.5px] rounded-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div className="lg:col-span-2">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-5 justify-center">
        <h3 className="degular font-medium text-xl lg:text-2xl text-gray-700">
          {data.title}
        </h3>
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
        <p className="text-gray-400 text-md">{data.description}</p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </motion.div>
  );
}
