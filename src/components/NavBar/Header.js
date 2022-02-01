import { Link } from "gatsby";
import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png"
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <header className="header">
      <nav className="navbar">
      <Link className="nav-logo" to="/"><img src={logo} className="logo" alt="Logo" /></Link>
        <ul className={click ? 'nav-menu active': "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="#">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="#about">About</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="#services">Services</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="#facilities">Facilities</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
          <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      </nav>
    </header>
  );
};

export default Header;