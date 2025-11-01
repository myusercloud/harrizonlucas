import prisma from '../utils/prismaClient.js';
import slugify from 'slugify';



// Create project
export const createProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const project = await prisma.project.create({
      data: { title, description, link, slug },
    });

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    })
    res.status(200).json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// GET project by slug
export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params
    const project = await prisma.project.findUnique({
      where: { slug },
    })

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.status(200).json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}


// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, description, link } = req.body;

    // Check if project exists
    const existingProject = await prisma.project.findUnique({ where: { slug } });
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Regenerate slug only if title changes
    let newSlug = existingProject.slug;
    if (title && title !== existingProject.title) {
      newSlug = slugify(title, { lower: true, strict: true });
    }

    const updatedProject = await prisma.project.update({
      where: { slug },
      data: {
        title: title ?? existingProject.title,
        description: description ?? existingProject.description,
        link: link ?? existingProject.link,
        slug: newSlug,
      },
    });

    res.status(200).json({
      message: 'Project updated successfully',
      project: updatedProject,
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// DELETE project
export const deleteProject = async (req, res) => {
  try {
    const { slug } = req.params;

    const project = await prisma.project.findUnique({ where: { slug } });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    await prisma.project.delete({ where: { slug } });

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
