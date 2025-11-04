import React from "react";
import heroImage from "../assets/profile.png"; // replace with your image

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
  <h1 className="text-5xl md:text-6xl font-bold">
    Harrizon <span className="text-accent">Mutuma</span>
  </h1>
  <p className="mt-4 text-lg md:text-xl text-lightText/70 max-w-xl">
    I build clean full-stack apps. Node, React, Postgres — shipped with integrity.
  </p>
  <div className="mt-8 flex gap-6">
    <a
      href="#projects"
      className="px-6 py-3 bg-accent text-dark rounded-lg"
    >
      View Work
    </a>
    <a
      href="/resume.pdf"
      className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10"
    >
      Resume
    </a>
  </div>
</section>

  );
};

export default Hero;
