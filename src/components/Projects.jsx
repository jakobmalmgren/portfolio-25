import "./Projects.css";
import ProjectCard from "./ProjectCard";
import data from "../data";

const Projects = () => {
  const newData = data.map((item) => {
    return (
      <div key={item.title}>
        <ProjectCard item={item} />
      </div>
    );
  });
  return (
    <div className="projects">
      <section className="projects__wrapper">{newData}</section>
    </div>
  );
};

export default Projects;
