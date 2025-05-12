"use client";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaDownload } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import clsx from "clsx";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const email = "abubakersiddeak@gmail.com";
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log("coppy");
  };
  console.log(pathname);
  return (
    <nav className=" rounded-t-2xl w-full py-4 px-6 md:px-10 flex  items-center justify-between  relative bg-gray-900 text-green-500 dark:bg-black">
      {/* Logo */}

      <div className="hidden   relative md:flex items-center justify-center ">
        <div className=" p-3  hidden lg:block rounded-3xl bg-transparent backdrop-blur-2xl hover:text-green-400 hover:shadow-blue-400 hover:shadow-md pr-0  ">
          <span className="text-xs sm:text-sm bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text">
            abubakersiddeak@gmail.com{" "}
          </span>
          <span className="cursor-pointer  p-3 rounded-3xl font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm hover:shadow-blue-400 hover:shadow-md">
            <button className="cursor-pointer" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </span>
        </div>

        <a href="/resume.pdf" download="resume.pdf">
          <div className="cursor-pointer   ml-4 px-6 py-3 font-bold text-green-400 rounded-2xl flex items-center justify-center transition-all duration-500 ease-in-out shadow-lg hover:shadow-blue-400 transform hover:scale-105">
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
          <Link
            className={clsx(
              "transition", // Smooth transition
              {
                "border-b-[3px] border-b-cyan-500 text-green": pathname === "/",
              }
            )}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx(
              "transition", // Smooth transition
              {
                "border-b-[3px] border-b-cyan-500 text-green":
                  pathname === "/about",
              }
            )}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx(
              "transition", // Smooth transition
              {
                "border-b-[3px] border-b-cyan-500 text-green":
                  pathname === "/Myservice",
              }
            )}
            href="/Myservice"
          >
            Service
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx(
              "transition", // Smooth transition
              {
                "border-b-[3px] border-b-cyan-500 text-green":
                  pathname === "/project",
              }
            )}
            href="/project"
          >
            Porjects
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx(
              "transition", // Smooth transition
              {
                "border-b-[3px] border-b-cyan-500 text-green":
                  pathname === "/blog",
              }
            )}
            href="/blog"
          >
            Blog
          </Link>
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
        <ThemeButton />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="z-50 absolute top-16 right-7 md:hidden flex flex-col items-center space-y-4 p-5 bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-gray-700 shadow-lg text-lg font-medium text-green-300 transition-all duration-300">
          <li
            className={clsx(
              "relative px-6 py-2 hover:text-purple-500 transition-all duration-300 hover:scale-105",
              {
                "text-sky-500 font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-[2px] after:bg-sky-500 after:rounded-full after:-translate-x-1/2":
                  pathname === "/",
              }
            )}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={clsx(
              "relative px-6 py-2 hover:text-purple-500 transition-all duration-300 hover:scale-105",
              {
                "text-sky-500 font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-[2px] after:bg-sky-500 after:rounded-full after:-translate-x-1/2":
                  pathname === "/about",
              }
            )}
          >
            <a href="/about">About</a>
          </li>
          <li
            className={clsx(
              "relative px-6 py-2 hover:text-purple-500 transition-all duration-300 hover:scale-105",
              {
                "text-sky-500 font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-[2px] after:bg-sky-500 after:rounded-full after:-translate-x-1/2":
                  pathname === "/Myservice",
              }
            )}
          >
            <a href="/Myservice">Service</a>
          </li>
          <li
            className={clsx(
              "relative px-6 py-2 hover:text-purple-500 transition-all duration-300 hover:scale-105",
              {
                "text-sky-500 font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-[2px] after:bg-sky-500 after:rounded-full after:-translate-x-1/2":
                  pathname === "/project",
              }
            )}
          >
            <a href="/project">Porjects</a>
          </li>
          <li
            className={clsx(
              "relative px-6 py-2 hover:text-purple-500 transition-all duration-300 hover:scale-105",
              {
                "text-sky-500 font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-[2px] after:bg-sky-500 after:rounded-full after:-translate-x-1/2":
                  pathname === "/blog",
              }
            )}
          >
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="flex items-center space-x-2 px-5 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:shadow-green-400/50 hover:scale-105 transition-all duration-300"
            >
              <span>Resume</span>
              <FaDownload className="animate-bounce duration-500" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
