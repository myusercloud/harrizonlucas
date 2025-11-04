import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialLinks from "./SocialLinks";

const LeftPanel = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-[35%]  px-6 py-12">
    
      <Hero />
      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
};

export default LeftPanel;
