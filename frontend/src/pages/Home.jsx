import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import TechStack from "../components/TechStach";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
      <>
        <Navbar />
        <Hero />
        <About />
        <ProjectsPreview />
        <Footer />
      </>
  );
};

export default Home;
