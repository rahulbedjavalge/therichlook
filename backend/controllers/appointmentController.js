import { db } from '../db/mockDb.js';
import { AppError } from '../middleware/errorHandler.js';

export async function getAvailableSlotsController(req, res, next) {
  try {
    const { date } = req.query;

    if (!date) {
      throw new AppError('Date is required', 400);
    }

    // Mock available slots
    const slots = [
      { time: '09:00 AM', available: true },
      { time: '09:30 AM', available: true },
      { time: '10:00 AM', available: false },
      { time: '10:30 AM', available: true },
      { time: '11:00 AM', available: true },
      { time: '02:00 PM', available: true },
      { time: '02:30 PM', available: true },
      { time: '03:00 PM', available: false },
      { time: '03:30 PM', available: true },
      { time: '04:00 PM', available: true },
    ];

    res.json({
      date,
      slots,
    });
  } catch (error) {
    next(error);
  }
}

export async function createAppointmentController(req, res, next) {
  try {
    const { service, date, time } = req.body;

    if (!service || !date || !time) {
      throw new AppError('Service, date, and time are required', 400);
    }

    const appointment = db.createAppointment({
      userId: req.user.id,
      service,
      date,
      time,
      status: 'booked',
    });

    res.status(201).json({
      message: 'Appointment created successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAppointmentController(req, res, next) {
  try {
    const { id } = req.params;
    const appointment = db.findAppointmentById(id);

    if (!appointment) {
      throw new AppError('Appointment not found', 404);
    }

    // Check ownership
    if (appointment.userId !== req.user.id && req.user.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    res.json(appointment);
  } catch (error) {
    next(error);
  }
}

export async function updateAppointmentController(req, res, next) {
  try {
    const { id } = req.params;
    const { date, time, status } = req.body;

    const appointment = db.findAppointmentById(id);
    if (!appointment) {
      throw new AppError('Appointment not found', 404);
    }

    if (appointment.userId !== req.user.id && req.user.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    const updated = db.updateAppointment(id, { date, time, status });
    res.json({
      message: 'Appointment updated successfully',
      appointment: updated,
    });
  } catch (error) {
    next(error);
  }
}

export async function cancelAppointmentController(req, res, next) {
  try {
    const { id } = req.params;
    const appointment = db.findAppointmentById(id);

    if (!appointment) {
      throw new AppError('Appointment not found', 404);
    }

    if (appointment.userId !== req.user.id && req.user.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    db.updateAppointment(id, { status: 'cancelled' });
    res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    next(error);
  }
}
