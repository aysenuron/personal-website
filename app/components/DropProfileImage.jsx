"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DropProfileImage = ({ src, alt, className }) => {
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

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={dropVariants}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-full w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default DropProfileImage;
