import React from 'react';
import profile from '../assets/profile.jpeg';
import logoGmail from '../assets/logoGmail.svg';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div class="card-profile">
         <img className="profile-img" alt='profile_Picture' src={profile} />
         <h2>Ramond Falcão</h2>
         <p>Front End Developer</p>
         <div className='icons'>
           <a rel="noreferrer" className="img-icon" target="_blank" href='https://github.com/ramondfalcao'>
              <img
                className="img-icon"
                alt='github_Icon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
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
                src={logoGmail}
              />
           </a>
         </div> 
      </div>
    </section>
  );
}

export default About;
