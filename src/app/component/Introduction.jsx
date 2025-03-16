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
    <section className="relative col-span-full row-span-5 flex items-center justify-center  overflow-hidden   ">
      {/* Background Gradient Circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute h-full right-7 lg:right-13 hidden md:flex">
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
            <FaGithub className="h-6 w-6 lg:h-9 lg:w-9" />
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
          <div className="text-center md:text-left  order-2 md:order-1 overflow-hidden ">
            <p className="text-gray-700 text-xl md:text-2xl font-medium">I'm</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Abubakar Siddik Zisan
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-2 text-gray-900">
              A{" "}
              <span className="text-purple-600 drop-shadow-md">Full-Stack</span>{" "}
              <br />
              Web Developer.
            </h1>
            <p className="text-gray-600 mt-1 md:mt-4 text-xs md:text-lg">
              I create pixel-perfect, responsive, and high-performing web
              applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="mt-1 md:mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition"
              >
                My Projects →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition"
              >
                <Link href="/contactme">Quick Contact</Link>
              </motion.button>
            </div>
          </div>
          {/* Left Side - Text Section end */}
          {/* Right Side - Image Section */}
          <div className="relative flex justify-center  order-1 mt-[-17px] md:mt-0">
            {/* Animated Background Circle */}

            <Image
              src="/slkdjgh.png"
              width={400}
              height={400}
              alt="Profile Picture"
              className="relative rounded-full border-4 border-white shadow-xl w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover "
            />
          </div>
        </div>
      </div>
      {/* content ariya end */}
    </section>
  );
}
