import { CreateUserController } from '@/controllers/create-user-controller';
import type { FastifyInstance } from 'fastify';

export function UserRoutes(app: FastifyInstance) {
  app.post('/users', CreateUserController);
}
