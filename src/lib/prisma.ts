import { PrismaClient } from '@/generated/prisma';
import { env } from '@/config/env';

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query', 'error', 'warn'] : ['error'],
  datasourceUrl: env.DATABASE_URL,
});
