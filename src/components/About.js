import React, { useState } from 'react';
import profileWhite from '../assets/profileWhite.png';
import logoGmail2 from '../assets/logoGmail2.svg';
import iconGithub2 from '../assets/iconGithub2.svg';
import './About.css';
import Skills from './Skills';

function About() {

  const [ scroll, setScroll ] = useState(false);

  const animeScroll = () => {
    const target = document.querySelectorAll('[data-anime]')
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element) => {
      if(windowTop > element.offsetTop) {
        setScroll(true)
      }
    })
  }
  window.addEventListener('scroll', () => {
    animeScroll();
  })

  return (
    <section className="about-section" id="about">
      <div className='section-profile'>
        <div class={`card-profile ${scroll && 'animate'}`} data-anime="left">
          <img className="profile-img" alt='profile_Picture' src={profileWhite} />
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
      <Skills scroll={scroll} />
    </section>
  );
}

export default About;
