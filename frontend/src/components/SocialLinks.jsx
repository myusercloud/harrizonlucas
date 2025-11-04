import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={22} />, link: "https://github.com/harrizon" },
  { icon: <FaLinkedin size={22} />, link: "https://linkedin.com/in/harrizon" },
  { icon: <FaTwitter size={22} />, link: "https://twitter.com/harrizon" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6 justify-center mt-6">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightText/70 hover:text-accent transition-all"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
