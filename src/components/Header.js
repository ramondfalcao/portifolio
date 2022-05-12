import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import menuRed from '../assets/menuRed.svg';
import logo2 from '../assets/logo2.svg';
import './Header.css'
import './toggleDark.css'
import portfolioContext from '../context/PortfolioContext';

function Header(props) {
  const { buttons } = props
  const { toggleDark, setToggleDark } = useContext(portfolioContext)
  const [active, setActive] = useState(false)

  const toggleMode = () => {
    setActive(!active)
  }

  const toggleDarkAndWhite = () => {
    setToggleDark(!toggleDark)
  }

  return (
    <>
      <header className={ toggleDark ? "header-dark" : "header"}>
        <label class="switch">
          <input onClick={ toggleDarkAndWhite } type="checkbox"></input>
          <span class="slider"></span>
        </label>
        <img
          onClick={ toggleMode }
          className="menu-mobile"
          src={menuRed}
          alt="Menu Mobile" 
        />
        <div className="list-desktop">
          <ul className="listItems-desktop">
            <Link className='btn-desktop' to={ buttons ? "/works" : "/"}>
              <button
                className='btn-desktop'
                type="button"
              >
                <span class="text">{ buttons ? "Works" : "Home"}</span>
              </button>
            </Link>
            { buttons && (
               <a className='btn-desktop' href='#about'>
                <button
                  className='btn-desktop'
                  type="button"
                >
                  <span class="text">About</span>
                </button>
              </a>
            )}
          </ul>
        </div>
      </header>
        {active && (
          <div className="list">
            <ul className="listItems">
              <Link to={ buttons ? "/works" : "/"}>
                <button
                  type="button"
                  className='btn-mobile'
                >
                  <span class="text">{ buttons ? "Works" : "Home"}</span>
                </button>
              </Link>
              { buttons && (
                <a className='btn-desktop' href='#about'>
                  <button
                    type="button"
                    className='btn-mobile'
                    onClick={ toggleMode }
                  >
                    <span class="text">About</span>
                  </button>
                </a>
              )}
            </ul>
          </div>
        )}
    </>
  );
}

export default Header;
