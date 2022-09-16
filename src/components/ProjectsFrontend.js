import React, { useContext } from "react"
import "./Skills.css"
import { projects, projectsPortuguese } from "../data"
import portfolioContext from "../context/PortfolioContext"

export function ProjectsFrontend({ scroll }) {
  const {
    toggleDark,
    languageButton,
  } = useContext(portfolioContext)
  return (
    <main className={ toggleDark ? "main-works-dark" : "main-works"}>
        { languageButton
          ? <section className="section-cards">
          { projects.map((project) => ( 
            <div  className={toggleDark ? "card-project-dark" : "card-project"} key={project.title}>
              <img className="img-cards item" src={project.img} alt={project.title} />
              <div className="title-section">
                <h4 className="title-cards item" >{project.title}</h4>
              </div>
              <p className="description-cards item">{project.description}</p>
              <div className='btn-cards'>
                <a 
                  href={project.deploy}
                  target="_blank"
                  rel='noreferrer'
                >
                  <button className='btn-works' type="button">
                    <span class="text">Deploy</span>
                  </button>
                </a>
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
          { projectsPortuguese.map((project) => ( 
            <div  className={toggleDark ? "card-project-dark" : "card-project"} key={project.title}>
              <img className="img-cards item" src={project.img} alt={project.title} />
              <div className="title-section">
                <h4 className="title-cards item" >{project.title}</h4>
              </div>
              <p className="description-cards item">{project.description}</p>
              <div className='btn-cards'>
                <a 
                  href={project.deploy}
                  target="_blank"
                  rel='noreferrer'
                >
                  <button className='btn-works' type="button">
                    <span class="text">Deploy</span>
                  </button>
                </a>
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


export default ProjectsFrontend;
