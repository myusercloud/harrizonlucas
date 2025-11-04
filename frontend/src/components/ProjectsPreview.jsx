import React from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, motion-powered portfolio built with React and Framer Motion.",
    stack: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "E-Commerce MVP",
    desc: "Minimal 3-page Django e-commerce site with admin CRUD and PostgreSQL.",
    stack: ["Django", "Bootstrap", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI Study Assistant",
    desc: "A Kotlin + Flask app that helps students organise notes and track study progress.",
    stack: ["Kotlin", "Flask", "Python"],
    link: "#",
  },
];

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-24 px-6 text-center">
      <SectionTitle title="Projects" />
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <MotionFadeIn key={i} direction="up" delay={i * 0.1}>
            <div className="bg-dark/40 p-6 rounded-2xl text-left shadow hover:shadow-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-accent">{project.title}</h3>
                <p className="mt-2 text-lightText/70">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, j) => (
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
                href={project.link}
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
