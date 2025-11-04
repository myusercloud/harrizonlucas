import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      role="navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark2/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-accent font-extrabold text-xl cursor-pointer select-none">
          HM
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-lightText font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              offset={-80}
              duration={600}
              activeClass="text-accent border-b-2 border-accent"
              className="cursor-pointer hover:text-accent transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              onClick={() => setMenuOpen(false)}
              className="text-lightText text-2xl cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => setMenuOpen(true)}
              className="text-lightText text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark2/95 backdrop-blur-lg text-lightText flex flex-col items-center py-6 space-y-6 transition-all">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-accent text-lg"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
