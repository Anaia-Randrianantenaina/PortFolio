import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  // Toogle Menu
  const[Toggle, showMenu] = useState(false);
  return (
  <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav__logo">Anaïa <i class='bx bxs-smile'></i></a>

      <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
            <i class='bx bx-home nav__icon'></i>Acceuil
            </a>
          </li>

          <li className="nav__item">
            <a href="#about" className="nav__link">
            <i class='bx bx-info-circle nav__icon'></i>À propos
            </a>
          </li>

          <li className="nav__item">
            <a href="#skills" className="nav__link">
            <i class='bx bx-file nav__icon'></i>Compétences
            </a>
          </li>

          <li className="nav__item">
            <a href="#services" className="nav__link">
            <i class='bx bxs-briefcase nav__icon' ></i>Services
            </a>
          </li>

          <li className="nav__item">
            <a href="#contact" className="nav__link">
            <i class='bx bxs-send nav__icon'></i>Contact
            </a>
          </li>
        </ul>

        <i class='bx bx-x nav__close' onClick={() => showMenu(!Toggle)}></i>
      </div>

      <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
      <i class='bx bxs-dashboard' ></i>
      </div>
    </nav>
  </header>
  );
}

export default Header;
