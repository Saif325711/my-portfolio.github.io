import express from 'express';
import {
	listBlogs,
	getBlog,
	createBlog,
	updateBlog,
	deleteBlog
} from '../controllers/blogController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', listBlogs);
router.get('/:id', getBlog);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

export default router;
