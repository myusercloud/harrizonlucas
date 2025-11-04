// src/components/ProjectsPreview.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.error("Unexpected data:", data);
        setProjects([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setProjects([]);
    }
  };

  fetchProjects();
}, []);


  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-dark2 rounded-lg border border-lightText/10 hover:border-accent transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-lightText">
              {project.title}
            </h3>
            <p className="text-lightText/70 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline text-sm"
              >
                Visit →  
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
