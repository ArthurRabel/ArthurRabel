import './style/App.css';
import Header from './components/header/index';
import Introduction from './components/introduction/index';
import About from './components/about/index';
import Projects from './components/projects';
import Footer from './components/footer/index';

export default function App() {
  return (
    <>
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