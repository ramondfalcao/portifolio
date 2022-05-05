import React from "react"
import "./Skills.css"
import { technologies } from "../data"

export function Skills() {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="cards">
        {technologies.map((tec, index) => (
          <div key={ index } className="card-tec">
            <p className="tec-name">{tec.name}</p>
            <img className="tec-img" src={tec.icon} alt={tec.name} />
          </div>
        ))}
      </div>
    </section>
  )
  }


export default Skills;
