"use client";
import Hero from "./component/Hero";
import Icon from "./component/Icon";

import AboutMe from "./component/AboutMe";
import Service from "./component/Service";
import Project from "./component/Project";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Icon />
      <AboutMe />
      <Service />
      <Project />
      <Blog />
      <Footer />
    </>
  );
}
