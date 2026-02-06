import { useState } from "react";

function ProjectCard({ project }) {

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card preview-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* preview image */}
      <div className={`preview ${hovered ? "show" : ""}`}>
        <img src={project.image} alt={project.title} />
      </div>

      <h3>{project.title}</h3>

      <p className="project-desc">
        {project.description}
      </p>

      <div className="tags">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;
