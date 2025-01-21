import React from "react"
import style from "./style.module.css"

const technologies = [
  "Wordpress",
  "HTML",
  "CSS",
  "JavaScript",
  "Podman",
  "Docker",
  "PostgreSQL",
  "NestJS",
  "Next.js",
  "Python",
  "FastAPI",
  "Ubuntu",
  "Git",
]

const TechScroll = ({ speed }) => {
  return (
    <div className={style.techScrollContainer}>
      <div className={style.techScroll} style={{ animationDuration: `${speed}s` }}>
        {technologies.map((tech, index) => (
          <span key={index} className={style.techItem}>
            {tech}
          </span>
        ))}
        {technologies.map((tech, index) => (
          <span key={`${index}-duplicate`} className={style.techItem}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechScroll

