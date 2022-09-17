import React, { useState } from "react"
import "./Skills.css"
import { technologiesBackend, technologiesFrontend } from "../data"

export function Skills({ scroll }) {
  const [ 
    Technologies,
    setTechnologies,
  ] = useState(true)

  console.log(Technologies);
  return (
    <section className={`technologies-container ${scroll && 'animate'}`} data-anime="left">
      <div className="menu-technologies">
      <div
          onClick={() => setTechnologies(true)}
          className={ Technologies ? "btn-technologies btn-technologies-selected" : "btn-technologies"}
          type="button">
           <span class="text">Frontend</span>
        </div>
        <div
          onClick={() => setTechnologies(false)}
          className={ Technologies ? "btn-technologies" : "btn-technologies btn-technologies-selected"}
          type="button">
           <span class="text">Backend</span>
        </div>
      </div>
      <div className="cards">
        { Technologies
         ? technologiesFrontend.map((tec, index) => (
          <div key={ index } className="card-tec">
            <p className="tec-name">{tec.name}</p>
            <img className="tec-img" src={tec.icon} alt={tec.name} />
          </div>
          ))
        : technologiesBackend.map((tec, index) => (
          <div key={ index } className="card-tec">
            <p className="tec-name">{tec.name}</p>
            <img className="tec-img" src={tec.icon} alt={tec.name} />
          </div>
          ))
        }
      </div>
    </section>
  )
  }


export default Skills;
