import { fastify } from 'fastify';
import { Routes } from './routes';

export const app = fastify();

app.register(Routes);
