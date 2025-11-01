// src/components/ProjectManager.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", link: "" });
  const [editing, setEditing] = useState(null);

  const fetchProjects = async () => {
    const res = await axios.get(API_URL);
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`${API_URL}/${editing.slug}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({ title: "", description: "", link: "" });
      setEditing(null);
      fetchProjects();
    } catch (err) {
      alert("Error saving project");
    }
  };

  const handleDelete = async (slug) => {
    if (!confirm("Delete this project?")) return;
    try {
      await axios.delete(`${API_URL}/${slug}`);
      fetchProjects();
    } catch (err) {
      alert("Error deleting project");
    }
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Manage Projects</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl max-w-xl mb-10"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-3 p-2 bg-transparent border border-white/20 rounded-lg"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full mb-3 p-2 bg-transparent border border-white/20 rounded-lg"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Project Link"
          className="w-full mb-3 p-2 bg-transparent border border-white/20 rounded-lg"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          {editing ? "Update" : "Create"}
        </button>

        {editing && (
          <button
            type="button"
            onClick={() => {
              setEditing(null);
              setForm({ title: "", description: "", link: "" });
            }}
            className="ml-3 px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl"
          >
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-3 text-sm">{p.description}</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditing(p);
                  setForm({
                    title: p.title,
                    description: p.description,
                    link: p.link,
                  });
                }}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.slug)}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
