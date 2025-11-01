// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-950 to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Harrizon <span className="text-blue-500">Lucas</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6">
        Full-Stack Developer || Data Scientist
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-white/20 hover:bg-white/10 transition rounded-lg font-medium"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
