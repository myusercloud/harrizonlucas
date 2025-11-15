import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt
} from "react-icons/fa";
import {
  SiDjango, SiPostgresql, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss
} from "react-icons/si";
import SectionTitle from "./ui/sectionTitle";

const techs = [
  { icon: FaReact, color: "text-[#61DBFB]", name: "React" },
  { icon: SiTailwindcss, color: "text-[#38BDF8]", name: "Tailwind CSS" },
  { icon: FaNodeJs, color: "text-[#3C873A]", name: "Node.js" },
  { icon: SiDjango, color: "text-[#0B4B33]", name: "Django" },
  { icon: SiPostgresql, color: "text-[#336791]", name: "PostgreSQL" },
  { icon: FaPython, color: "text-[#3776AB]", name: "Python" },
  { icon: SiJavascript, color: "text-[#F7DF1E]", name: "JavaScript" },
  { icon: SiHtml5, color: "text-[#E34C26]", name: "HTML5" },
  { icon: SiCss3, color: "text-[#264DE4]", name: "CSS3" },
  { icon: FaGitAlt, color: "text-[#F34F29]", name: "Git" },
];

const TechStack = () => {
  return (
    <section className="py-16 w-full px-6" id="TechStack">
      <SectionTitle title="Tech Stack" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        variants={{
          visible: {
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {techs.map((tech, i) => {
          const IconComp = tech.icon;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center p-4 
              bg-gray-900/40 backdrop-blur-md border border-gray-700 
              rounded-xl shadow-lg hover:shadow-xl 
              hover:-translate-y-2 transition-all duration-300"
              aria-label={tech.name}
            >
              <IconComp size={40} className={tech.color} />
              <p className="mt-3 text-sm font-medium text-gray-100">{tech.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default TechStack;
