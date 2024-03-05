import style from "./App.module.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skillset from "./components/Skillset/Skillset";

export default function App():JSX.Element {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Skillset />
    </div>
  )
}
