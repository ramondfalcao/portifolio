import React from 'react';
import Header from '../components/Header';
import logoTrybe from '../assets/logoTrybe.png';
import { projects } from '../data';
import './Works.css';

function Works() {
  return (
    <>
      <Header buttons={ false } />
      <main className="main-works">
        <section className="section-cards">
          {projects.map((project) => ( 
            <div className='card-project' key={project.title}>
              <img className="img-cards item" src={project.img} alt={project.title} />
              <div className="title-section">
                <h4 className="title-cards item" >{project.title}</h4>
                {project.trybe && (
                  <img id="logo-trybe" alt="logo-trybe" src={logoTrybe}/>
                )}
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
