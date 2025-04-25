"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const projects = [
  {
    title: "Online Exam Platform",
    description:
      "A web-based system that allows students to take tests and view their results.",
    image: "/Screenshot from 2025-04-25 16-16-17.png",
    link: "https://online-exam-nine.vercel.app/",
  },
  {
    title: "E-commerce website frontend",
    description:
      "An e-commerce website for a sports shop where customers can browse and purchase sports products.",
    image: "/Screenshot from 2025-04-25 16-30-10.png",
    link: "https://weal-shop2024.vercel.app/",
  },
  {
    title: "3D Portfolio",
    description: "A fully interactive 3D portfolio experience with animations.",
    image: "/Screenshot from 2025-03-18 12-49-50.png",
    link: "#",
  },
];

export default function Project() {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-900 text-white dark:bg-black min-h-[100vh] rounded-b-2xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-8 text-green-500">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-14">
            {projects.map((project, index) => (
              <a href={project.link} key={index}>
                {" "}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" p-6 rounded-2xl border bg-white/5 backdrop-blur-2xl shadow-[0px_0px_20px_rgba(0,255,255,0.4)] border-cyan-400/30 transition duration-500 hover:shadow-[0px_0px_30px_rgba(0,255,255,0.7)] hover:bg-white/10  "
                >
                  <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
