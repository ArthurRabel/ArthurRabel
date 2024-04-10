import Project from './project/index';
import './index.css';

export default function projects() {
    return (
        <section className='C-projects wrapper'>
          <h2 className='C-projects__title' id='projects'>Projetos</h2>
          <div className='C-projects__wrapper'>
            <Project 
              urlImg={`https://raw.githubusercontent.com/ifDiversidades/ifDiversidades/main/midia/img/readme/desktop.PNG`}
              title={`IfDiversidades`}
              text={`O projeto consiste em usar a tecnologia e os conhecimentos técnicos do curso do instituto federal de brasilia disponíveis para criar um site`}
              skills={`HTML, CSS e JAVASCRIPT`}
              urlGithub={`https://github.com/ifDiversidades/ifDiversidades`}
            />
            <Project 
              urlImg={`https://raw.githubusercontent.com/ArthurRabel/metereologia/main/public/readme/Print.png`}
              title={`Metereologia`}
              text={`Projeto para ver o tempo de qualquer lugar`}
              skills={`HTML, CSS, JAVASCRIPT e REACT`}
              urlGithub={`https://github.com/ArthurRabel/metereologia`}
            />
            <Project 
              urlImg={`https://raw.githubusercontent.com/ArthurRabel/SistemaEscolar/main/readmePhoto/desktop.PNG`}
              title={`Sistema Login Escolar`}
              text={`Sistema de login feito em conjunto com Jonas Anderson(Github: Jonas010) para treinar`}
              skills={`HTML, CSS, JAVASCRIPT, JAVA, SPRING e MYSQL`}
              urlGithub={`https://github.com/ArthurRabel/SistemaEscolar`}
            />
          </div>
        </section>
    );
}