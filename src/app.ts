import { fastify } from 'fastify';
import { Routes } from '@/routes';
import { fastifyCors } from '@fastify/cors';
import { loggerConfig } from '@/lib/logger';
import {
  // jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';

export const app = fastify({
  logger: loggerConfig,
}).withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, { origin: '*' });

app.register(Routes);
