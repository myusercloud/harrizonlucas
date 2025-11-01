// src/components/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-10 text-center bg-transparent">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/myusercloud"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/harrizon-lucas"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/the.harrizon"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
