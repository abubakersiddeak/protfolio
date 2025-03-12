"use client";
import { motion } from "framer-motion";
import React from "react";

const LinkButton = ({ href, className, text }) => {
  return (
    <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 5,
      }}
      className={`${className} hover:scale-105 transition-all duration-300 shadow-[rgba(255,255,255,0.6)] border-gradient backdrop-blur-md hover:shadow-blue-400`}
    >
      <a href={href}>{text}</a>
    </motion.div>
  );
};

export default LinkButton;
