import styles from "./style.module.css"

const Experiencess = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Policia Federal",
    period: "Abr 2024 - Presente",
    description: 
      "Desenvolvimento do projeto Inteligeo, plataforma integrada para dados geoespaciais da policia federal.",
    technologies: ["Javascript", "React", "Python", "Pytest", "Fastapi", "PostgreSQL", "Podman", "Git", "Nginx"],
  },
  {
    title: "Suporte Tecnico",
    company: "Exercito Brasileiro",
    period: "Mar 2023 - fev 2024",
    description:
      "Durante o serviço obrigatório militar trabalhei como auxiliar na seção de informática, realizando desenvolvimento web front-end e manutenção de hardware.",
    technologies: ["Javascript", "Html", "Css", "git", "PHP", "MySql"],
  },
]

export default function ExperiencesSection() {
  return (
    <section className={styles.ExperiencesSection}>
      <h2 className={styles.sectionTitle} id="experiencias">Minhas Experiências</h2>
      <div className={styles.ExperiencesList}>
        {Experiencess.map((exp, index) => (
          <div key={index} className={styles.ExperiencesCard}>
            <h3 className={styles.jobTitle}>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.period}>{exp.period}</p>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.technologies}>
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}