"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen bg-[#111827] text-[#E2E8F0]  ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] rounded-b-[20px] md:rounded-b-[80px]"></div>
      <Navbar />
      {/* About Content */}
      <section className="relative py-10 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center ">
          {/* Floating Profile Image */}
          <motion.div
            className="relative mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full border border-cyan-400/30 shadow-[0px_0px_10px_rgba(0,255,255,0.4)] md:shadow-[0px_0px_20px_rgba(0,255,255,0.4)] transition-all duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glassmorphic Floating Border */}
            <div className="absolute inset-0 rounded-full border border-white/10"></div>

            {/* Image */}
            <Image
              src="/mepo.jpg"
              alt="Abubakar Siddik Zisan"
              width={300}
              height={300}
              className="object-cover rounded-full"
              priority
            />

            {/* Subtle Glow Effects */}
            <div className="absolute top-2 left-2 w-6 h-6 md:w-10 md:h-10 bg-white/20 rounded-full blur-[20px] md:blur-[30px] pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 md:w-10 md:h-10 bg-cyan-400/30 rounded-full blur-[25px] md:blur-[40px] pointer-events-none"></div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative p-6 md:p-8 bg-white/5 backdrop-blur-xl md:backdrop-blur-3xl border border-cyan-400/30 rounded-xl md:rounded-2xl overflow-hidden transition duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.8)]"
          >
            {/* Cyber Glow Borders */}
            <div className="absolute inset-0 border border-transparent rounded-xl md:rounded-2xl animate-pulse bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-500/20 shadow-lg"></div>

            {/* Floating Neon Particles */}
            <div className="absolute top-2 left-2 w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full shadow-[0px_0px_5px_cyan] md:shadow-[0px_0px_10px_cyan] animate-ping"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full shadow-[0px_0px_8px_purple] md:shadow-[0px_0px_15px_purple] animate-ping"></div>

            {/* Title with Futuristic Effect */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text tracking-[0.1em] md:tracking-[0.15em] uppercase text-center drop-shadow-lg hover:scale-105 transition-all duration-300">
              Who Am I?
            </h2>

            {/* Animated Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 md:mt-6 font-medium tracking-wide">
              I'm{" "}
              <span className="font-bold text-cyan-400 hover:text-purple-400 transition-all duration-300">
                Abubakar Siddik Zisan,
              </span>{" "}
              a passionate{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold">
                Front-end Developer
              </span>{" "}
              who crafts dynamic and interactive web applications.
            </p>

            {/* Skillset with Cyber Hover Effect */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-3 md:mt-4 font-medium tracking-wide">
              I have knowledge of
              <span className="text-cyan-400 font-semibold hover:text-green-400 transition-all duration-300">
                {" "}
                React
              </span>
              ,
              <span className="text-green-400 font-semibold hover:text-blue-400 transition-all duration-300">
                {" "}
                Next.js
              </span>
              ,
              <span className="text-blue-400 font-semibold hover:text-purple-400 transition-all duration-300">
                {" "}
                MongoDB
              </span>
              , and
              <span className="text-purple-400 font-semibold hover:text-cyan-400 transition-all duration-300">
                {" "}
                Tailwind CSS
              </span>
              , constantly learning and improving to build better digital
              experiences.
            </p>

            {/* Subtle Floating Animation */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-cyan-400 rounded-full shadow-[0px_0px_10px_cyan] md:shadow-[0px_0px_20px_cyan]"
            ></motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-1 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full shadow-[0px_0px_8px_purple] md:shadow-[0px_0px_15px_purple]"
            ></motion.div>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="mt-12 md:mt-16 h-[2px] md:h-[3px] w-3/4 md:w-1/2 mx-auto bg-gradient-to-r from-blue-500 via-green-400 to-yellow-500 rounded-full"></div>

        {/* Skills, Experience & Interests */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Skills",
              items: [
                "Frontend: Next.js, React.js, Tailwind CSS, Framer Motion",
                "Backend Development (Node.js, Express.js, MongoDB)",
                "UI/UX & Tailwind CSS (GIMP, Photoshop, Illustrator)",
              ],
              delay: 0.2,
            },
            {
              title: "Experience",
              items: [
                "Bangladesh Police From - 2023",
                "PIMS Operator | Chattogram Metropolitan Police",
              ],
              delay: 0.4,
            },
            {
              title: "Interests",
              items: ["Cybersecurity, Ethical Hacking & Problem-Solving"],
              delay: 0.6,
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              className="relative p-4 md:p-6 bg-white/5 backdrop-blur-xl md:backdrop-blur-2xl shadow-[0px_0px_10px_rgba(0,255,255,0.3)] md:shadow-[0px_0px_20px_rgba(0,255,255,0.4)] rounded-xl md:rounded-2xl border border-cyan-400/30 transition duration-500 hover:shadow-[0px_0px_20px_rgba(0,255,255,0.7)] hover:bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: section.delay }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-center tracking-wider md:tracking-widest uppercase">
                {section.title}
              </h3>
              <ul className="mt-3 md:mt-4 text-gray-300 space-y-2 md:space-y-3">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="p-2 flex items-start sm:items-center gap-2 border-l-2 md:border-l-4 border-transparent transition-all duration-300 hover:translate-x-2 md:hover:translate-x-4 hover:border-cyan-400 text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient Animated Bullet Point */}
                    <span className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-purple-900 to-purple-500 rounded-full shadow-[0_0_5px_gray] md:shadow-[0_0_10px_gray] mt-1 md:mt-0"></span>

                    {/* Colorful Animated Text */}
                    <span className="bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text font-medium md:font-semibold transition-all duration-300 text-sm md:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Cyber Glow Effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-4 md:h-4 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan] md:shadow-[0_0_15px_cyan]"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
