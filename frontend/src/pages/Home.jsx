import LeftPanel from "../components/LeftPanel";
import About from "../components/About";
import TechStack from "../components/TechStack";
import ProjectsPreview from "../components/ProjectsPreview";
import Contact from "../components/contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen">

      {/* === MOBILE LAYOUT === */}
      <div className="block md:hidden">
        <LeftPanel />
      </div>

      {/* === DESKTOP LEFT PANEL === */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-[40%] overflow-y-auto ">
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
          overflow-x-hidden
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
