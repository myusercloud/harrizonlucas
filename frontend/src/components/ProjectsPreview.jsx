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
    <section id="projects" className="py-20 px-4 sm:px-6 text-left">
      <SectionTitle title="Projects" />

      <div className="max-w-3xl mt-10 flex flex-col gap-8">
        {projects.map((project, i) => (
          <MotionFadeIn key={project.id || i} direction="up" delay={i * 0.08}>
            <div className="group flex flex-col sm:flex-row items-start gap-4 border-b border-gray-800 pb-6 hover:opacity-90 transition-all duration-300">
              
              {/* Image */}
              {project.image && (
                <div className="w-full sm:w-1/5 md:w-1/6 overflow-hidden rounded-md flex-shrink-0">
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.title}
                    className="object-cover w-full h-20 sm:h-24 md:h-24 rounded-md transition duration-500"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-gray-400 text-sm leading-snug line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-2">
                  <Button
                    variant="link"
                    icon={FiArrowUpRight}
                    className="text-xs text-white-400  hover:underline py-1 px-2"
                    onClick={() => window.open(project.link || "#", "_blank")}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
