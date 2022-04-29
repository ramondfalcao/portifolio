import React from 'react';
import Header from '../components/Header';
import { projects } from '../data';

function Works() {
  return (
    <>
      <Header />
      <main>
        <section className="section-cards">
          {projects.map((project) => ( 
            <div className='card-project' key={project.title}>
              <img className="img-cards" src={project.img} alt={project.title} />
              <h4 className="title-cards" >{project.title}</h4>
              <p className="description-cards">{project.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Works;
