// src/pages/Admin.jsx
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProjectManager from "../components/ProjectManager";
import GalleryManager from "../components/GalleryManager";
import Settings from "../components/Settings";

const Admin = () => {
    const [active, setActive] = useState("Projects");

    // Initialize Firebase/Auth (MANDATORY for Canvas environment, even if not used by logic)
    // The actual logic does not use firebase, but this structure ensures stability.
    useEffect(() => {
        // Mocking environment globals setup
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : { apiKey: "mock-key", projectId: "mock-id" };
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
        
        console.log("App ID:", appId);
        console.log("Firebase Config:", firebaseConfig);
        console.log("Initial Auth Token Available:", !!initialAuthToken);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-950 text-gray-100 font-sans">
            <style>{`
                /* Simple CSS for clean typography and background */
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', sans-serif;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.3s ease-out;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            
            {/* Sidebar for Desktop */}
            <div className="hidden lg:flex">
                <Sidebar active={active} setActive={setActive} />
            </div>

            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Mobile Header/Navigation */}
                <div className="lg:hidden p-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center shadow-lg">
                    <h1 className="text-xl font-bold text-indigo-400">Admin</h1>
                    <select
                        value={active}
                        onChange={(e) => setActive(e.target.value)}
                        className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="Projects">Projects</option>
                        <option value="Gallery">Gallery</option>
                        <option value="Settings">Settings</option>
                    </select>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    {active === "Projects" && <ProjectManager />}
                    {active === "Gallery" && <GalleryManager />}
                    {active === "Settings" && <Settings />}
                </div>
            </main>
        </div>
    );
};


export default Admin;
