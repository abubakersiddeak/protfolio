"use client";
import Hero from "./component/Hero";
import Icon from "./component/Icon";
import { useState } from "react";
import AboutMe from "./component/AboutMe";
import Service from "./component/Service";
import Project from "./component/Project";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={` ${darkMode ? "bg-white" : "bg-black rounded-2xl"}`}>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />

      <Icon />
      <AboutMe />
      <Service />
      <Project />
      <Blog />
      <Footer />
    </div>
  );
}
