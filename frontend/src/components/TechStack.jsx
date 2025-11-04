import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import SectionTitle from "./ui/sectionTitle";

const techs = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={40} color="#3C873A" />, name: "Node.js" },
  { icon: <SiDjango size={40} color="#07442dff" />, name: "Django" },
  { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 size={40} color="#E34C26" />, name: "HTML5" },
  { icon: <SiCss3 size={40} color="#264DE4" />, name: "CSS3" },
  { icon: <FaGitAlt size={40} color="#F34F29" />, name: "Git" },
];

const TechStack = () => {
  return (
    <section className="py-16 w-full px-6" id="TechStack">
      <SectionTitle title="TechStack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
          >
            {tech.icon}
            <p className="mt-3 text-sm font-medium text-gray-100">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
