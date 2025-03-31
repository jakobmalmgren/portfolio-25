import "./Resume.css";
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
];

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        <h1 className="resume__header">~ My toolbox ~</h1>
        <div className=" resume__objects">
          {resumeSkill.map((item) => {
            return <ResumeBox key={item.skillName} item={item} />;
          })}
          <h1 className="resume__header">~ My softskills ~</h1>
        </div>
      </div>
    </div>
  );
};

export default Resume;
