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
  const { toggleDark, setToggleDark } = useContext(portfolioContext)

  return (
    <>
      <Header props={props} />
      <main className={toggleDark ? "main-home-dark" : "main-home"}>
        <section className="section1-home">
          <section className='div-home'>
            <h1 className={toggleDark ? "title-dark" : "title"}>Hi, I'm Ramond Falcão, a Front End developer.</h1>
            <p className={toggleDark ? "paragraph-dark " : "paragraph"}>I am passionate about developing Front End applications, while working collaboratively and solving user problems.</p>
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
