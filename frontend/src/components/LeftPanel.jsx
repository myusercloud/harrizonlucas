import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialLinks from "./SocialLinks";

const LeftPanel = () => {
  return (
    <div className="flex flex-col px-6 py-12 h-full">
      <Hero />

      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
};

export default LeftPanel;
