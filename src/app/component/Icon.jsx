"use client";
import { motion } from "motion/react";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiGimp } from "react-icons/si";

const Icon = () => {
  return (
    <div className="bg-white z-20 mt-[-90px] h-[30vh] xl:h-[40vh] 2xl:h-[30vh] relative rounded-b-[40px] md:rounded-b-[80px] grid grid-cols-12 grid-rows-4">
      {/* icon start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // ৩ সেকেন্ডে মাঝখানে আসবে
        transition={{ duration: 3 }}
        className="row-start-3 mt-7 col-span-full justify-center items-center flex "
      >
        <div
          className="relative lg:h-24 lg:w-24 sm:h-20 sm:w-20 row-start-2 flex justify-center items-center flex-col m-2 rounded-md 
           md:shadow-lg hover:scale-105 transition-transform"
        >
          <SiGimp className="md:w-9 md:h-9" />
          <p className="hidden md:block">GIMP</p>
          <div className="relative  border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[95%] h-full relative"> </div>
          </div>
        </div>
        <div
          className="relative lg:h-24 lg:w-24 sm:h-20 sm:w-20 row-start-2 flex justify-center items-center flex-col m-2 rounded-md 
           md:shadow-lg hover:scale-105 transition-transform"
        >
          <SiAdobephotoshop className="md:w-9 md:h-9 text-blue-900 " />
          <p className="hidden md:block">Photoshop</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[95%] h-full relative"> </div>
          </div>
        </div>{" "}
        <div
          className="relative lg:h-24 lg:w-24 sm:h-20 sm:w-20 row-start-2 flex justify-center items-center flex-col m-2 rounded-md 
           md:shadow-lg hover:scale-105 transition-transform"
        >
          <FaHtml5 className="md:w-9 md:h-9 text-orange-500" />
          <p className="hidden md:block">HTML</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[95%] h-full relative"> </div>
          </div>
        </div>
        <div
          className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md 
           md:shadow-lg hover:scale-105 transition-transform"
        >
          <FaCss3 className="md:w-9 md:h-9 text-blue-400" />
          <p className="hidden md:block">css</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[85%] h-full relative"> </div>
          </div>
        </div>
        <div
          className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md 
           md:shadow-lg hover:scale-105 transition-transform"
        >
          <RiTailwindCssFill className="md:w-9 md:h-9 text-blue-400 " />
          <p className="hidden md:block">Tailwind</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[90%] h-full relative"> </div>
          </div>
        </div>
        <div className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md  md:shadow-lg hover:scale-105 transition-transform">
          <IoLogoJavascript className="md:w-9 md:h-9 text-yellow-400" />
          <p className="hidden md:block">JavaScript</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[75%] h-full relative"> </div>
          </div>
        </div>
        <div className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md md:shadow-lg hover:scale-105 transition-transform">
          <FaReact className="md:w-9 md:h-9 text-blue-500" />
          <p className="hidden md:block">React</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[80%] h-full relative"> </div>
          </div>
        </div>
        <div className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md md:shadow-lg hover:scale-105 transition-transform">
          <FaNodeJs className="md:w-9 md:h-9 text-green-700" />
          <p className="hidden md:block">Node Js</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[85%] h-full relative"> </div>
          </div>
        </div>
        <div className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md md:shadow-lg hover:scale-105 transition-transform">
          <RiNextjsFill className="md:w-9 md:h-9" />
          <p className="hidden md:block">Next Js</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[85%] h-full relative"> </div>
          </div>
        </div>
        <div className="row-start-2 relative lg:h-24 lg:w-24 sm:h-20 sm:w-20  flex justify-center items-center flex-col m-2 rounded-md md:shadow-lg hover:scale-105 transition-transform">
          <SiMongodb className="md:w-9 md:h-9 text-green-600" />
          <p className="hidden md:block">MongoDb</p>
          <div className="relative border w-[80%] h-[6px] mt-2 rounded">
            <div className="bg-green-400 w-[70%] h-full relative"> </div>
          </div>
        </div>
      </motion.div>
      {/* icon end */}
    </div>
  );
};

export default Icon;
