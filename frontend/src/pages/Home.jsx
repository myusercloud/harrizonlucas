import LeftPanel from "../components/LeftPanel";
import About from "../components/About";
import TechStack from "../components/TechStack";
import ProjectsPreview from "../components/ProjectsPreview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex">
      {/* Left fixed panel */}
      <LeftPanel />

      {/* Right scrollable content */}
      <main className="md:ml-[35%] w-full">
        <About />
        <TechStack />
        <ProjectsPreview />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
