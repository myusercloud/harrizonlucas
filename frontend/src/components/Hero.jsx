import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage2 from "../assets/myimage.jpg";

const Hero = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#TechStack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("");

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      let current = "";
      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && pos >= el.offsetTop) current = href;
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="
        w-full px-6 py-12
        flex flex-col items-center text-center 
        md:fixed md:left-0 md:top-0 md:h-screen md:w-[40%]
        md:justify-center md:text-left
      "
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 md:mb-10"
      >
        <div className="rounded-full overflow-hidden w-60 h-60 md:w-48 md:h-48 border-4 border-accent/40 shadow-md shadow-accent/10">
          <img
            src={heroImage2}
            alt="Harrizon Lucas"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="space-y-4 max-w-sm"
      >
        <p className="text-accent font-mono tracking-widest md:text-left">
          Hi, I'm
        </p>

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

      {/* NAVIGATION */}
      <motion.nav
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="
          flex mt-10 gap-6
          md:flex-col md:gap-4 md:mt-12
        "
      >
        {navLinks.map(({ name, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            className={`
              font-mono tracking-wider transition-all 
              ${
                active === href
                  ? "text-accent font-semibold scale-[1.08]"
                  : "text-lightText/60 hover:text-accent"
              }
            `}
          >
            {name}
          </a>
        ))}
      </motion.nav>
    </section>
  );
};

export default Hero;
