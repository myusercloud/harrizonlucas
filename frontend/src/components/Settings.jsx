import { Settings as SettingsIcon } from "lucide-react";

// src/components/Settings.jsx
const Settings = () => (
    <div className="p-8 lg:p-12 w-full">
        <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700/50 pb-4">
            <SettingsIcon className="inline-block w-8 h-8 mr-3 text-indigo-400" />
            Application Settings
        </h1>
        <div className="bg-gray-800/60 border border-gray-700/50 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl space-y-6">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-200">Authentication Control</h2>
                <p className="text-gray-400">Future implementation for secure admin login and user roles.</p>
                <button className="px-6 py-2 mt-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                    Reset Admin Password
                </button>
            </div>
            
            <hr className="border-gray-700/50" />

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-200">Theme Preference</h2>
                <p className="text-gray-400">Control application visuals (e.g., light/dark mode, accent color).</p>
                <div className="flex gap-4 mt-2">
                    <span className="px-4 py-2 rounded-full bg-indigo-500 text-white text-sm">Dark Theme (Active)</span>
                    <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm opacity-50 cursor-not-allowed">Light Theme</span>
                </div>
            </div>
        </div>
    </div>
);


export default Settings;