import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  //----------change background header-------//
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY > 80) header.classList.add("scroll__header");
    else header.classList.remove("scroll__header");
  });

  useEffect(() => {
    // Add scroll event listener to update active nav link
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const educationSection = document.getElementById("education");
      //const PortfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");

      if (scrollPosition < aboutSection.offsetTop) {
        setActiveNav("#home");
      } else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < skillsSection.offsetTop) {
        setActiveNav("#about");
      } else if (scrollPosition >= skillsSection.offsetTop && scrollPosition < educationSection.offsetTop) {
        setActiveNav("#skills");
      } else if (scrollPosition >= educationSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        setActiveNav("#education");
        // } else if (scrollPosition >= PortfolioSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        //   setActiveNav("portfolio");
      } else if (scrollPosition >= contactSection.offsetTop) setActiveNav("#contact");
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeNav, setActiveNav] = useState("#home");
  // ----toggle menu ------//
  const [Toggle, showMenu] = useState(false);

  //const [activeNav, setActvieNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo myname">
          &lt;Sajin &#47;&gt;
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#education"
                onClick={() => setActiveNav("#education")}
                className={activeNav === "#education" ? "nav__link active__link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Education
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
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
