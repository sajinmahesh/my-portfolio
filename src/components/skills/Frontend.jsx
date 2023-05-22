import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5 icon-html fa-spinner"></i>
            <div>
              <h3 className="skills__name ">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-css3 icon-css fa-spinner"></i>
            <div>
              <h3 className="skills__name ">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-javascript icon-javascript fa-spinner"></i>
            <div>
              <h3 className="skills__name ">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-bootstrap icon-bootstrap fa-spinner"></i>
            <div>
              <h3 className="skills__name ">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-git icon-git fa-spinner"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level ">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-react icon-react fa-spinner"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
