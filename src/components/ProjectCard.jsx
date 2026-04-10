import React from "react";
import "./ProjectCard.css";
import { NavLink } from "react-router-dom";
import github from "../../public/images/GitHub.svg";

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
                  label.toLowerCase().includes("back-end")
                    ? "project-card__label--back"
                    : label.toLowerCase().includes("test")
                      ? "project-card__label--test"
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
                return (
                  <div key={item}>
                    <img src={item} alt="" className="project-card__icon" />
                  </div>
                );
              })}
            </section>
            <section className="project-card__link-icons-wrapper">
              <section className="project-card__link-icons">
                <NavLink to={item.url} target="_ blank">
                  <img src={github} alt="" style={{ height: "20px" }} />
                </NavLink>
              </section>
              {item.live && (
                <section className="project-card__link-icons">
                  <NavLink to={item.live} target="_blank">
                    <img
                      className="viewLiveIcon"
                      src="/images/liveicon.svg"
                      alt="Live preview"
                    />
                  </NavLink>
                </section>
              )}
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default ProjectCard;
