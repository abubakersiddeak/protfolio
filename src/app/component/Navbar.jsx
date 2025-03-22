"use client";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaDownload } from "react-icons/fa6";

import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "abubakersiddeak@gmail.com";
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log("coppy");
  };

  return (
    <nav
      className={`w-full py-4 px-6 md:px-10 flex  items-center justify-between  relative ${
        darkMode ? "bg-gray-900 text-green-500" : "bg-transparent"
      }`}
    >
      {/* Logo */}

      <div className="hidden   relative md:flex items-center justify-center ">
        <div className=" p-3  hidden lg:block rounded-3xl bg-white/5 backdrop-blur-2xl shadow-[0px_0px_20px_rgba(0,255,255,0.4)]   pr-0 border border-cyan-400 ">
          <span className="text-xs sm:text-sm bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text">
            abubakersiddeak@gmail.com{" "}
          </span>
          <span className="cursor-pointer  hover:bg-gray-400 p-3 rounded-3xl bg-white font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm hover:shadow-blue-400 hover:shadow-md">
            <button className="cursor-pointer" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </span>
        </div>

        <a href="/resume.pdf" download="resume.pdf">
          <div className="cursor-pointer border border-cyan-400 ml-4 px-6 py-3 font-bold text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out bg-gradient-to-r from-gray-500 to-black shadow-lg hover:shadow-blue-400 transform hover:scale-105">
            <button className="flex cursor-pointer">
              Resume
              <span className="pl-2">
                <FaDownload />
              </span>
            </button>
          </div>
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-9 font-medium bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text">
        <li className="hover:text-purple-600 transition">
          <a className=" border-b-3 border-b-cyan-500" href="/">
            Home
          </a>
        </li>
        <li className="hover:text-purple-600 transition">
          <a className=" border-b-3 border-b-cyan-500" href="/about">
            About
          </a>
        </li>
        <li className="hover:text-purple-600 transition">
          <a className=" border-b-3 border-b-cyan-500" href="/Myservice">
            Service
          </a>
        </li>
        <li className="hover:text-purple-600 transition">
          <a className=" border-b-3 border-b-cyan-500" href="/project">
            Portfolio
          </a>
        </li>
        <li className="hover:text-purple-600 transition">
          <a className=" border-b-3 border-b-cyan-500" href="/blog">
            Blog
          </a>
        </li>
      </ul>
      {/* icon  start */}
      <div className="flex md:hidden items-center  w-[50vw]   justify-around ml-0">
        <Link
          href="https://www.facebook.com/abubakar.siddeak/"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md "
        >
          <LuFacebook className="h-6 w-6 text-blue-500" />
        </Link>
        <Link
          href="https://github.com/abubakersiddeak"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
        >
          <FaGithub className="h-6 w-6 text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abubaker-siddik-zisan/"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
        >
          <FaLinkedinIn className="h-6 w-6 text-blue-700" />
        </Link>
        <Link
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fabubakarsiddik40%3Figsh%3DOXpoam1sZjRqYnBv%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3nfcYHt66aOW0kMZ9Io1OExI5qeMIqIUmCZSkfObz7q_3xKMlqGPWyuOs_aem_DtdzumUzK432BySEc1MWjA&h=AT1SmBW2FC6su91n_9ebGTir_Xv05BC29FpdhCIiqfEH69jpwejLaDZyUh6dlIWwrlxzTSs-WGQua64B2YQ0Aztojmh-4bAAfYUa7vJnv8JfBJCCXLV1zW0VEjH-Tw"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
        >
          <FaInstagram className="h-6 w- text-pink-700" />
        </Link>
      </div>
      {/* icon end */}
      {/* Dark Mode & Mobile Menu Button */}
      <div className="flex items-center space-x-3 ">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg "
        >
          {darkMode ? (
            <Moon size={20} className="text-gray-300" />
          ) : (
            <Sun size={20} className="text-amber-300" />
          )}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="z-50 absolute top-16 right-7 md:hidden flex flex-col items-center space-y-3 py-6 text-lg font-medium text-green-400 p-2 rounded-3xl bg-gray-600">
          <li className="hover:text-purple-600 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/Myservice">Service</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/project">Portfolio</a>
          </li>
          <li className="flex">
            <a href="/resume.pdf" download="resume.pdf" className="flex ">
              <button> Resume</button>
              <FaDownload className="m-2" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
