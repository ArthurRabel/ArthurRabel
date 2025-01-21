import style from './index.module.css';

const ProjectsList = [
  {
    urlImg: `https://raw.githubusercontent.com/ArthurRabel/mapFeature/main/frontEnd/src/assets/preview-md.png`,
    title: `Map Feature`,
    date: `~ 2024`,
    text: `Projeto para criar features em um mapa, feito para estudar geoprocessamento, podman e nginx`,
    skills: `REACT, NGINX, FASTAPI, POSTGRES, PODMAN`,
    urlAcessar: `https://github.com/ArthurRabel/mapFeature`,
  },
  {
    urlImg: `https://raw.githubusercontent.com/ArthurRabel/mathRandom/main/public/readme/printDesktop.png`,
    title: `Math Random`,
    date: `~ 2023`,
    text: `Gamer para treinar operações matemáticas básicas`,
    skills: `HTML, JAVASCRIPT, REACT e TAILWIND`,
    urlAcessar: `https://rabelo-mathrandom.vercel.app`,
  },
    {
    urlImg: `https://raw.githubusercontent.com/ifDiversidades/ifDiversidades/main/midia/img/readme/desktop.PNG`,
    title: `IfDiversidades`,
    date: `~ 2022`,
    text: `O projeto consiste em usar a tecnologia e os conhecimentos técnicos do curso do instituto federal de brasilia disponíveis para criar um site`,
    skills: `HTML, CSS e JAVASCRIPT`,
    urlAcessar: `https://ifdiversidades.github.io/ifDiversidades/`,
  },
]

export default function projects() {
    return (
        <section className={`${style.projects} gs-wrapper`}>
          <h2 className={style.projectsTitle} id='projects'>Projetos Antigos</h2>
          <p className={style.projectsText}>Aqui estão alguns projetos que fiz no passado apenas para fins de treinamento</p>
          <div className={style.projectsWrapper}>
              {ProjectsList.map((project, index) => (
                <div key={index} className={style.project}>
                    <img alt='foto do projeto' src={project.urlImg} width='800'></img>
                    <h2>{project.title}</h2>
                    <p className={style.projectDate}>{project.date}</p>
                    <p className={style.projectSkills}>{project.skills}</p>
                    <p className={style.projectText}>{project.text}</p>
                    <a href={project.urlAcessar} target="_blank">Acessar</a>
                </div>
              ))}
          </div>
        </section>
    );
}
