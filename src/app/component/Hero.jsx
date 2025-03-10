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
import InformationBoad from "./InformationBoad";
import Introduction from "./Introduction";

const Hero = () => {
  const [show, setShow] = useState(false);
  const handleclick = (e) => {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
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
              <span className="border p-3 rounded-3xl bg-white font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm">
                Copy
              </span>
            </div>
            <div className="border relative mt-2 text-center p-2 font-bold  rounded-3xl bg-white flex justify-center ">
              <span>Resume</span>
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
              <span className="border hover:bg-blue-300 p-3 rounded-3xl bg-white font-bold pl-4 pr-4 ml-2 text-xs sm:text-sm">
                <button>Copy</button>
              </span>
            </div>
            <div className="border hover:bg-blue-300 relative mt-11 ml-3 p-2 font-bold pl-7 pr-7 rounded-3xl bg-white flex">
              <span>
                <button>Resume</button>
              </span>
              <span className="pl-2">
                <FaDownload />
              </span>
            </div>
          </div>
          {/* gmail end */}
          {/* icon start */}

          <div className="flex items-center col-start-10 lg:col-start-11 border-black mt-6 lg:mt-11 col-span-3 lg:col-span-2 mr-14 justify-around">
            <div className="lg:text-3xl">
              <LuFacebook />
            </div>
            <div className="lg:text-3xl">
              <FaGithub />
            </div>
            <div className="lg:text-3xl">
              <FaLinkedinIn />
            </div>
            <div className="lg:text-3xl">
              <FaInstagram />
            </div>
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
            drag
            dragElastic={0.2}
            initial={{ x: 0, y: 0, opacity: 0.7 }}
            animate={{
              x: 300,
              y: -45,
              opacity: 1,
            }}
            transition={{
              delay: 30,
              duration: 3,
              ease: "easeInOut",
            }}
            className="border p-3 rounded-3xl bg-black text-white font-bold hover:bg-slate-800"
          >
            Connect Me
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hero;
