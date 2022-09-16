import React, { useContext } from 'react';
import Header from '../components/Header';
import './Works.css';
import portfolioContext from '../context/PortfolioContext';
import ProjectsFrontend from '../components/ProjectsFrontend';
import ProjectsBackend from '../components/ProjectsBackend';

function Works() {
  const {
    stackProjects,
    setStackProjects,
    toggleDark,
  } = useContext(portfolioContext)

  console.log(stackProjects);
  
  return (
    <>
      <Header buttons={ false } />
      <section className={ toggleDark ? "btn-projects-section-dark" : "btn-projects-section"}>
        <div
          onClick={() => setStackProjects(true)}
          className={ stackProjects ? "btn-stacks btn-stack-selected" : "btn-stacks"}
          id={ toggleDark ? "btn-stacks-dark" : "btn-stacks"}
          type="button">
           <span class="text">Frontend Projects</span>
        </div>
        <div
          onClick={() => setStackProjects(false)}
          className={ stackProjects ? "btn-stacks" : "btn-stacks btn-stack-selected"}
          id={ toggleDark ? "btn-stacks-dark" : "btn-stacks"}
          type="button">
           <span class="text">Backend Projects</span>
        </div>
      </section>
      { stackProjects 
        ? <ProjectsFrontend />
        : (<ProjectsBackend />)
      }
    </>
  );
}

export default Works;
