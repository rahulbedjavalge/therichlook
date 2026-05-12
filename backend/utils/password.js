import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}

export function isValidPassword(password) {
  return password && password.length >= 6;
}
