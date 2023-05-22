import React, { useState } from "react";
import "./header.css";

const Header = () => {
  //----------change background header-------//
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll__header");
    else header.classList.remove("scroll__header");
  });
  // ----toggle menu ------//
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActvieNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          &lt;Sajin &#47;&gt;
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActvieNav("#home")}
                className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActvieNav("#about")}
                className={activeNav === "#about" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActvieNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#education"
                onClick={() => setActvieNav("#education")}
                className={activeNav === "#education" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Education
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portflolio"
                onClick={() => setActvieNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActvieNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => {
              showMenu(!Toggle);
            }}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!Toggle);
          }}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
