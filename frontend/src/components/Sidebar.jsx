// src/components/Sidebar.jsx
import { FaProjectDiagram, FaImages, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ active, setActive }) => {
  const menu = [
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Gallery", icon: <FaImages /> },
    { name: "Settings", icon: <FaCogs /> },
  ];

  return (
    <aside className="w-64 h-screen bg-white/5 backdrop-blur-md border-r border-white/10 flex flex-col p-5">
      <h2 className="text-2xl font-bold mb-10 text-center">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              active === item.name
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-white/10"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          onClick={() => alert("Implement logout later")}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 px-4 py-2"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
