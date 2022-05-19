import React, { useContext } from 'react';
import Header from '../components/Header';
import { projects } from '../data';
import './Works.css';
import portfolioContext from '../context/PortfolioContext';

function Works() {
  const { toggleDark } = useContext(portfolioContext)
  return (
    <>
      <Header buttons={ false } />
      <main className={toggleDark ? "main-works-dark" : "main-works"}>
        <section className="section-cards">
          {projects.map((project) => ( 
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
      </main>
    </>
  );
}

export default Works;
