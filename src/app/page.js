import Hero from "./../components/hero/index.js"
import About from "./../components/about/index.js"
import ProjectList from "./../components/projectList/index.js"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectList />
    </main>
  );
}
