"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative col-span-full row-span-5 flex items-center justify-center  overflow-hidden ">
      {/* Background Gradient Circle */}

      <div className="absolute h-full right-7 lg:right-13 hidden md:flex z-50">
        <div className="flex flex-col gap-13 lg:gap-15 items-center justify-around ">
          <Link
            href="https://www.facebook.com/abubakar.siddeak/"
            className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md "
          >
            <LuFacebook className="h-6 w-6 lg:h-9 lg:w-9 text-blue-500" />
          </Link>
          <Link
            href="https://github.com/abubakersiddeak"
            className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
          >
            <FaGithub className="h-6 w-6 lg:h-9 lg:w-9 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abubaker-siddik-zisan/"
            className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
          >
            <FaLinkedinIn className="h-6 w-6 lg:h-9 lg:w-9 text-blue-800" />
          </Link>
          <Link
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fabubakarsiddik40%3Figsh%3DOXpoam1sZjRqYnBv%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3nfcYHt66aOW0kMZ9Io1OExI5qeMIqIUmCZSkfObz7q_3xKMlqGPWyuOs_aem_DtdzumUzK432BySEc1MWjA&h=AT1SmBW2FC6su91n_9ebGTir_Xv05BC29FpdhCIiqfEH69jpwejLaDZyUh6dlIWwrlxzTSs-WGQua64B2YQ0Aztojmh-4bAAfYUa7vJnv8JfBJCCXLV1zW0VEjH-Tw"
            className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
          >
            <FaInstagram className="h-6 w-6 lg:h-9 lg:w-9 text-pink-700" />
          </Link>
        </div>
      </div>
      {/* content ariya start */}
      <div className="container mx-auto px-6 lg:px-20 z-10 mt-[-15px] md:mt-[-70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-center  ">
          {/* Left Side - Text Section */}
          <div className="text-center md:text-left  order-2 md:order-1  ">
            <p className="text-white text-xl md:text-2xl font-medium">I'm</p>
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-amber-400">
              Abubakar Siddik Zisan
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-2 text-green-400">
              A <span className="text-cyan-500 drop-shadow-md">Front-end</span>{" "}
              <br />
              Web Developer.
            </h1>
            <p className="bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text mt-1 md:mt-4 text-xs md:text-lg">
              I create pixel-perfect, responsive, and high-performing web
              applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="mt-1 md:mt-9 flex flex-wrap justify-center md:justify-start gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-white px-2 md:px-6 py-1  md:py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition"
              >
                <a href="/project">My Projects →</a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-500 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-500 hover:text-white transition"
              >
                <Link href="/contactme">Quick Contact</Link>
              </motion.button>
            </div>
          </div>
          {/* Left Side - Text Section end */}
          {/* Right Side - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center  order-1 mt-[-17px] md:mt-20 "
          >
            {" "}
            <Image
              src="/slkdjgh.png"
              width={400}
              height={400}
              alt="Profile Picture"
              className="relative rounded-full border-4 border-white shadow-xl w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover transition duration-500 hover:shadow-[0px_0px_50px_rgba(0,255,255,0.8)]"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-[0px_0px_20px_cyan] md:block hidden"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/3 w-4 h-4 bg-purple-500 rounded-full shadow-[0px_0px_15px_purple] md:block hidden"
            ></motion.div>
            {/* Floating Neon Particles */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0px_0px_10px_cyan] animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-500 rounded-full shadow-[0px_0px_15px_purple] animate-ping"></div>
          </motion.div>
        </div>
      </div>
      {/* content ariya end */}
    </section>
  );
}
