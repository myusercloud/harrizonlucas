import React, { useEffect, useState } from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend endpoint
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-12">Loading projects...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  return (
    <section id="projects" className="py-24 px-6 text-center">
      <SectionTitle title="Projects" />
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <MotionFadeIn key={project.id || i} direction="up" delay={i * 0.1}>
            <div className="bg-dark/40 p-6 rounded-2xl text-left shadow hover:shadow-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-accent">{project.title}</h3>
                <p className="mt-2 text-lightText/70">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.stack?.map((tech, j) => (
                    <li
                      key={j}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={project.link || "#"}
                variant="outline"
                icon={FiArrowUpRight}
                className="mt-6 self-start"
              >
                View Project
              </Button>
            </div>
          </MotionFadeIn>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
