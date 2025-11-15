import React, { useEffect, useState } from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

const API_URL = "http://localhost:5000/api/projects";

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Optimised fetch
  const loadProjects = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to load projects");

      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading)
    return (
      <section className="py-20 px-4 sm:px-6">
        <SectionTitle title="Projects" />
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse h-24 bg-gray-800 rounded-lg"
            ></div>
          ))}
        </div>
      </section>
    );

  if (error)
    return (
      <p className="text-center mt-12 text-red-500 font-medium">{error}</p>
    );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 text-left">
      <SectionTitle title="Projects" />

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <MotionFadeIn key={project.id || i} direction="up" delay={i * 0.06}>
            <div className="group flex items-start gap-4 border-b border-gray-800 pb-6 hover:opacity-90 transition-all duration-300">

              {/* Thumbnail */}
              {project.image && (
                <div className="w-20 sm:w-24 md:w-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              )}

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-1 text-gray-400 text-sm leading-snug line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-2">
                  <Button
                    variant="link"
                    icon={FiArrowUpRight}
                    className="text-xs text-black/80 hover:underline"
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
