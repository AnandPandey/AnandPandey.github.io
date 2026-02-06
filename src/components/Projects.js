import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {

  const [filter, setFilter] = useState("All");

  const allTech = ["All", ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="filters">
        {allTech.map((t) => (
          <button
            key={t}
            className={filter === t ? "active" : ""}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
