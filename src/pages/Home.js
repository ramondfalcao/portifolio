import React, { useContext } from 'react';
import Header from '../components/Header';
import './Home.css'
import './button.css'
import About from '../components/About';
import Footer from '../components/Footer';
import imgHome from '../assets/imgHome.svg';
import portfolioContext from '../context/PortfolioContext';

function Home(props) {
  const {history} = props
  const { toggleDark, languageButton } = useContext(portfolioContext);

  return (
    <>
      <Header props={props} buttons />
      <main className={toggleDark ? "main-home-dark" : "main-home"}>
        <section className="section1-home">
          <section className='div-home'>
            <h1 className={`${toggleDark ? "title-dark" : "title"} typing-animation`}>
              { languageButton
                ? `Hi, I'm Ramond Falcão, a Fullstack developer jr.`
                : `Olá, sou Ramond Falcão, Desenvolvedor Fullstack jr.`
              }
              </h1>
            <p className={`${toggleDark ? "paragraph-dark " : "paragraph"} typing-animation-p`}>
            { languageButton
                ? ` I am passionate about developing Front End applications, while working collaboratively and solving user problems.`
                : `Sou apaixonado por desenvolver aplicações, trabalhando de forma colaborativa e resolvendo problemas de usuários.`
            }
              </p>
            <button
              onClick={() => history.push('/works')}
              type="button"
              id="button-work-main"
            >
              <span class="text">Works</span>
            </button>
          </section>
          <div className='section-img-home'>
            <img className="img-home" src={imgHome} alt="" />
          </div>
        </section>
        <About />
        <Footer />
      </main>
    </>
  );
}

export default Home;
