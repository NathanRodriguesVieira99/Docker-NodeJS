import type { FastifyReply, FastifyRequest } from 'fastify';
import { makeListUsersUseCase } from '@/factories/make-list-users-use-case';

export async function ListUsersController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listUsersUseCase = makeListUsersUseCase();

    const users = await listUsersUseCase.listUsers();

    return reply.send(users);
  } catch (error) {
    return reply.status(404).send({ message: 'users not found', error });
  }
}
