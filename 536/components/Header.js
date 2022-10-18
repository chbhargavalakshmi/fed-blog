import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="nav-menu">
        <div className="logo">
          <a href="#p">Component LifeCycle</a>
        </div>
        <div className="menu">
          <ul>
            <li className="header-nav-item">
              <a href="#home">HOME</a>
            </li>
            <li className="header-nav-item">
              <a href="#about">ABOUT</a>
            </li>
            <li className="header-nav-item">
              <a href="#work">PORTFOLIO</a>
            </li>
            <li className="header-nav-item">
              <a href="#clients">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
