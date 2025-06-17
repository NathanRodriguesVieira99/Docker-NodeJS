import type { FastifyTypedInstance } from '@/@types/FastifyTypedInstance';
import { UserRoutes } from './user-routes';

export function Routes(app: FastifyTypedInstance) {
  app.get('/', async () => {
    return { status: 'ok', message: 'server is running' };
  });
  app.register(UserRoutes);
}
