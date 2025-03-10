"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="bg-gray-50 min-h-screen bg-[url('/sincerely-media-FPrniQ84dEk-unsplash.jpg')] bg-cover bg-center rounded-b-[40px] md:rounded-b-[80px] mt-[-80px] relative">
      {/* About Content */}
      <section className="py-20 px-6 max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          {/* Image */}
          <motion.div
            className="relative mx-auto w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-gray-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Who Am I?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I’m <b>Abubakar Siddik Zisan</b>, a Full-Stack Developer. My
              journey started with <b>HTML & CSS</b> in <b>2021</b>, and since
              then, I’ve mastered <b>JavaScript</b>, <b>React</b>,{" "}
              <b>Next.js</b>, and full-stack development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In <b>2022</b>, I worked as a <b>CMP PIMS Operator</b> for the{" "}
              <b>Bangladesh Police</b>, gaining valuable experience in system
              management. Now, I’m focusing on mastering web development and
              creating innovative applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am passionate about building user-friendly, scalable web
              solutions and solving real-world problems with technology.
            </p>
          </motion.div>
        </div>

        {/* Skills, Experience & Interests */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 ">
          {[
            {
              title: "Skills",
              items: [
                "🌐 Frontend: Next.js, React.js, Tailwind CSS, Framer Motion",
                "💻 Full-Stack Development (Node.js, Express.js)",
                "🎨 UI/UX & Tailwind CSS (GIMP, Photoshop, Illustrator)",
                "📊 MongoDB, Mongoose, API Development",
                "Git & GitHub",
              ],
              delay: 0.2,
            },
            {
              title: "Experience",
              items: [
                "Full-Stack Developer at XYZ (2023 - Present)",
                "Bangladesh Police (2022 – 2024)",
                "PIMS Operator | Chattogram Metropolitan Police (Managed and maintained the Police Information Management System (PIMS), ensuring accuracy and security.Processed and updated critical law enforcement data with efficiency and precision.Ensured data security, integrity, and compliance with organizational protocols.)",
              ],
              delay: 0.4,
            },
            {
              title: "Interests",
              items: [
                "Strong passion for cybersecurity and ethical hacking.",
                "🎮 Gaming & Competitive Coding",
                "📸 Photography & Video Editing",
              ],
              delay: 0.6,
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: section.delay }}
            >
              <h3 className="text-2xl font-bold text-gray-700 text-center">
                {section.title}
              </h3>
              <ul className="mt-3 text-gray-600">
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
          <h3 className="text-2xl font-bold text-gray-800">
            Let’s Work Together!
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            I’m always open to new projects and collaborations.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;
