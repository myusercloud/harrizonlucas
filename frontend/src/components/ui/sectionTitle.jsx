import { motion } from "framer-motion";

const SectionTitle = ({ number, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-12"
    >
      {/* Section Number */}
      <span className="text-accent font-mono text-lg md:text-xl">
        {number ? `0${number}.` : ""}
      </span>

      {/* Title Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-lightText whitespace-nowrap">
        {title}
      </h2>

      {/* Decorative Line */}
      <div className="hidden md:block h-[1px] flex-grow bg-lightText/20"></div>
    </motion.div>
  );
};

export default SectionTitle;
