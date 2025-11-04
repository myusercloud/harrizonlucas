import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/profile.png"; // your image path

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 max-w-6xl mx-auto gap-10"
    >
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center space-y-6"
      >
        <p className="text-accent font-mono tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Harrizon <span className="text-accent">Lucas</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-lightText/80 font-medium">
          I build clean, scalable full-stack applications.
        </h2>
        <p className="text-lightText/60 max-w-md">
          I’m a developer who enjoys crafting performant and accessible web
          experiences using Node, React, and PostgreSQL.
        </p>

        <div className="mt-4 flex gap-6 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-dark font-semibold rounded-lg shadow hover:shadow-accent/30 hover:bg-accent/90 transition-all"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative"
      >
        <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-accent/50 shadow-lg shadow-accent/20">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
