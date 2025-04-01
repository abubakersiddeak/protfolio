"use client";
import { motion } from "framer-motion";
import Introduction from "./Introduction";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`relative  bg-[#111827] from-pink-300 to-yellow-400 rounded-2xl z-50 
        h-[80vh] xl:h-[80vh] 2xl:h-[80vh] md:h-[70vh] grid grid-cols-6 grid-rows-6 
        overflow-hidden dark:bg-transparent
       `}
    >
      <div className="absolute top-70 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-30 right-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl"></div>
      {/* Navbar with hover effect */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative grid row-start-1 col-span-full text-center items-center transition-all duration-300 hover:shadow-[0_0_15px_#00eaff]"
      >
        <Navbar />
      </motion.div>

      {/* Introduction Section */}
      <Introduction />
    </motion.div>
  );
};

export default Hero;
