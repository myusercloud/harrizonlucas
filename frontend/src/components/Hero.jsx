import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/profile.png";

const Hero = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#TechStack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("");

  // Track which section is active
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "";
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && scrollPos >= section.offsetTop) current = href;
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
      className="min-h-screen flex flex-col justify-start items-center text-center px-6 pt-0 gap-6"
    >
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mt-10"
      >
        <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-accent/50 shadow-lg shadow-accent/20 mx-auto">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col justify-center items-center space-y-4 mt-6"
      >
        <p className="text-accent font-mono tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl font-extrabold">
          Harrizon <span className="text-accent">Lucas</span>
        </h1>
        <h2 className="text-2xl text-lightText/80 font-medium">
          I build clean, scalable full-stack applications.
        </h2>
        <p className="text-lightText/60 max-w-xs">
          I’m a developer who enjoys crafting performant and accessible web
          experiences using Node, React, and PostgreSQL.
        </p>

        
      </motion.div>

      {/* Bottom Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="flex flex-col items-center space-y-4 mt-12 mb-10"
      >
        {navLinks.map(({ name, href }, i) => (
          <motion.a
            key={i}
            href={href}
            onClick={() => setActive(href)}
            className={`font-mono uppercase tracking-widest transition-all ${
              active === href
                ? "text-accent text-base font-bold scale-110"
                : "text-lightText/70 hover:text-accent text-sm"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {name}
          </motion.a>
        ))}
      </motion.nav>
    </section>
  );
};

export default Hero;
