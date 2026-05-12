import { db } from '../db/mockDb.js';
import { AppError } from '../middleware/errorHandler.js';

export async function getProfileController(req, res, next) {
  try {
    const user = db.findUserById(req.user.id);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
}

export async function updateProfileController(req, res, next) {
  try {
    const { name, phone } = req.body;
    const user = db.updateUser(req.user.id, { name, phone });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
}
