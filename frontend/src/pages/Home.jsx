import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import Navbar from "../components/Navbar";
import Contact from "../components/contact";

const Home = () => {
  return (
      <>
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <ProjectsPreview />
        <Contact />
        <Footer />
      </>
  );
};

export default Home;
