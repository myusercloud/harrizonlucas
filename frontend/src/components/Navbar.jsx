import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold tracking-tight">Harrizon.dev</h1>
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#stack" className="hover:text-teal-400">Tech Stack</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
        <button className="md:hidden bg-teal-500 px-3 py-2 rounded text-sm">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
