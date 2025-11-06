import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiEdit2, FiTrash2 } from "react-icons/fi";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import ConfirmationModal from "./ConfirmationModal";

const API_URL = "http://localhost:5000/api/projects";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({ title: "", description: "", link: "", image: "" });
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Fetch all projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Reset form
  const resetForm = () => {
    setEditing(null);
    setForm({ title: "", description: "", link: "", image: "" });
  };

  // Submit form (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("link", form.link || "");
      if (form.image && typeof form.image !== "string") {
        formData.append("image", form.image); // only append if it's a new file
      }

      const method = editing ? "PUT" : "POST";
      const url = editing ? `${API_URL}/${editing.slug}` : API_URL;

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Failed to save project");

      resetForm();
      fetchProjects();
    } catch (err) {
      setModalContent({
        title: "Error",
        message: err.message,
        confirmText: "Close",
        onConfirm: () => setModalOpen(false),
        isAlert: true,
      });
      setModalOpen(true);
    }
  };

  // Delete project
  const handleDelete = (project) => {
    setModalContent({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete "${project.title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmStyle: "bg-red-600 hover:bg-red-700",
      onConfirm: async () => {
        try {
          const res = await fetch(`${API_URL}/${project.slug}`, { method: "DELETE" });
          if (!res.ok) throw new Error("Delete failed");
          fetchProjects();
          setModalOpen(false);
        } catch (err) {
          setModalContent({
            title: "Error",
            message: err.message,
            confirmText: "Close",
            onConfirm: () => setModalOpen(false),
            isAlert: true,
          });
          setModalOpen(true);
        }
      },
      onCancel: () => setModalOpen(false),
    });
    setModalOpen(true);
  };

  // Edit project
  const handleEdit = (project) => {
    setEditing(project);
    setForm({
      title: project.title,
      description: project.description,
      link: project.link,
      image: project.image || "",
    });
  };

  if (loading) return <p className="text-center mt-12">Loading projects...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  return (
    <section className="py-12 px-6">
      <SectionTitle title="Project Manager" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl mb-12 shadow-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-indigo-400">
          {editing ? "Edit Project" : "Create New Project"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-lg bg-gray-700 text-white"
        />
        <input
          type="url"
          name="link"
          placeholder="Project Link (optional)"
          value={form.link}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="w-full p-3 rounded-lg bg-gray-700 text-white"
        />

        {/* Image Preview */}
        {form.image && typeof form.image !== "string" && (
          <img
            src={URL.createObjectURL(form.image)}
            alt="Preview"
            className="mb-4 rounded-xl h-48 object-cover"
          />
        )}

        <div className="flex gap-4">
          <Button type="submit">{editing ? "Update Project" : "Create Project"}</Button>
          {editing && (
            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-lg bg-gray-600 text-white">
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <MotionFadeIn key={project.id || i} direction="up" delay={i * 0.05}>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between h-full">
              {project.image && (
                <img src={`http://localhost:5000${project.image}`} alt={project.title} className="mb-4 rounded-xl h-48 object-cover" />
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Button href={project.link || "#"} icon={FiArrowUpRight} variant="outline">
                  View
                </Button>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(project)} className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
                    <FiEdit2 />
                  </button>
                  <button onClick={() => handleDelete(project)} className="p-2 bg-red-600 rounded-lg text-white hover:bg-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        ))}
      </div>

      <ConfirmationModal
        isOpen={modalOpen}
        title={modalContent.title}
        message={modalContent.message}
        onConfirm={modalContent.onConfirm}
        onCancel={modalContent.onCancel}
        confirmText={modalContent.confirmText}
        cancelText={modalContent.cancelText}
        isAlert={modalContent.isAlert}
        confirmStyle={modalContent.confirmStyle}
      />
    </section>
  );
};

export default ProjectManager;
