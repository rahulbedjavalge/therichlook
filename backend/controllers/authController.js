import { db } from '../db/mockDb.js';
import { generateToken } from '../utils/jwt.js';
import { hashPassword, comparePasswords, isValidPassword } from '../utils/password.js';
import { AppError } from '../middleware/errorHandler.js';

export async function signupController(req, res, next) {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      throw new AppError('Email, password, and name are required', 400);
    }

    if (!isValidPassword(password)) {
      throw new AppError('Password must be at least 6 characters', 400);
    }

    const existingUser = db.findUserByEmail(email);
    if (existingUser) {
      throw new AppError('Email already registered', 400);
    }

    const hashedPassword = await hashPassword(password);
    const user = db.createUser({
      email,
      password: hashedPassword,
      name,
      role: 'user',
      phone: '',
    });

    const token = generateToken(user);
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginController(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError('Email and password are required', 400);
    }

    const user = db.findUserByEmail(email);
    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    const isValidPassword_ = await comparePasswords(password, user.password);
    if (!isValidPassword_) {
      throw new AppError('Invalid email or password', 401);
    }

    const token = generateToken(user);
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
}

export async function logoutController(req, res, next) {
  try {
    res.json({ message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
}