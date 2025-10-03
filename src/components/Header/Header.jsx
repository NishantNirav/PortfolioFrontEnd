import React from 'react';
import './Header.css';
import './ResponsiveHeader.css'

const Header = () => {
    return (
    <header className="navbar">
      <div className="logo">
      {/* <img src="/assets/logo/namedLogo.png" alt=""  /> */}
      Nishant Nirav
        </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;