import type { FastifyTypedInstance } from '@/@types/FastifyTypedInstance';
import { CreateUserController } from '@/controllers/user-controllers/create-user-controller';
import { DeleteUserController } from '@/controllers/user-controllers/delete-user-controller';
import { ListUsersController } from '@/controllers/user-controllers/list-users-controller';
import { z } from 'zod';

export function UserRoutes(app: FastifyTypedInstance) {
  app.post(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'create a new user',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string().min(8),
        }),
      },
    },
    CreateUserController
  );
  app.get('/users', ListUsersController);
  app.delete('/users/:id', DeleteUserController);
}
