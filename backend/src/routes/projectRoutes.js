import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // store in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// ---------- ROUTES ----------
// Create a new project with optional image
router.post('/', upload.single('image'), createProject);

// Update a project with optional image
router.put('/:slug', upload.single('image'), updateProject);

// Get all projects
router.get('/', getAllProjects);

// Get single project by slug
router.get('/:slug', getProjectBySlug);

// Delete a project by slug
router.delete('/:slug', deleteProject);

// Serve uploaded images
router.use('/uploads', express.static('uploads'));

export default router;
