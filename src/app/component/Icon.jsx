"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiAdobephotoshop, SiGimp } from "react-icons/si";
import SkillProgress from "./SkillProgress";

const Icon = () => {
  const style = "w-3 h-3 md:w-8 md:h-8 drop-shadow-[0_0_10px_#00eaff]";

  const skills = [
    {
      icon: <SiGimp className={`${style} text-white`} />,
      percentage: 70,
      color: "#00eaff",
    },
    {
      icon: <SiAdobephotoshop className={`${style} text-blue-500`} />,
      percentage: 65,
      color: "#007ACC",
    },
    {
      icon: <FaHtml5 className={`${style} text-orange-400`} />,
      percentage: 90,
      color: "#FF4500",
    },
    {
      icon: <FaCss3 className={`${style} text-blue-400`} />,
      percentage: 90,
      color: "#008CFF",
    },
    {
      icon: <RiTailwindCssFill className={`${style} text-cyan-400`} />,
      percentage: 82,
      color: "#06B6D4",
    },
    {
      icon: <IoLogoJavascript className={`${style} text-yellow-400`} />,
      percentage: 73,
      color: "#F7DF1E",
    },
    {
      icon: <FaReact className={`${style} text-blue-500 animate-spin`} />,
      percentage: 70,
      color: "#61DAFB",
    },
    {
      icon: <FaNodeJs className={`${style} text-green-600`} />,
      percentage: 70,
      color: "#68A063",
    },
    {
      icon: <RiNextjsFill className={`${style} text-gray-300`} />,
      percentage: 80,
      color: "#00eaff",
    },
    {
      icon: <SiMongodb className={`${style} text-green-500`} />,
      percentage: 65,
      color: "#4DB33D",
    },
  ];

  return (
    <div className="relative z-20 p-8 rounded-2xl  border-b-cyan-500 shadow-[0_0_0px_#00eaff] backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-black border border-cyan-500 rounded-xl flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_#00eaff] h-10 w-10 md:h-20 md:w-20 lg:h-24 lg:w-24"
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
