import React from "react";
import MotionFadeIn from "./ui/MotionFadeIn";
import SectionTitle from "./ui/sectionTitle";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 w-full">

      <SectionTitle title="About Me" />
      <div className="max-w-5xl mt-10 flex flex-col md:flex-row gap-10">

        <MotionFadeIn direction="left" className="flex-1">
          
        </MotionFadeIn>

        <MotionFadeIn direction="right" className="flex-1 text-center md:text-left">
          <p className="text-lightText/80 text-lg leading-relaxed">
            I’m Harrizon, a full-stack developer who loves clean design,
            purposeful code, and building solutions that actually make sense.
            I work with <span className="text-accent font-semibold">React, Node with Express, and Postgres</span> —
            focusing on performance, maintainability, and elegance in every project.
          </p>
          <p className="mt-4 text-lightText/70">
            I thrive at the intersection of logic and creativity — crafting UIs
            that feel natural while ensuring solid backend architecture.
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
};

export default About;
