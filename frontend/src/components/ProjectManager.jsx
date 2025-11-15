import React, { useState, useEffect, useRef } from "react";
import { FiArrowUpRight, FiEdit2, FiTrash2 } from "react-icons/fi";
import SectionTitle from "./ui/sectionTitle";
import MotionFadeIn from "./ui/MotionFadeIn";
import Button from "./ui/Button";
import ConfirmationModal from "./ConfirmationModal";

const API_URL = "http://localhost:5000/api/projects";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", description: "", link: "", image: "" });
  const [editing, setEditing] = useState(null);
  const [modal, setModal] = useState(null);
  const abortRef = useRef(null);

  /** Fetch Projects (Optimized) **/
  const fetchProjects = async () => {
    setLoading(true);

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const res = await fetch(API_URL, { signal: abortRef.current.signal });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setProjects(data);
    } catch (e) {
      if (e.name !== "AbortError") {
        setModal({ title: "Error", message: e.message, isAlert: true });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    return () => abortRef.current?.abort();
  }, []);

  /** Handle Inputs **/
  const updateInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setEditing(null);
    setForm({ title: "", description: "", link: "", image: "" });
  };

  /** Submit (Create / Edit) **/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (k === "image" && typeof v === "string") return;
        fd.append(k, v);
      });

      const method = editing ? "PUT" : "POST";
      const url = editing ? `${API_URL}/${editing.slug}` : API_URL;

      const res = await fetch(url, { method, body: fd });
      if (!res.ok) throw new Error("Saving project failed");

      resetForm();
      fetchProjects();
    } catch (e) {
      setModal({ title: "Error", message: e.message, isAlert: true });
    }
  };

  /** Delete **/
  const confirmDelete = (project) => {
    setModal({
      title: "Delete Project",
      message: `Delete "${project.title}"?`,
      confirmText: "Delete",
      confirmStyle: "bg-red-600",
      onConfirm: async () => {
        try {
          const res = await fetch(`${API_URL}/${project.slug}`, { method: "DELETE" });
          if (!res.ok) throw new Error("Failed to delete");
          fetchProjects();
        } catch (e) {
          setModal({ title: "Error", message: e.message, isAlert: true });
        } finally {
          setModal(null);
        }
      },
    });
  };

  /** Edit **/
  const startEdit = (p) => {
    setEditing(p);
    setForm({
      title: p.title,
      description: p.description,
      link: p.link,
      image: p.image || "",
    });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="py-10 px-4 sm:px-6">
      <SectionTitle title="Project Manager" />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-5 sm:p-6 rounded-xl space-y-4 shadow-lg mb-10"
      >
        <h2 className="text-lg font-semibold text-indigo-400">
          {editing ? "Edit Project" : "New Project"}
        </h2>

        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={updateInput}
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={updateInput}
          rows={3}
          className="w-full p-3 rounded-md bg-gray-700 text-white"
        />

        <input
          name="link"
          placeholder="Project Link (optional)"
          value={form.link}
          onChange={updateInput}
          className="w-full p-3 rounded-md bg-gray-700 text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="w-full p-3 rounded-md bg-gray-700 text-white"
        />

        {form.image && typeof form.image !== "string" && (
          <img
            src={URL.createObjectURL(form.image)}
            className="rounded-lg h-40 object-cover"
            alt="Preview"
          />
        )}

        <div className="flex gap-3">
          <Button type="submit">
            {editing ? "Update" : "Create"}
          </Button>
          {editing && (
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 bg-gray-600 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <MotionFadeIn key={i} direction="up" delay={i * 0.05}>
            <div className="bg-gray-800 p-5 rounded-xl shadow-md flex flex-col">
              {p.image && (
                <img
                  src={`http://localhost:5000${p.image}`}
                  loading="lazy"
                  className="rounded-lg h-44 w-full object-cover"
                  alt={p.title}
                />
              )}

              <h3 className="text-xl mt-4 text-indigo-400">{p.title}</h3>
              <p className="text-gray-300 mt-1">{p.description}</p>

              <div className="flex justify-between items-center mt-4">
                <Button href={p.link || "#"} icon={FiArrowUpRight} variant="outline">
                  View
                </Button>

                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="p-2 bg-blue-600 text-white rounded-md"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => confirmDelete(p)}
                    className="p-2 bg-red-600 text-white rounded-md"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        ))}
      </div>

      {/* MODAL */}
      {modal && (
        <ConfirmationModal
          isOpen={true}
          title={modal.title}
          message={modal.message}
          confirmText={modal.confirmText}
          cancelText={modal.cancelText}
          confirmStyle={modal.confirmStyle}
          isAlert={modal.isAlert}
          onConfirm={modal.onConfirm}
          onCancel={() => setModal(null)}
        />
      )}
    </section>
  );
};

export default ProjectManager;
