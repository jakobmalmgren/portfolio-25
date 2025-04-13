import React, { useState } from "react";
import "./About.css";
import img from "../images/jakobside.jpg";
import ResumeBox from "./ResumeBox";
import { PiBooksThin } from "react-icons/pi";
import { BsCheck2 } from "react-icons/bs";

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
    link: "../../public/images/frontenddeveloper.pdf",
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

// "Working with various CSS methods",
// "Version control workflows (Git Flow)",
// "Folder structure & Clean code",
// "Async code",
// "API:s",
// "Responsive Web Design",
// "UI/UX Thinking",
// "Agile / Scrum",

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
                      <BsCheck2 className="about__check" />
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
