import React from "react";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <SectionTitle title="Contact" />
      <MotionFadeIn direction="up" className="max-w-xl mx-auto mt-10">
        <p className="text-lightText/70 text-lg">
          I’m always open to collaboration, freelance opportunities, or just a
          good dev conversation. Drop me a message and let’s connect.
        </p>
        <Button
          href="mailto:harrizon@example.com"
          variant="solid"
          icon={FiMail}
          className="mt-8"
        >
          Send Email
        </Button>
      </MotionFadeIn>
    </section>
  );
};

export default Contact;
