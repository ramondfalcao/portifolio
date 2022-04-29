import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuRed from '../assets/menuRed.svg';
import logo2 from '../assets/logo2.svg';
import './Header.css'

function Header() {
  const [active, setActive] = useState(false)
  const toggleMode = () => {
    setActive(!active)
  }
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            className="logo-mobile" 
            src={logo2}
            alt="Menu Mobile" 
          />
        </Link>
        <img
          onClick={ toggleMode }
          className="menu-mobile"
          src={menuRed}
          alt="Menu Mobile" 
        />
      </header>
        {active && (
          <div className="list">
            <ul className="listItems">
              <Link className="link" to="/works"><li className="li">Works</li></Link>
              <Link className="link" to="/about"><li className="li">About me</li></Link>
              <Link className="link" to="getintouch"><li className="li">Get in touch</li></Link>
            </ul>
          </div>
        )}
    </>
  );
}

export default Header;
