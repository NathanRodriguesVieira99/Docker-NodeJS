import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  HOST: z.coerce.string().default('0.0.0.0'),
  LOG_LEVEL: z.string().optional().default('info'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❌ Invalid environment variable', _env.error.format());

  throw new Error('Invalid environment variable');
}

export const env = _env.data;
