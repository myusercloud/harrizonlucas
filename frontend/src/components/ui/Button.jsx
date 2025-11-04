import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({
  children,
  href,
  variant = "solid", // "solid" | "outline"
  onClick,
  icon: Icon,
  className = "",
  delay = 0,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300";

  const styles = {
    solid: "bg-accent text-dark hover:bg-accent/90 shadow hover:shadow-accent/30",
    outline:
      "border border-accent text-accent hover:bg-accent/10 hover:text-accent/90",
  };

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5, ease: "easeOut" },
  };

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} className="ml-1" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      {...motionProps}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outline"]),
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default Button;
