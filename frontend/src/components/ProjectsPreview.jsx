// src/components/ProjectsPreview.jsx
import { useEffect, useState } from "react";

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-3">
              {project.description}
            </p>
            <a
              href={project.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
