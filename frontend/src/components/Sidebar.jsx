// src/components/Sidebar.jsx
import { LayoutDashboard, BookOpen, Settings as SettingsIcon, Image, } from 'lucide-react';


const Sidebar = ({ active, setActive }) => {
    const navItems = [
        { name: "Projects", icon: BookOpen },
        { name: "Gallery", icon: Image },
        { name: "Settings", icon: SettingsIcon },
    ];

    return (
        <div className="w-64 flex flex-col p-6 bg-gray-900 border-r border-gray-800 shadow-xl">
            <div className="flex items-center text-2xl font-extrabold text-indigo-400 mb-10">
                <LayoutDashboard className="w-7 h-7 mr-2" />
                Admin Panel
            </div>
            <nav className="space-y-3">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group ${
                            active === item.name
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                                : "text-gray-400 hover:bg-gray-800 hover:text-indigo-400"
                        }`}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;