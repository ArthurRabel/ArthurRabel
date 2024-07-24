import Project from './project/index.js';
import './index.css';

export default function projects() {
    return (
        <section className='C-projects gs-wrapper'>
          <h2 className='C-projects__title' id='projects'>Projetos</h2>
          <div className='C-projects__wrapper'>
              <Project 
                urlImg={`https://raw.githubusercontent.com/ArthurRabel/mapFeature/main/frontEnd/src/assets/preview-md.png`}
                title={`Map Feature`}
                text={`Projeto para criar features em um mapa`}
                skills={`REACT, NGINX, FASTAPI, POSTGRES, PODMAN`}
                urlAcessar={`https://github.com/ArthurRabel/mapFeature`}
              />
              <Project 
                urlImg={`https://raw.githubusercontent.com/ArthurRabel/mathRandom/main/public/readme/printDesktop.png`}
                title={`Math Random`}
                text={`Gamer para treinar operações matemáticas básicas`}
                skills={`HTML, JAVASCRIPT, REACT e TAILWIND`}
                urlAcessar={`https://rabelo-mathrandom.vercel.app`} 
              />
              <Project 
                urlImg={`https://raw.githubusercontent.com/ifDiversidades/ifDiversidades/main/midia/img/readme/desktop.PNG`}
                title={`IfDiversidades`}
                text={`O projeto consiste em usar a tecnologia e os conhecimentos técnicos do curso do instituto federal de brasilia disponíveis para criar um site`}
                skills={`HTML, CSS e JAVASCRIPT`}
                urlAcessar={`https://ifdiversidades.github.io/ifDiversidades/`}
              />
          </div>
        </section>
    );
}
