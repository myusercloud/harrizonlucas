import React from "react";
import { FaCode, FaRobot, FaAndroid, FaDatabase } from "react-icons/fa";
import MotionFadeIn from "./ui/MotionFadeIn";
import SectionTitle from "./ui/sectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 w-full">
      <SectionTitle title="About Me" />

      <div className="max-w-5xl mt-10 flex flex-col gap-12">

        {/* TEXT SECTION */}
        <MotionFadeIn direction="left" className="text-center md:text-left">
          <p className="text-lightText/80 text-lg leading-relaxed">
            I'm Harrizon — a developer who builds fast, reliable and intentional
            digital experiences. I blend full-stack engineering with data-driven
            thinking to create solutions that are practical, scalable, and clean.
          </p>

          <p className="mt-4 text-lightText/70">
            My core stack includes
            <span className="text-accent font-semibold">
              {" "}React, Node/Express, Django, and Postgres
            </span>. I'm currently sharpening my edge in AI integration,
            automation, and modern Android development with Kotlin.
          </p>

          <p className="mt-4 text-lightText/70">
            I value clarity, thoughtful UI, and code that doesn’t fight you.
            If it isn’t designed with intent, it won’t make it into my work.
          </p>
        </MotionFadeIn>

        {/* SNAPSHOT (GRID) */}
        <MotionFadeIn
          direction="right"
          className="bg-gray-900/40 p-8 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold text-lightText mb-6 ">
            Quick Snapshot — What Harrizon Does
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* ITEM 1 */}
            <div className="flex items-start gap-3">
              <FaCode className="text-accent text-2xl" />
              <p className="text-lightText/70">
                Full-Stack Development (React, Node, Django)
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-3">
              <FaDatabase className="text-accent text-2xl" />
              <p className="text-lightText/70">
                Data Science & Analytics (UoN)
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-3">
              <FaAndroid className="text-accent text-2xl" />
              <p className="text-lightText/70">
                Android Development (Kotlin + Jetpack Compose)
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-3">
              <FaRobot className="text-accent text-2xl" />
              <p className="text-lightText/70">
                AI, Automation & Modern UI Engineering
              </p>
            </div>
          </div>
        </MotionFadeIn>

      </div>
    </section>
  );
};

export default About;
