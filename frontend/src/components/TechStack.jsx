import React from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiDjango,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiTailwindcss size={40} />, name: "TailwindCSS" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <FaPython size={40} />, name: "Python" },
  { icon: <SiDjango size={40} />, name: "Django" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 text-center">
      <SectionTitle title="Tech Stack" />
      <MotionFadeIn direction="up" className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-dark/40 p-6 rounded-xl shadow hover:shadow-accent/20 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-lightText/80">{skill.name}</p>
          </div>
        ))}
      </MotionFadeIn>
    </section>
  );
};

export default TechStack;
