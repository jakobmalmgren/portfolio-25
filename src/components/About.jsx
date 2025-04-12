import React from "react";
import "./About.css";
import img from "../images/jakobside.jpg";
import ResumeBox from "./ResumeBox";

const resumeSkill = [
  {
    image: "/images/atom.png",
    skillName: "React",
    whatArea: "Framework",
  },
  {
    image: "/images/Firebase.svg",
    skillName: "Firebase",
    whatArea: "Database",
  },
  {
    image: "/images/figma.png",
    skillName: "Figma",
    whatArea: "Design",
  },
  {
    image: "/images/GitHub.svg",
    skillName: "Github",
    whatArea: "VCS",
  },
  {
    image: "/images/sass.png",
    skillName: "SASS",
    whatArea: "Extenssion for css",
  },
  {
    image: "/images/tailwind.png",
    skillName: "Tailwind",
    whatArea: "CSS framework",
  },
  {
    image: "/images/redux.svg",
    skillName: "Redux",
    whatArea: "State management tool",
  },
  {
    image: "/images/typescript.png",
    skillName: "Typescript",
    whatArea: "JS with superpowers",
  },
  {
    image: "/images/java-script.png",
    skillName: "Javascript",
    whatArea: "Coding language",
  },
  {
    image: "/images/html.png",
    skillName: "HTML",
    whatArea: "Structure",
  },
  {
    image: "/images/css-3.png",
    skillName: "CSS",
    whatArea: "Design",
  },
  {
    image: "/images/bootstrap.svg",
    skillName: "Bootstrap",
    whatArea: "CSS library",
  },
  {
    image: "/images/Express.svg",
    skillName: "Express JS",
    whatArea: "Node JS framework",
  },
  {
    image: "/images/Node.js.svg",
    skillName: "Node JS",
    whatArea: "Back-end language",
  },
  {
    image: "/images/MongoDB.svg",
    skillName: "Mongo DB",
    whatArea: "Database",
  },
  {
    image: "/images/Swagger.svg",
    skillName: "Swagger",
    whatArea: "Documentation",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="about__img-content">
        <div className="about__img-wrapper">
          <img src={img} alt="" className="about__img" />
        </div>
      </div>

      <section className="about__text-content">
        <section className="about__text-content-wrapper">
          <section className="about__text">
            <h1 className="about__h">About Me</h1>
            <p className="about__p">
              Hi! I'm someone who genuinely enjoys learning and exploring new
              things — especially when it comes to coding. I love building
              projects, solving problems, and constantly growing as a developer.
              At the same time, I’m super passionate about sports and traveling.
              Whether I’m exploring new cities or watching a big game, I find a
              lot of inspiration in movement, energy, and new experiences. For
              me, tech and adventure go hand in hand — I love the balance
              between creating with code and living life to the fullest.
            </p>
          </section>
          <section className="about__link-section">
            <div className="about__link-section-wrapper">
              <div>Toolset</div>
              <div>Skills</div>
              <div>Education</div>
            </div>
            <div className="about__data-section">
              {resumeSkill.map((item) => {
                return <ResumeBox key={item.skillName} item={item} />;
              })}
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
