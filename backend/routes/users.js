import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { getProfileController, updateProfileController } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', authMiddleware, getProfileController);
router.put('/profile', authMiddleware, updateProfileController);

export default router;