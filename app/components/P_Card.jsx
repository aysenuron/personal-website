"use client";

import { motion } from "framer-motion";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function P_Card({ data, index }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <div className="lg:grid relative lg:grid-cols-7 flex flex-col gap-8 justify-center group cursor-pointer transform duration-200 ease-in-out transition-all">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: index * 0.5,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="lg:col-span-2 flex items-center justify-center"
      >
        <img src={data.img} alt={data.title} />
      </motion.div>
      <div className="lg:col-span-5 flex flex-col gap-2 justify-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: index * 1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="
           font-medium text-xl lg:text-lg text-gray-800 group-hover:text-blue-700"
        >
          {data.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: index * 1.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-md text-gray-500 pb-4"
        >
          {data.description}
        </motion.p>
        <ChipsContainer selectedTools={websiteTools} color={"gray-100"} />
      </div>
    </div>
  );
}
