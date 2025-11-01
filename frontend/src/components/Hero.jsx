import React from "react";
import heroImage from "../assets/profile.png"; // replace with your image

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-800 text-white px-6 md:px-16 pt-20"
    >
      {/* Left: Text */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-gray-300">Hi, I’m<span className="block text-teal-400">Harrizon</span></span>
          
          <span className="block text-gray-300">Developer + Data Scientist</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
          I build visually appealing and efficient digital experiences that
          merge design precision with engineering logic.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Harrizon"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-[0_0_40px_-10px_rgba(20,200,200,0.6)]"
        />
      </div>
    </section>
  );
};

export default Hero;
