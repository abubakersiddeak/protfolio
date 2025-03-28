"use client";
import Hero from "./component/Hero";
import Icon from "./component/Icon";
import { useState } from "react";

import Footer from "./component/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={` ${
        darkMode ? "bg-black rounded-2xl" : "bg-black rounded-2xl"
      }`}
    >
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />

      <Icon />

      <Footer darkMode={darkMode} />
    </div>
  );
}
