"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiAdobephotoshop, SiGimp } from "react-icons/si";
import SkillProgress from "./SkillProgress";

const Icon = () => {
  const style = "w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8 drop-shadow-lg";

  const skills = [
    {
      icon: <SiGimp className={`${style} text-black`} />,
      percentage: 70,
      color: "black",
    },
    {
      icon: <SiAdobephotoshop className={`${style} text-blue-600`} />,
      percentage: 65,
      color: "blue",
    },
    {
      icon: <FaHtml5 className={`${style} text-orange-400`} />,
      percentage: 90,
      color: "orange",
    },
    {
      icon: <FaCss3 className={`${style} text-blue-400`} />,
      percentage: 90,
      color: "blue",
    },
    {
      icon: <RiTailwindCssFill className={`${style} text-blue-600`} />,
      percentage: 82,
      color: "blue",
    },
    {
      icon: <IoLogoJavascript className={`${style} text-yellow-400`} />,
      percentage: 73,
      color: "yellow",
    },
    {
      icon: <FaReact className={`${style} text-blue-500`} />,
      percentage: 70,
      color: "blue",
    },
    {
      icon: <FaNodeJs className={`${style} text-green-700`} />,
      percentage: 70,
      color: "green",
    },
    {
      icon: <RiNextjsFill className={`${style} text-black`} />,
      percentage: 80,
      color: "black",
    },
    {
      icon: <SiMongodb className={`${style} text-green-600`} />,
      percentage: 65,
      color: "green",
    },
  ];

  return (
    <div className="bg-white z-20 mt-[-90px] relative rounded-b-[40px] md:rounded-b-[80px] p-6 shadow-xl backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap justify-center gap-4 xl:gap-8 mt-24 md:mt-26 sm:mt-24"
      >
        {skills.map((skill, index) => (
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3,
            }}
            key={index}
            className="bg-gray-50 shadow-2xl rounded-xl flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 border border-gray-200 backdrop-blur-lg hover:shadow-blue-400 hover:shadow-md h-10 w-10 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 md:h-20 md:w-20 sm:h-15 sm:w-15"
          >
            <SkillProgress
              percentage={skill.percentage}
              colors={skill.color}
              icon={skill.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Icon;
