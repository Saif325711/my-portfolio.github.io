import express from 'express';
import {
	listProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject
} from '../controllers/projectController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', listProjects);
router.get('/:id', getProject);
router.post('/', auth, createProject);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

export default router;
