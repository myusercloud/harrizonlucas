import express from 'express'
import {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'

const router = express.Router()

// ---------- ROUTES ----------
// Create a new project
router.post('/', createProject)

// Get all projects
router.get('/', getAllProjects)

// Get single project by slug
router.get('/:slug', getProjectBySlug)

// Update a project by slug
router.put('/:slug', updateProject)

// Delete a project by slug
router.delete('/:slug', deleteProject)

export default router
