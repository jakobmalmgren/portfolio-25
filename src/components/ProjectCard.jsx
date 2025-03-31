import React from "react";
import "./ProjectCard.css";
import { NavLink } from "react-router-dom";
import github from "../../public/images/GitHub.svg";

import linked from "../../public/images/chain.svg";

const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <section className="project-card__innerdiv">
        <section className="project-card__item-label-wrapper">
          {Array.isArray(item.label) ? (
            item.label.map((label, index) => (
              <button
                key={index}
                className={
                  label.includes("Back-End")
                    ? "project-card__label--back"
                    : "project-card__label"
                }
              >
                {label}
              </button>
            ))
          ) : (
            <button className="project-card__label">{item.label}</button>
          )}
        </section>

        <section className="project-card__img-section">
          <img
            className="project-card__img"
            src={`/images/${item.image}`}
            alt=""
          />
        </section>
        <section className="project-card__text-section">
          <section className="project-card__text-top-wrapper">
            <h1 className="project-card__title">{item.title}</h1>
            <p className="project-card__paragraph">{item.info}</p>
          </section>
          <section className="project-card__lower-wrapper">
            <section className="project-card__icons">
              {item.techniques.map((item) => {
                return <img src={item} alt="" className="project-card__icon" />;
              })}
            </section>
            <section className="project-card__link-icons-wrapper">
              <section className="project-card__link-icons">
                <NavLink to={item.url}>
                  <img src={github} alt="" style={{ height: "20px" }} />
                </NavLink>
              </section>
              <section className="project-card__link-icons">
                <NavLink to={item.live}>
                  <img src={linked} alt="" style={{ height: "20px" }} />
                </NavLink>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default ProjectCard;
