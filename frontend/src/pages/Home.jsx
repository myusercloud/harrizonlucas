import React, { useEffect, lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Squares from "../components/Squares";
import LeftPanel from "../components/LeftPanel";
import { pageview } from "../utils/analytics"; // SPA pageview tracker
import { useLocation } from "react-router-dom";

// Lazy-loaded sections
const About = lazy(() => import("../components/About"));
const ProjectsPreview = lazy(() => import("../components/ProjectsPreview"));
const TechStack = lazy(() => import("../components/TechStack"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  const location = useLocation();

  // Dynamic SEO + GA pageview tracking
  useEffect(() => {
    const defaultTitle = "Harrizon Lucas | Full-Stack Developer Portfolio";
    const defaultDescription = "Portfolio of Harrizon Lucas, a Full-Stack Developer specializing in React, Node, Django, Tailwind, and AI.";

    document.title = defaultTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = defaultDescription;
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = defaultDescription;
      document.head.appendChild(m);
    }

    // Update canonical link
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) canonical.href = `https://yourdomain.com${location.pathname}`;
    else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = `https://yourdomain.com${location.pathname}`;
      document.head.appendChild(link);
    }

    // GA pageview
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="relative w-full">
      {/* Global squares background */}
      <div className="fixed inset-0 -z-10 h-full">
        <Squares />
      </div>

      {/* Mobile Left Panel */}
      <div className="block md:hidden">
        <LeftPanel />
      </div>

      {/* Desktop Left Panel */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-[40%] overflow-y-auto">
        <LeftPanel />
      </div>

      {/* Main Content */}
      <main className="w-full md:ml-[40%] px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <Suspense fallback={<div className="py-20 text-center text-lightText/50">Loading…</div>}>
          <About />
          <ProjectsPreview />
          <TechStack />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
