import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <main className="main-home">
        <section className="section1-home">
          <h1 id="title">Hi, I'm Ramond Falcão, a Front End developer.</h1>
          <p id="paragraph">I am passionate about developing Front End applications, while working collaboratively and solving user problems.</p>
        </section>
        <Skills />
      </main>
    </>
  );
}

export default Home;
