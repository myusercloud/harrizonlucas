import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // or your scroll logic

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-dark2 bg-opacity-90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto flex justify-between p-6">
        <div className="text-accent font-bold">HM</div>
        <div className="space-x-8 text-lightText">
          <ScrollLink to="about" smooth>About</ScrollLink>
          <ScrollLink to="projects" smooth>Projects</ScrollLink>
          <ScrollLink to="contact" smooth>Contact</ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
