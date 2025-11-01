// src/pages/Admin.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectManager from "../components/ProjectManager";
import GalleryManager from "../components/GalleryManager";
import Settings from "../components/Settings";

const Admin = () => {
  const [active, setActive] = useState("Projects");

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 overflow-y-auto">
        {active === "Projects" && <ProjectManager />}
        {active === "Gallery" && <GalleryManager />}
        {active === "Settings" && <Settings />}
      </main>
    </div>
  );
};

export default Admin;
