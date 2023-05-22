import React from "react";
import "./education.css";
const Education = () => {
  return (
    <section className="education section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My qualification</span>
      <div className="education__container container">
        {/* <div className="education__tabs">
          <div className="education__button button--flex">
            <i className="uil uil-graduation-cap education__icon"></i>Education
          </div>
  </div> */}
        <div className="education__sections">
          <div className="education__content">
            <div className="education__data">
              <h3 className="education__title">BCA</h3>
              <span className="education__subtitle">Mangaluru University</span>
              <div className="education__calender">
                <i className="uil uil-calendar-alt"></i>2018 - 2021
              </div>
            </div>
            <div className="education__data">
              <h3 className="education__title">Higher Secondary</h3>
              <span className="education__subtitle">Chattanchal HSS</span>
              <div className="education__calender">
                <i className="uil uil-calendar-alt"></i>2016 - 2018
              </div>
            </div>
            <div className="education__data">
              <h3 className="education__title">Secondary</h3>
              <span className="education__subtitle">GFHSS Bekal</span>
              <div className="education__calender">
                <i className="uil uil-calendar-alt"></i>2014 - 2016
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
