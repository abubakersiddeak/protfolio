"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  const Text = displayText.slice(0, -9);

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-[9px] md:text-[13px] lg:text-[15px] xl:text-[17px]"
    >
      {Text}
    </motion.p>
  );
};

export default TypingEffect;
