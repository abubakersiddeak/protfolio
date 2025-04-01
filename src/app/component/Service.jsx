"use client";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";
import LinkButton from "./LinkButton";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, fast, and responsive websites with React, Framer-motion, NextJs, NodeJs, ExpressJs, MongoDB technologies.",
    icon: <FaCode className="text-4xl text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-friendly and aesthetically pleasing interfaces designed for the best experience.",
    icon: <FaPaintBrush className="text-4xl text-green-500" />,
  },
  {
    title: "Backend Development",
    description:
      "Robust and scalable backend systems with high security and performance.",
    icon: <FaServer className="text-4xl text-red-500" />,
  },
];

export default function Service() {
  return (
    <div>
      <Navbar />
      <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#111827] dark:bg-black flex flex-col items-center min-h-[100vh]">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-8 sm:mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-6 bg-white/5 backdrop-blur-2xl shadow-[0px_0px_20px_rgba(0,255,255,0.4)] rounded-2xl border border-cyan-400/30 transition duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.7)] hover:bg-white/10 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 flex flex-col items-center text-center relative bg-white/5 backdrop-blur-2xl shadow-[0px_0px_20px_rgba(0,255,255,0.4)] rounded-2xl border border-cyan-400/30 transition duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.7)] hover:bg-white/10"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
                {service.title}
              </h3>
              <p className="relative bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text font-semibold transition-all duration-300 mt-2 text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact & CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Let’s Work Together!
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mt-2">
            I’m always open to new projects and collaborations.
          </p>

          <LinkButton
            text={"Contact Me"}
            href={"/contactme"}
            className="mt-6 inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
}
