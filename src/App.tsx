import style from "./App.module.scss";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function App():JSX.Element {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  )
}
