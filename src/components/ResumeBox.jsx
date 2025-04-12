import React from "react";
import "./ResumeBox.css";

const ResumeBox = ({ item }) => {
  return (
    <div className="resume-box">
      <div className="resume-box__icon-wrapper">
        <img className="resume-box__img" src={item.image} alt="" />
      </div>
    </div>
  );
};

export default ResumeBox;
