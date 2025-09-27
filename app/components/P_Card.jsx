"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function P_Card({ data, index, chipsVisible = true }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <Link href={`/projects/${data.type}/${data.slug}`} passHref>
      <div className="lg:grid relative lg:grid-cols-7 flex flex-col gap-2 lg:gap-8 justify-center group cursor-pointer transform duration-200 ease-in-out transition-all">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{
            delay: index * 0.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="lg:col-span-2 flex items-center justify-center"
        >
          <img src={data.img} alt={data.title} />
        </motion.div>
        <div className="lg:col-span-5 flex flex-col gap-1 justify-center">
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
           text-xl lg:text-lg font-medium text-gray-900 group-hover:text-[#192de4]"
          >
            {data.title}
            <span>
              <i className="fa-solid fa-arrow-right text-sm pl-2 group-hover:pl-4 transition-all duration-300"></i>
            </span>
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
            className="text-[15px] 2xl:text-md text-gray-500 font-normal"
          >
            {data.description}
          </motion.p>
          {chipsVisible ? (
            <ChipsContainer
              selectedTools={websiteTools}
              color={"gray-100"}
              className={"pt-3"}
            />
          ) : null}
        </div>
      </div>
    </Link>
  );
}
