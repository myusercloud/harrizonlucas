import React from "react";
import MotionFadeIn from "./ui/MotionFadeIn";
import SectionTitle from "./ui/sectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 w-full">
      <SectionTitle title="About Me" />

      {/* TEXT SECTION */}
      <div className="max-w-5xl mt-10 flex flex-col gap-10">
        <MotionFadeIn direction="left" className="text-center md:text-left">
          <p className="text-lightText/80 text-lg leading-relaxed">
            I’m Harrizon — a developer who blends full-stack engineering with
            data-driven thinking. I build systems that are fast, scalable,
            and actually solve real problems.
          </p>

          <p className="mt-4 text-lightText/70">
            My core stack revolves around
            <span className="text-accent font-semibold">
              {" "}React, Node/Express, Django, Postgres
            </span>,
            with a growing focus on AI, automation, and clean architecture.
          </p>

          <p className="mt-4 text-lightText/70">
            I care about clarity, reliability, and shipping work that feels polished —
            from UI motion to backend logic. If it isn’t intentional, I don’t build it.
          </p>
        </MotionFadeIn>

        {/* SNAPSHOT BELOW TEXT */}
        <MotionFadeIn
          direction="right"
          className="flex-1 bg-gray-900/40 p-6 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold text-lightText mb-4">
            Quick Snapshot — What Harrizon Does
          </h3>

          <ul className="space-y-2 text-lightText/70">
            <li>• Full-Stack Dev (React, Node, Django)</li>
            <li>• Data Science & Analytics Student</li>
            <li>• Android + Kotlin Enthusiast</li>
            <li>• Passion for AI, Automation & Modern UI</li>
          </ul>
        </MotionFadeIn>
      </div>
    </section>
  );
};

export default About;
