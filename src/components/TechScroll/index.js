import React from "react"
import style from "./style.module.css"

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Podman",
  "Docker",
  "PostgreSQL",
  "NestJS",
  "NextJs",
  "Python",
  "FastAPI",
  "Ubuntu",
  "Git",
]

const TechScroll = ({ speed }) => {
  return (
    <div className={style.techScrollContainer}>
      <div className={style.techScroll} style={{ animationDuration: `${speed}s` }}>
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <span key={index} className={style.techItem}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechScroll

