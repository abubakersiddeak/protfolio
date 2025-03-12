"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 bg-[url('/sincerely-media-FPrniQ84dEk-unsplash.jpg')] bg-cover bg-center rounded-b-[40px] md:rounded-b-[80px] mt-[-80px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px] rounded-b-[40px] md:rounded-b-[80px]"></div>

      {/* About Content */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          {/* Floating Profile Image */}
          <motion.div
            className="relative mx-auto w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-gray-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/mepo.jpg"
              alt="Abubakar Siddik Zisan"
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Who Am I?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I’m <b>Abubakar Siddik Zisan</b>, a passionate Full-Stack
              Developer who loves to craft dynamic and interactive web
              applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I specialize in React, Next.js, MongoDB, and Tailwind CSS,
              constantly learning and improving to build better digital
              experiences.
            </p>
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
                "Full-Stack Developer at XYZ (2023 - Present)",
                "Bangladesh Police (2022 – 2024)",
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
              className="p-6 bg-white/10 backdrop-blur-md shadow-lg rounded-lg hover:bg-white/20 transition duration-300 border border-gray-300/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: section.delay }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text text-center">
                {section.title}
              </h3>
              <ul className="mt-3 text-gray-300">
                {section.items.map((item, idx) => (
                  <li className="p-2 " key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white">
            Let’s Work Together!
          </h3>
          <p className="text-lg text-gray-300 mt-2">
            I’m always open to new projects and collaborations.
          </p>

          <LinkButton
            text={"Contact Me"}
            href={"/contactme"}
            className={
              "mt-6 inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
            }
          />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;
