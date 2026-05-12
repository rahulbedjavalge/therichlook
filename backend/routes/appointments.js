import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import {
  getAvailableSlotsController,
  createAppointmentController,
  getAppointmentController,
  updateAppointmentController,
  cancelAppointmentController,
} from '../controllers/appointmentController.js';

const router = express.Router();

router.get('/slots', getAvailableSlotsController);
router.post('/', authMiddleware, createAppointmentController);
router.get('/:id', authMiddleware, getAppointmentController);
router.put('/:id', authMiddleware, updateAppointmentController);
router.delete('/:id', authMiddleware, cancelAppointmentController);

export default router;
