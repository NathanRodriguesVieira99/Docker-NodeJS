import type { FastifyInstance } from 'fastify';
import { UserRoutes } from './user-routes';

export function Routes(app: FastifyInstance) {
    app.get('/', async () => {
        return { status: 'ok', message: 'server is running' };
    });
    app.register(UserRoutes);
}
