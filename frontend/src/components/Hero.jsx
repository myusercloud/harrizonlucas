import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage2 from "../assets/myimage.jpg";

const Hero = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#TechStack" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("");

  // Scroll-based active tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const currentSection = [...navLinks]
        .reverse()
        .find(({ href }) => {
          const el = document.querySelector(href);
          return el && scrollPos >= el.offsetTop;
        });
      setActive(currentSection ? currentSection.href : "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <section
      id="hero"
      className="w-full px-6 py-10 flex flex-col justify-center items-center text-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="rounded-full overflow-hidden w-48 h-48 md:w-52 md:h-52 shadow-lg shadow-accent/20">
          <img
            src={heroImage2}
            alt="Harrizon Lucas"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="space-y-3 max-w-xs md:max-w-sm"
      >
        <p className="text-accent font-mono tracking-widest">Hi, I'm</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Harrizon <span className="text-accent">Lucas</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-lightText/80">
          Full-Stack Developer
        </h2>
        <p className="text-lightText/70 leading-relaxed">
          I build fast, reliable applications — combining full-stack engineering
          with data-driven thinking to deliver clean, scalable systems.
        </p>
      </motion.div>

      {/* Vertical Nav */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-center gap-4 mt-10"
      >
        {navLinks.map(({ name, href }) => (
          <a
            key={href}
            href={href}
            className={`font-mono tracking-wider transition-all ${
              active === href
                ? "text-accent font-semibold scale-105"
                : "text-lightText/60 hover:text-accent"
            }`}
          >
            {name}
          </a>
        ))}
      </motion.nav>
    </section>
  );
};

export default Hero;
