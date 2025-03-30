"use client";
import { motion } from "framer-motion";
import React from "react";

const SkillProgress = ({ percentage, colors, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative flex items-center justify-center w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20 lg:w-24 lg:h-24"
    >
      {/* Circle Animation */}
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="0"
          stroke="lightgray"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke={colors}
          strokeWidth="5"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset="251.2"
          animate={{
            strokeDashoffset: 251.2 - (251.2 * percentage) / 100,
          }}
          transition={{
            duration: 2, // ২ সেকেন্ডে সম্পন্ন হবে
            ease: "easeInOut",
            repeat: Infinity, // বারবার চলবে
            repeatDelay: 10,
          }}
          strokeLinecap="round"
        />
      </svg>

      {/* Skill Name & Percentage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {icon}
        <span className="mt-1 text-[3px] sm:text-[5px] md:text-[8px] 2xl:text-[10px] text-white">
          {percentage} %
        </span>
      </div>
    </motion.div>
  );
};

export default SkillProgress;
