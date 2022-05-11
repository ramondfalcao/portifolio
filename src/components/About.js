import React from 'react';
import profileEdited from '../assets/profileEdited.png';
import logoGmail2 from '../assets/logoGmail2.svg';
import iconGithub2 from '../assets/iconGithub2.svg';
import './About.css';
import Skills from './Skills';

function About() {
  return (
    <section className="about-section" id="about">
      <div className='section-profile'>
        <div class="card-profile">
          <img className="profile-img" alt='profile_Picture' src={profileEdited} />
          <h2>Ramond Falcão</h2>
          <p>Front End Developer</p>
          <div className='icons'>
            <a rel="noreferrer" className="img-icon" target="_blank" href='https://github.com/ramondfalcao'>
                <img
                  className="img-icon"
                  alt='github_Icon'
                  src={iconGithub2}
                  />
                </a>
              <a className="img-icon" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ramond-falc%C3%A3o-b528a1206/'>
                <img
                  className="img-icon"
                  alt='linkedin_Icon'
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                />
            </a>
            <a className="img-icon" target="_blank" rel='noreferrer' href='mailto:ramondfalcao@gmail.com'>
                <img
                  className="img-icon"
                  alt='linkedin_Icon'
                  src={logoGmail2}
                />
            </a>
          </div>
         </div> 
      </div>
      <Skills />
    </section>
  );
}

export default About;
