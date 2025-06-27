import { pino } from 'pino';
import { env } from '@/config/env';

export const loggerConfig = {
  level: env.LOG_LEVEL || 'info',
  transport:
    env.NODE_ENV !== 'production'
      ? {
          target: 'pino-pretty',
          options: { colorize: true },
        }
      : undefined,
};

export const logger = pino(loggerConfig);
