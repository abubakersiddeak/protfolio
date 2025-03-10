import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Introduction = () => {
  // for text animation start
  const text =
    "A full-stack web developer with a passion for creating innovative web applications. I specialize in both front-end and back-end development, delivering responsive and user-friendly websites. I work remotely from Bangladesh.";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval); // Ensure interval is cleared after the loop ends
      }
    }, 100);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);
  // for text animation end

  const Text = displayText.slice(0, -9); //my ninja technique for remove undefine from output
  return (
    <motion.div
      drag
      dragElastic={0.2}
      initial={{ x: 0, y: 0, opacity: 1 }} // শুরুতে একই জায়গায় থাকবে
      animate={{
        x: 300,
        y: -30,
        opacity: 1,
      }}
      transition={{
        delay: 30,
        duration: 3,
        ease: "easeInOut",
      }}
      className=" p-2  rounded-2xl  col-start-2 row-span-4 col-span-4 md:col-start-3 md:col-span-2 md:row-span-4 md:mt-6 grid grid-cols-6 grid-rows-6 "
    >
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="col-span-6   flex justify-center "
      >
        {" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="rounded-full border-4 border-gray-300 col-start-3 relative w-40 h-40 overflow-hidden xl:mt-[-40px] 2xl:mt-[5px]"
        >
          <Image
            src={"/slkdjgh.png"}
            alt="myimg"
            style={{ objectFit: "cover" }}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="relative hidden 2xl:block col-start-2 col-span-4 row-start-4 mt-[-50px] xl:"
      >
        <Image
          src={"/roaf.png"}
          alt="roaf"
          style={{ objectFit: "cover" }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <div className=" mt-9 md:mt-[-10px] xl:mt-[0px] row-start-4 md:row-start-4 col-span-full row-span-3 flex flex-col items-center justify-center">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="font-bold text-xs md:text-xl lg:text-3xl"
        >
          Abubakar Siddik Zisan
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[9px] md:text-[13px] lg:text-[15px] xl:text-[17px]"
        >
          {Text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Introduction;
