import { db } from '../db/mockDb.js';
import { AppError } from '../middleware/errorHandler.js';

export async function getDashboardController(req, res, next) {
  try {
    const appointments = db.getAllAppointments();
    const users = db.users;
    const offers = db.getOffers();

    const totalBookings = appointments.length;
    const todayAppointments = appointments.filter((a) => a.date === new Date().toISOString().split('T')[0]);
    const activeOffers = offers.length;
    const totalUsers = users.filter((u) => u.role === 'user').length;

    res.json({
      totalBookings,
      todayAppointments: todayAppointments.length,
      activeOffers,
      totalUsers,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllAppointmentsController(req, res, next) {
  try {
    const appointments = db.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    next(error);
  }
}

export async function getOffersController(req, res, next) {
  try {
    const offers = db.getOffers();
    res.json(offers);
  } catch (error) {
    next(error);
  }
}

export async function createOfferController(req, res, next) {
  try {
    const { title, discountPercent, startDate, endDate, description } = req.body;

    if (!title || !discountPercent) {
      throw new AppError('Title and discount percentage are required', 400);
    }

    const offer = db.createOffer({
      title,
      discountPercent,
      startDate,
      endDate,
      description,
    });

    res.status(201).json({
      message: 'Offer created successfully',
      offer,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateOfferController(req, res, next) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const offer = db.updateOffer(id, updates);
    if (!offer) {
      throw new AppError('Offer not found', 404);
    }

    res.json({
      message: 'Offer updated successfully',
      offer,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteOfferController(req, res, next) {
  try {
    const { id } = req.params;
    db.deleteOffer(id);
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    next(error);
  }
}

export async function manageSlotController(req, res, next) {
  try {
    const { openingTime, closingTime, capacity, breakTimes } = req.body;

    const slots = db.updateSlots({
      openingTime,
      closingTime,
      capacity,
      breakTimes,
    });

    res.json({
      message: 'Slots updated successfully',
      slots,
    });
  } catch (error) {
    next(error);
  }
}
