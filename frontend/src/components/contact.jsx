// src/components/Footer.jsx
const Contact = () => {
  return (
    // In Home.jsx after Projects, before Footer
<section id="contact" className="py-20 px-6 text-center">
  <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
  <p className="text-lightText/70 mb-6">
    I'm open to collaborations, full-time work, or just a chat. Reach out.
  </p>
  <a
    href="mailto:youremail@example.com"
    className="px-8 py-3 bg-accent text-dark rounded-lg"
  >
    Say Hello
  </a>
</section>

  );
};

export default Contact;
