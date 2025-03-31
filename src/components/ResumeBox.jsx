import React from "react";
import "./ResumeBox.css";

const ResumeBox = ({ item }) => {
  return (
    <div className="resume-box">
      <div className="resume-box__innerdiv ">
        <div className="resume-box__icon-wrapper">
          <img className="resume-box__img" src={item.image} alt="" />
        </div>
        <div className="resume-box__about">
          <h1 className="resume-box__skillName">{item.skillName}</h1>
          <p className="resume-box__area">{item.whatArea}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
