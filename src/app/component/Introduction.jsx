"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className="relative col-span-full row-span-6 flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-24 dark:bg-black  text-white ">
      {/* Social Icons */}
      <div className="absolute h-full right-4 md:right-7 lg:right-14 hidden md:flex z-50">
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-9 items-center justify-center">
          {[
            {
              icon: <LuFacebook className="text-blue-500" />,
              link: "https://www.facebook.com/abubakar.siddeak/",
            },
            {
              icon: <FaGithub className="text-white" />,
              link: "https://github.com/abubakersiddeak",
            },
            {
              icon: <FaLinkedinIn className="text-blue-800" />,
              link: "https://www.linkedin.com/in/abubaker-siddik-zisan/",
            },
            {
              icon: <FaInstagram className="text-pink-700" />,
              link: "https://www.instagram.com/abubakarsiddik40",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:shadow-xl hover:shadow-cyan-400 transition duration-300"
            >
              <span className="h-8 w-8 lg:h-12 lg:w-12 text-2xl lg:text-4xl">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="order-2 md:order-1">
            <p className="text-lg md:text-2xl font-medium text-gray-300">I'm</p>
            <h2 className="text-2xl md:text-5xl font-bold uppercase text-amber-400 tracking-wide">
              Abubakar Siddik Zisan
            </h2>
            <h1 className="text-xl md:text-4xl font-extrabold mt-3 text-green-400">
              A <span className="text-cyan-500 drop-shadow-lg">Front-end</span>{" "}
              Developer.
            </h1>
            <p className="bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text mt-4 text-md md:text-lg">
              Crafting immersive, visually stunning, and high-performance web
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:bg-purple-700 transition-all duration-300"
              >
                <a href="/project">My Projects →</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-xl font-semibold shadow-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Link href="/contactme">Quick Contact</Link>
              </motion.button>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 flex justify-center"
          >
            <Image
              src="/slkdjgh.png"
              width={400}
              height={400}
              alt="Profile Picture"
              className="rounded-full border-4 border-cyan-500 shadow-2xl w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-80 lg:h-80 object-cover transition duration-500 hover:shadow-[0px_0px_80px_rgba(0,255,255,1)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// bg-gradient-to-r from-gray-900 via-black to-gray-900
