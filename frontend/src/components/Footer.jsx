import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="py-12 px-6 text-center border-t border-accent/20">
      <SocialLinks />
      <p className="mt-6 text-lightText/60 text-sm">
        © {new Date().getFullYear()} Harrizon Lucas — Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
