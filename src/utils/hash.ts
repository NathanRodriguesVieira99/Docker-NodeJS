import { hash, compare } from 'bcryptjs';
import { randomInt } from 'crypto';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = randomInt(6, 10);
  return hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return compare(password, hash);
};
