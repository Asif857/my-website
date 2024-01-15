import { PROJECTS } from "../projects";

import "./css/Projects.css";

export default function Projects() {
  const projects = PROJECTS.map((project) => {
    return (
      <li>
        <a href={project[1]} target="_blank" rel="noopener noreferrer">
          <h3>{project[0]}</h3>
        </a>
        <p>{project[2]}</p>
      </li>
    );
  });
  const github = (
    <div id="github">
      <p>Link to my GitHub - </p>
      <a
        href="https://github.com/Asif857"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit GitHub
      </a>
    </div>
  );
  return (
    <section id="projects">
      <div>
        <ul>
        <li>{github}</li>
          {projects}
        </ul>
      </div>
    </section>
  );
}
