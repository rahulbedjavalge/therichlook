import express from 'express';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';
import {
  getDashboardController,
  getAllAppointmentsController,
  getOffersController,
  createOfferController,
  updateOfferController,
  deleteOfferController,
  manageSlotController,
} from '../controllers/adminController.js';

const router = express.Router();

router.get('/dashboard', authMiddleware, adminMiddleware, getDashboardController);
router.get('/appointments', authMiddleware, adminMiddleware, getAllAppointmentsController);
router.get('/offers', authMiddleware, adminMiddleware, getOffersController);
router.post('/offers', authMiddleware, adminMiddleware, createOfferController);
router.put('/offers/:id', authMiddleware, adminMiddleware, updateOfferController);
router.delete('/offers/:id', authMiddleware, adminMiddleware, deleteOfferController);
router.post('/slots', authMiddleware, adminMiddleware, manageSlotController);

export default router;