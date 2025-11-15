import LeftPanel from "../components/LeftPanel";
import About from "../components/About";
import TechStack from "../components/TechStack";
import ProjectsPreview from "../components/ProjectsPreview";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Squares from "../components/Squares";

const Home = () => {
  return (
    <div className="relative w-full">
      
      {/* === GLOBAL SQUARES BACKGROUND === */}
      <div className="fixed inset-0 -z-10 h-full">
        <Squares />
      </div>

      {/* === MOBILE LAYOUT === */}
      <div className="block md:hidden">
        <LeftPanel />
      </div>

      {/* === DESKTOP LEFT PANEL === */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-[40%] overflow-y-auto">
        <LeftPanel />
      </div>

      {/* === MAIN CONTENT === */}
      <main
        className="
          w-full
          md:ml-[40%]
          px-4 sm:px-6 lg:px-12
          max-w-4xl
          mx-auto
        "
      >
        <About />
        <ProjectsPreview />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
