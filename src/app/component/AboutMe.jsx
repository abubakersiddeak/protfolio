"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen bg-[#111827] text-[#E2E8F0]  mt-[-80px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] rounded-b-[40px] md:rounded-b-[80px]"></div>

      {/* About Content */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          {/* Floating Profile Image */}
          <motion.div
            className="relative mx-auto w-[300px] h-[300px] overflow-hidden rounded-full border border-cyan-400/30 shadow-[0px_0px_20px_rgba(0,255,255,0.4)] transition-all duration-500 hover:shadow-[0px_0px_40px_rgba(0,255,255,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glassmorphic Floating Border */}
            <div className="absolute inset-0 rounded-full border border-white/10"></div>

            {/* Image (Now Clear, No Blur) */}
            <Image
              src="/mepo.jpg"
              alt="Abubakar Siddik Zisan"
              width={300}
              height={300}
              className="object-cover rounded-full"
            />

            {/* Subtle Glow Effects (Doesn't affect image) */}
            <div className="absolute top-2 left-2 w-10 h-10 bg-white/20 rounded-full blur-[30px] pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-10 h-10 bg-cyan-400/30 rounded-full blur-[40px] pointer-events-none"></div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative p-8 bg-white/5 backdrop-blur-3xl  border-cyan-400/30  rounded-2xl overflow-hidden transition duration-500 hover:shadow-[0px_0px_50px_rgba(0,255,255,0.8)]"
          >
            {/* Cyber Glow Borders */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl animate-pulse bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-500/20 shadow-lg"></div>

            {/* Floating Neon Particles */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0px_0px_10px_cyan] animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-500 rounded-full shadow-[0px_0px_15px_purple] animate-ping"></div>

            {/* Title with Futuristic Effect */}
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text tracking-[0.15em] uppercase text-center drop-shadow-lg hover:scale-105 transition-all duration-300">
              Who Am I?
            </h2>

            {/* Animated Description */}
            <p className="text-lg text-gray-300 leading-relaxed mt-6 font-medium tracking-wide">
              I’m{" "}
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
            <p className="text-lg text-gray-300 leading-relaxed mt-4 font-medium tracking-wide">
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
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-[0px_0px_20px_cyan]"
            ></motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/3 w-4 h-4 bg-purple-500 rounded-full shadow-[0px_0px_15px_purple]"
            ></motion.div>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="mt-16 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-blue-500 via-green-400 to-yellow-500 rounded-full"></div>

        {/* Skills, Experience & Interests */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 ">
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
              className="relative p-6 bg-white/5 backdrop-blur-2xl shadow-[0px_0px_20px_rgba(0,255,255,0.4)] rounded-2xl border border-cyan-400/30 transition duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.7)] hover:bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: section.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-center tracking-widest uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 text-gray-300 space-y-3">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="p-2 flex items-center gap-2 border-l-4 border-transparent transition-all duration-300 hover:translate-x-4 hover:border-cyan-400 text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Gradient Animated Bullet Point */}
                    <span className="w-3 h-3 bg-gradient-to-br from-purple-900 to-purple-500 rounded-full shadow-[0_0_10px_gray] "></span>

                    {/* Colorful Animated Text */}
                    <span className="bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text font-semibold transition-all duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Cyber Glow Effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_cyan]"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
