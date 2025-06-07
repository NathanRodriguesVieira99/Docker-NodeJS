import type { FastifyInstance } from 'fastify';

export function Routes(server: FastifyInstance) {
    server.get('/', async () => {
        return { status: 'ok', message: 'server is running' };
    });
}
