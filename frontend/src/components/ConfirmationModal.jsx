import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { LayoutDashboard, BookOpen, Settings as SettingsIcon, Image, X, Trash2, Edit, Save, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

// --- MOCK API SETUP ---
// NOTE: In a real environment, replace 'http://localhost:5000/api/projects'
// with the actual environment variable or API base URL.
const API_URL = "http://localhost:5000/api/projects";

// Mocking the axios requests to prevent runtime errors in the sandbox
// and ensure logic paths are clear.
// The actual logic (calling PUT, POST, DELETE, GET) is preserved.
const mockProjects = [
    { id: '1', slug: 'project-a', title: 'Data Analytics Dashboard', description: 'A highly responsive dashboard built with React and D3.', link: 'https://example.com/a' },
    { id: '2', slug: 'project-b', title: 'E-commerce API Gateway', description: 'Node.js microservice architecture for product management.', link: 'https://example.com/b' },
];

axios.get = (url) => new Promise((resolve) => {
    console.log(`MOCK: GET ${url}`);
    setTimeout(() => resolve({ data: mockProjects }), 500);
});
axios.post = (url, data) => new Promise((resolve) => {
    console.log(`MOCK: POST ${url}`, data);
    const newProject = { ...data, id: Date.now().toString(), slug: data.title.toLowerCase().replace(/\s/g, '-') };
    mockProjects.push(newProject);
    setTimeout(() => resolve({ data: newProject }), 300);
});
axios.put = (url, data) => new Promise((resolve) => {
    console.log(`MOCK: PUT ${url}`, data);
    const index = mockProjects.findIndex(p => `${API_URL}/${p.slug}` === url);
    if (index !== -1) {
        mockProjects[index] = { ...mockProjects[index], ...data };
    }
    setTimeout(() => resolve({ data: mockProjects[index] }), 300);
});
axios.delete = (url) => new Promise((resolve, reject) => {
    console.log(`MOCK: DELETE ${url}`);
    const initialLength = mockProjects.length;
    const slug = url.split('/').pop();
    const index = mockProjects.findIndex(p => p.slug === slug);
    if (index !== -1) {
        mockProjects.splice(index, 1);
        setTimeout(() => resolve({ data: { message: 'Deleted' } }), 300);
    } else {
        setTimeout(() => reject(new Error('Project not found')), 300);
    }
});


// --- CUSTOM MODAL & MESSAGE BOX ---

/**
 * A reusable modal component for confirmation and alerts.
 * Replaces the forbidden `alert()` and `confirm()` functions.
 */
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel', isAlert = false, icon: Icon, confirmStyle = "bg-red-600 hover:bg-red-700" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-gray-800 border border-gray-700/50 rounded-xl p-6 shadow-2xl animate-fade-in-up">
                <div className="flex justify-between items-start mb-4 border-b border-gray-700/50 pb-3">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        {Icon ? <Icon className="w-6 h-6" /> : isAlert ? <AlertTriangle className="w-6 h-6 text-yellow-400" /> : <Trash2 className="w-6 h-6 text-red-400" />}
                        {title}
                    </h3>
                    <button onClick={onCancel} className="text-gray-400 hover:text-white transition">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-gray-300 mb-6">{message}</p>
                
                <div className="flex justify-end gap-3">
                    {!isAlert && (
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                        >
                            {cancelText}
                        </button>
                    )}
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition ${confirmStyle} ${isAlert && !onCancel ? 'w-full' : ''}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
