import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import './Home.css'
import './button.css'
import About from '../components/About';
import Footer from '../components/Footer';

function Home(props) {
  const {history} = props
  return (
    <>
      <Header props={props} />
      <main className="main-home">
        <section className="section1-home">
          <h1 id="title">Hi, I'm Ramond Falcão, a Front End developer.</h1>
          <p id="paragraph">I am passionate about developing Front End applications, while working collaboratively and solving user problems.</p>
          <button
            onClick={() => history.push('/works')}
            type="button"
            id="button-work-main"
          >
            <span class="text">Works</span>
          </button>
        </section>
        <About />
        {/* <Skills /> */}
        <Footer />
      </main>
    </>
  );
}

export default Home;
