"use client";
import { motion } from "motion/react";
import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import Introduction from "./Introduction";
import Link from "next/link";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const handleclick = (e) => {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const email = "abubakersiddeak@gmail.com";
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log("hello");
  };
  return (
    <>
      <div className="relative bg-[url('/sincerely-media-FPrniQ84dEk-unsplash.jpg')]  bg-cover rounded-[40px] md:rounded-[80px] z-30 h-[60vh] xl:h-[80vh] 2xl:h-[70vh] md:h-[70vh] grid grid-cols-6 grid-rows-6 ">
        {show === true ? (
          <div className=" absolute col-start-1 row-start-2 z-10">
            <div className=" p-3 rounded-3xl bg-slate-100  pr-0 ">
              <span className="text-[10px] sm:text-sm ">
                abubakersiddeak@gmail.com
              </span>
              <button
                onClick={handleCopy}
                className="border p-3 rounded-3xl bg-white font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="border relative mt-2 text-center p-2 font-bold  rounded-3xl bg-white flex justify-center ">
              <a
                href="/AbubakarSiddikZisan.png"
                download="AbubakarSiddikZisan.png"
              >
                Resume
              </a>
              <span className="pl-2">
                <FaDownload />
              </span>
            </div>
          </div>
        ) : null}
        <div className="relative grid  row-start-1 col-span-full border-black text-center items-cente grid-cols-12">
          <div className=" absolute md:hidden  font-bold col-start-2 mt-11 ">
            <button onClick={handleclick}>
              <CiMenuBurger />
            </button>
          </div>

          {/* gmail start */}

          <div className="hidden  absolute md:flex items-center justify-center col-span-6">
            <div className=" p-3 rounded-3xl bg-slate-100 mt-9 lg:mt-11 ml-14 pr-0 ">
              <span className="text-xs sm:text-sm ">
                abubakersiddeak@gmail.com{" "}
              </span>
              <span className="cursor-pointer border hover:bg-gray-400 p-3 rounded-3xl bg-white font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm">
                <button onClick={handleCopy}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </span>
            </div>
            <div className="cursor-pointer border hover:bg-gray-400 relative mt-11 ml-3 p-2 font-bold pl-7 pr-7 rounded-3xl bg-white flex">
              <a
                href="/AbubakarSiddikZisan.png"
                download="AbubakarSiddikZisan.png"
              >
                <button>Resume</button>
              </a>
              <span className="pl-2">
                <FaDownload />
              </span>
            </div>
          </div>
          {/* gmail end */}
          {/* icon start */}

          <div className="flex items-center col-start-10 lg:col-start-11 border-black mt-6 lg:mt-11 col-span-3 lg:col-span-2 mr-14 justify-around">
            <Link
              href="https://www.facebook.com/abubakar.siddeak/"
              className="lg:text-3xl"
            >
              <LuFacebook />
            </Link>
            <Link
              href="https://github.com/abubakersiddeak"
              className="lg:text-3xl"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abubaker-siddik-zisan/"
              className="lg:text-3xl"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fabubakarsiddik40%3Figsh%3DOXpoam1sZjRqYnBv%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3nfcYHt66aOW0kMZ9Io1OExI5qeMIqIUmCZSkfObz7q_3xKMlqGPWyuOs_aem_DtdzumUzK432BySEc1MWjA&h=AT1SmBW2FC6su91n_9ebGTir_Xv05BC29FpdhCIiqfEH69jpwejLaDZyUh6dlIWwrlxzTSs-WGQua64B2YQ0Aztojmh-4bAAfYUa7vJnv8JfBJCCXLV1zW0VEjH-Tw"
              className="lg:text-3xl"
            >
              <FaInstagram />
            </Link>
          </div>
          {/* icon end */}
        </div>
        {/* information boad start */}
        {/* <InformationBoad /> */}
        {/* intoduction div start */}
        <Introduction />
        {/* intoduction div end */}
        <div className="col-span-full row-start-6 justify-center items-center flex">
          <motion.button
            initial={{ x: 0, y: 0, opacity: 0.7 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 30,
              duration: 3,
              ease: "easeInOut",
            }}
            className="border p-3 rounded-3xl bg-black text-white font-bold hover:bg-slate-800"
          >
            <Link href="/contactme">Connect Me</Link>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hero;
