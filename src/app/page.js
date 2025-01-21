import Hero from "../components/Hero/index.js"
import About from "../components/About/index.js"
import Projects from "./../components/Projects/index.js"
import TechScroll from "../components/TechScroll/index.js";
import Experiences from "../components/Experiences/index.js";
import style from "./style.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className={style.C_TechScroll} id="tecnologias">
        <h1 className={style.C_TechScroll__title}>Minhas Tecnologias</h1>
        <TechScroll speed={30} />
        <TechScroll speed={20} />
        <TechScroll speed={25} />
      </div>
      <div className={style.container}>
        <Experiences />
      </div>
      <Projects />
    </main>
  );
}
