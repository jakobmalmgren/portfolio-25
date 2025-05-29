import React, { useState } from "react";
import "./About.css";
import img from "../images/jakobside.jpg";
import ResumeBox from "./ResumeBox";
import { PiBooksThin } from "react-icons/pi";

const education = [
  {
    education: "The Front End Developer Bootcamp, Sundsgarden",
    link: "/images/bootcamp.pdf",
    time: "16th of August 2021 - 17th of Januari 2022",
  },
  {
    education: "Advanced React, Scrimba",
    link: "/images/advancedReact.pdf",
    time: "10th of June 2022 - 16th of Januari 2023",
  },
  {
    education: "The Front End Developer Career Path, Scrimba",
    link: "/images/frontenddeveloper.pdf",
    time: "16th of June 2022 - 17th of Januari 2023",
  },

  {
    education: "Javascript Fullstack Developer, YH Gothenburg",
    time: "Ongoing...",
  },
];
const skills = [
  "Communication & Collaboration",
  "English - Native",
  "Swedish - Native",
  "Problemsolver",
  "Teamplayer",
  "Creative thinker",
  "Adaptable",
  "Self-driven",
  "Open to feedback",
  "Curious and eager to learn",
  "Structured and organized",
  "Positive attitude",
  "Sense of humor",
];

const resumeSkill = [
  {
    image: "/images/atom.png",
  },
  {
    image: "/images/Firebase.svg",
  },
  {
    image: "/images/figma.png",
  },
  {
    image: "/images/GitHub.svg",
  },
  {
    image: "/images/sass.png",
  },
  {
    image: "/images/tailwind.png",
  },
  {
    image: "/images/redux.svg",
  },
  {
    image: "/images/typescript.png",
  },
  {
    image: "/images/java-script.png",
  },
  {
    image: "/images/html.png",
  },
  {
    image: "/images/css-3.png",
  },
  {
    image: "/images/bootstrap.svg",
  },
  {
    image: "/images/Express.svg",
  },
  {
    image: "/images/Node.js.svg",
  },
  {
    image: "/images/MongoDB.svg",
  },
  {
    image: "/images/Swagger.svg",
  },
  {
    image: "/images/postgresql.svg",
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("toolset");

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
              things, especially when it comes to coding. I love building
              projects, solving problems, and constantly growing as a developer.
              At the same time, I’m super passionate about sports and traveling.
              Whether I’m exploring new cities or watching a big game, I find a
              lot of inspiration in movement, energy, and new experiences. For
              me, tech and adventure go hand in hand. I love the balance between
              creating with code and living life to the fullest.
            </p>
          </section>
          <section className="about__link-section">
            <div className="about__link-section-wrapper">
              <div
                className={activeSection === "toolset" ? "link active" : "link"}
                onClick={() => setActiveSection("toolset")}
              >
                Toolset
              </div>
              <div
                className={activeSection === "skills" ? "link active" : "link"}
                onClick={() => setActiveSection("skills")}
              >
                Softskills
              </div>
              <div
                className={
                  activeSection === "education" ? "link active" : "link"
                }
                onClick={() => setActiveSection("education")}
              >
                Education
              </div>
            </div>

            {activeSection === "toolset" && (
              <div className="about__toolset-section">
                {resumeSkill.map((item) => {
                  return <ResumeBox key={item.skillName} item={item} />;
                })}
              </div>
            )}
            {activeSection === "skills" && (
              <div className="about__skills-section">
                {skills.map((item) => {
                  return (
                    <div className="about__skills-wrapper">
                      <p> {item}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {activeSection === "education" && (
              <div className="about__education-section">
                {education.map((item) => {
                  return (
                    <a href={item.link} target="blank">
                      <section className="about__education-wrapper">
                        <div className="about__edu-section">
                          <p className="about__edu-spec-education">
                            <PiBooksThin />
                            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
                            {item.education}
                          </p>
                          <p>{item.time}</p>
                          <a href={item.link} target="blank">
                            Cerfification
                          </a>
                        </div>
                      </section>
                    </a>
                  );
                })}
              </div>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
