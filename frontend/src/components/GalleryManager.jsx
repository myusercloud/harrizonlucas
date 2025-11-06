import { Image } from "lucide-react";


// src/components/GalleryManager.jsx
const GalleryManager = () => (
    <div className="p-8 lg:p-12 w-full">
        <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700/50 pb-4">
            <Image className="inline-block w-8 h-8 mr-3 text-indigo-400" />
            Gallery Management
        </h1>
        <div className="bg-gray-800/60 border border-gray-700/50 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Image Uploader</h2>
            <p className="text-gray-400 mb-6">
                This section is **Coming Soon**! Here you will be able to upload, organize, and manage all your portfolio image assets.
            </p>
            <div className="h-40 border-4 border-dashed border-indigo-500/50 rounded-lg flex items-center justify-center text-indigo-400 font-medium hover:border-indigo-400 transition cursor-pointer">
                Drag & Drop Images or Click to Upload
            </div>
        </div>
    </div>
);

export default GalleryManager;


