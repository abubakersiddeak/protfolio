import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import TypingEffect from "./TypingEffect";
const Introduction = () => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1 }} // শুরুতে একই জায়গায় থাকবে
      transition={{
        delay: 30,
        duration: 3,
        ease: "easeInOut",
      }}
      className=" p-2  rounded-2xl  col-start-2 row-span-4 col-span-4 md:col-start-3 md:col-span-2 md:row-span-4 md:mt-6 grid grid-cols-6 grid-rows-6 "
    >
      <motion.div
        animate={{ y: [0, 0] }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="col-span-6   flex justify-center "
      >
        {" "}
        <div className="rounded-full border-4 border-gray-300 col-start-3 relative w-40 h-40 overflow-hidden xl:mt-[-40px] 2xl:mt-[5px]">
          <Image
            src={"/slkdjgh.png"}
            alt="myimg"
            style={{ objectFit: "cover" }}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>

      <div className=" mt-9 md:mt-[-10px] xl:mt-[0px] row-start-4 md:row-start-4 col-span-full row-span-3 flex flex-col items-center justify-center">
        <motion.p
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="font-bold text-xs md:text-xl lg:text-3xl"
        >
          Abubakar Siddik Zisan
        </motion.p>

        <TypingEffect
          text="A  full-stack web developer with a passion for creating innovative web applications. I specialize in both front-end and back-end development, delivering responsive and user-friendly websites. I work remotely from Bangladesh."
          speed={20}
        />
      </div>
    </motion.div>
  );
};

export default Introduction;
