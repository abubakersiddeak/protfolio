"use client";
import { motion } from "framer-motion";
import Introduction from "./Introduction";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative 
        h-[65vh] md:h-[70vh] xl:h-[70vh] 2xl:h-[70vh] grid grid-cols-6 grid-rows-6 
        overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:bg-black"
    >
      <div className="absolute top-70 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-30 right-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl"></div>

      {/* Introduction Section */}
      <Introduction />
    </motion.div>
  );
};

export default Hero;
