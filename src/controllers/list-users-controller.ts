import { ListUsersUseCase } from '@/useCases/list-users-use-case';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function ListUsersController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listUsersUseCase = new ListUsersUseCase();

    const users = await listUsersUseCase.listUsers();

    return reply.send(users);
  } catch (error) {
    return reply.status(404).send({ message: 'users not found', error });
  }
}
