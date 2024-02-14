import style from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";

export default function App():JSX.Element {
  return (
    <div className={style.App}>
      <Navbar />
    </div>
  )
}
