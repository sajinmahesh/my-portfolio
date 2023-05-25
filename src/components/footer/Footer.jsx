import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sajin</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/sajinmahesh?tab=repositories" className="footer__link " target="_balnk">
              Porjects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/sajin.kdz" className="footer__social-link facebook " target="_blank ">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://instagram.com/sajin_mahesh" className="footer__social-link instagram" target="_blank ">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/KdzSajin" className="footer__social-link twitter" target="_blank ">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">made by sajin mahesh</span>
      </div>
    </footer>
  );
};

export default Footer;
