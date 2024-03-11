import './style/App.css';
import Header from './components/header/index';
import Introduction from './components/introduction/index';
import About from './components/about/index';
import Project from './components/project/index';
import Footer from './components/footer/index';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <About />
        <section>
          <h2 className='title-projects' id='projects'>Projetos</h2>
          <Project 
            urlImg={`https://raw.githubusercontent.com/ifDiversidades/ifDiversidades/main/midia/img/readme/desktop.PNG`}
            title={`IfDiversidades`}
            text={`O projeto consiste em usar a tecnologia e os conhecimentos técnicos do curso do instituto federal de brasilia disponíveis para criar um site, visando realizar debates sobre problemáticas que envolvem a diversidade de gênero e suas questões`}
            skils={`HTML, CSS e JAVASCRIPT`}
            urlGithub={`https://github.com/ifDiversidades/ifDiversidades`}
          />
          <hr className='divisor' />
          <Project 
            urlImg={`https://raw.githubusercontent.com/ArthurRabel/metereologia/main/public/readme/Print.png`}
            title={`Metereologia`}
            text={`Projeto para ver o tempo de qualquer lugar`}
            skils={`HTML, CSS, JAVASCRIPT, REACT`}
            urlGithub={`https://github.com/ArthurRabel/metereologia`}
          />
          <hr className='divisor' />
          <Project 
            urlImg={`https://raw.githubusercontent.com/ArthurRabel/SistemaEscolar/main/readmePhoto/desktop.PNG`}
            title={`Sistema Login Escolar`}
            text={`Sistema de login feito em conjunto com Jonas Anderson(Github: Jonas010) para treinar`}
            skils={`HTML, CSS, JAVASCRIPT, JAVA, SPRING, MYSQL`}
            urlGithub={`https://github.com/ArthurRabel/SistemaEscolar`}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}