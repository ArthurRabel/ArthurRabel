import './style/App.css';
import Header from './components/header/index';
import Introduction from './components/introduction/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import Footer from './components/footer/index';
import Intro from './components/intro/index';

export default function App() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <Introduction />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}