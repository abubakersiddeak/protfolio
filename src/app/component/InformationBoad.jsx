import React from "react";
import { motion } from "motion/react";
import Clock from "./Clock";

const InformationBoad = () => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }} // নিচ থেকে শুরু হবে
      animate={{ y: 0, x: 80, opacity: 1 }} // ওপরে উঠে দৃশ্যমান হবে
      transition={{ delay: 33, duration: 4, ease: "easeOut" }}
      className="   rounded-2xl  col-start-1 row-span-4 col-span-2  grid-cols-6 grid-rows-6 ml-[70px] mt-[60px]  "
    >
      <div className="bg-[url('/boy.jpg')] grid relative h-full w-full p-4 bg-cover rounded-2xl ">
        <Clock />{" "}
      </div>
    </motion.div>
  );
};

export default InformationBoad;
