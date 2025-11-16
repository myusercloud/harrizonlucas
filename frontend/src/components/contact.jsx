import React from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import { FiMail, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <SectionTitle title="Contact" />

      <MotionFadeIn direction="up" className="max-w-2xl mx-auto mt-10">
        <p className="text-lightText/70 text-lg leading-relaxed">
          If you're looking for someone who can build quickly, solve real
          problems, and communicate clearly, I’d be glad to connect. Whether it's
          collaboration, freelance work, or a long-term role — I respond fast.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            href="mailto:lucasharrizon@gmail.com"
            variant="solid"
            icon={FiMail}
          >
            Say Hello
          </Button>

          <Button
            href="https://linkedin.com/in/harrizon-lucas"
            variant="outline"
            icon={FiLinkedin}
          >
            LinkedIn
          </Button>
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default Contact;
