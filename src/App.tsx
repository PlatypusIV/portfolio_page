import React from "react";
import style from "./App.module.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/Projects";

export default function App():JSX.Element {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  )
}
