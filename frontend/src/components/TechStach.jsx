import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

const techs = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={40} color="#3C873A" />, name: "Node.js" },
  { icon: <SiDjango size={40} color="#092E20" />, name: "Django" },
  { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 size={40} color="#E34C26" />, name: "HTML5" },
  { icon: <SiCss3 size={40} color="#264DE4" />, name: "CSS3" },
  { icon: <FaGitAlt size={40} color="#F34F29" />, name: "Git" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-110"
          >
            {tech.icon}
            <p className="mt-2 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
