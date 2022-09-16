import React, { useContext } from "react"
import "./Skills.css"
import { projectsBackend, projectsBackendPortuguese } from "../data"
import portfolioContext from "../context/PortfolioContext"

export function ProjectsBackend({ scroll }) {
  const {
    toggleDark,
    languageButton,
  } = useContext(portfolioContext)
  return (
    <main className={ toggleDark ? "main-works-dark" : "main-works"}>
        { languageButton
          ? <section className="section-cards">
          { projectsBackend.map((project) => ( 
            <div  className={toggleDark ? "card-project-dark" : "card-project-backend"} key={project.title}>
              <img className="img-cards item" id="img-backend-card" src={project.img} alt={project.title} />
              <div className="title-section">
                <h4 className="title-cards item" >{project.title}</h4>
              </div>
              <p className="description-cards item">{project.description}</p>
              <div className='btn-cards-backend'>
                <a 
                  href={project.repository}
                  target="_blank"
                  rel='noreferrer'
                >
                  <button className='btn-works' type="button">
                    <span class="text">Repository</span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>
          : <section className="section-cards">
          { projectsBackendPortuguese.map((project) => ( 
            <div  className={toggleDark ? "card-project-dark" : "card-project-backend"} key={project.title}>
              <img className="img-cards item" id="img-backend-card" src={project.img} alt={project.title} />
              <div className="title-section">
                <h4 className="title-cards item" >{project.title}</h4>
              </div>
              <p className="description-cards item">{project.description}</p>
              <div className='btn-cards-backend'>
                <a 
                  href={project.repository}
                  target="_blank"
                  rel='noreferrer'
                >
                  <button className='btn-works' type="button">
                    <span class="text">Repository</span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>
        }
      </main>
  )
  }


export default ProjectsBackend;
