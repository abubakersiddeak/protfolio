"use client";
import { useState, useEffect } from "react";
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
  };

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="rounded-t-2xl w-full py-4 px-6 md:px-10 flex items-center justify-between relative bg-gray-900 text-green-500 dark:bg-black">
      {/* Logo */}

      <div className="hidden relative md:flex items-center justify-center">
        <div className="p-3 hidden lg:block rounded-3xl bg-transparent backdrop-blur-2xl hover:text-green-400 hover:shadow-blue-400 hover:shadow-md pr-0">
          <span className="text-xs sm:text-sm bg-gradient-to-r from-pink-300 to-yellow-400 text-transparent bg-clip-text">
            abubakersiddeak@gmail.com{" "}
          </span>
          <span className="cursor-pointer p-3 rounded-3xl font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm hover:shadow-blue-400 hover:shadow-md">
            <button className="cursor-pointer" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </span>
        </div>

        <a href="/resume.pdf" download="resume.pdf">
          <div className="cursor-pointer ml-4 px-6 py-3 font-bold text-green-400 rounded-2xl flex items-center justify-center transition-all duration-500 ease-in-out shadow-lg hover:shadow-blue-400 transform hover:scale-105">
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
            className={clsx("transition", {
              "border-b-[3px] border-b-cyan-500 text-green": pathname === "/",
            })}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx("transition", {
              "border-b-[3px] border-b-cyan-500 text-green":
                pathname === "/about",
            })}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx("transition", {
              "border-b-[3px] border-b-cyan-500 text-green":
                pathname === "/Myservice",
            })}
            href="/Myservice"
          >
            Service
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx("transition", {
              "border-b-[3px] border-b-cyan-500 text-green":
                pathname === "/project",
            })}
            href="/project"
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-purple-600 transition">
          <Link
            className={clsx("transition", {
              "border-b-[3px] border-b-cyan-500 text-green":
                pathname === "/blog",
            })}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>

      {/* Mobile Social Icons */}
      <div className="flex md:hidden items-center w-[50vw] justify-around ml-0">
        <Link
          href="https://www.facebook.com/abubakar.siddeak/"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
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
          href="https://www.instagram.com/abubakarsiddik40"
          className="lg:text-3xl hover:shadow-blue-400 hover:shadow-md"
        >
          <FaInstagram className="h-6 w-6 text-pink-700" />
        </Link>
      </div>

      {/* Dark Mode & Mobile Menu Button */}
      <div className="flex items-center space-x-3">
        <ThemeButton />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-400"
        >
          {!isOpen ? <Menu size={28} /> : null}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform pt-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-transparent bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div className="relative w-4/5 max-w-xs h-full dark:bg-black bg-gray-900 border-r border-gray-800 shadow-xl">
          <div className="p-4 flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-green-400 p-2"
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-6 mt-8">
              <li>
                <Link
                  href="/"
                  className={clsx(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    {
                      "text-green-400 bg-gray-800": pathname === "/",
                      "text-gray-300 hover:text-green-400 hover:bg-gray-800":
                        pathname !== "/",
                    }
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={clsx(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    {
                      "text-green-400 bg-gray-800": pathname === "/about",
                      "text-gray-300 hover:text-green-400 hover:bg-gray-800":
                        pathname !== "/about",
                    }
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Myservice"
                  className={clsx(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    {
                      "text-green-400 bg-gray-800": pathname === "/Myservice",
                      "text-gray-300 hover:text-green-400 hover:bg-gray-800":
                        pathname !== "/Myservice",
                    }
                  )}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className={clsx(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    {
                      "text-green-400 bg-gray-800": pathname === "/project",
                      "text-gray-300 hover:text-green-400 hover:bg-gray-800":
                        pathname !== "/project",
                    }
                  )}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={clsx(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    {
                      "text-green-400 bg-gray-800": pathname === "/blog",
                      "text-gray-300 hover:text-green-400 hover:bg-gray-800":
                        pathname !== "/blog",
                    }
                  )}
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Resume Download Button */}
            <div className="mt-auto mb-8">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="flex items-center justify-center space-x-2 px-6 py-3 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:shadow-green-400/50 transition-all"
              >
                <span>Download Resume</span>
                <FaDownload />
              </a>
            </div>

            {/* Email and Copy Button */}
            <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
              <span className="text-xs text-gray-300 truncate">{email}</span>
              <button
                onClick={handleCopy}
                className="text-xs bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
