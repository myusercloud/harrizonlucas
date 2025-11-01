import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
      <Hero />
      <About />
      <ProjectsPreview />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Home;
