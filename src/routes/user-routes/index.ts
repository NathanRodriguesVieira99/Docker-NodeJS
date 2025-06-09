import { CreateUserController } from '@/controllers/create-user-controller';
import { DeleteUserController } from '@/controllers/delete-user-controller';
import { ListUsersController } from '@/controllers/list-users-controller';
import type { FastifyInstance } from 'fastify';

export function UserRoutes(app: FastifyInstance) {
  app.post('/users', CreateUserController);
  app.get('/users', ListUsersController);
  app.delete('/users/:id', DeleteUserController);
}
