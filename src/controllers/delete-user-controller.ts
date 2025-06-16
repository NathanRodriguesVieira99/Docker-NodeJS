import type { FastifyReply, FastifyRequest } from 'fastify';
import { makeDeleteUserUseCase } from '@/factories/make-delete-user-use-case';
import { deleteByIDSchema } from '@/schemas/deleteByIDSchema';

export async function DeleteUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = deleteByIDSchema.parse(request.params);

    const deleteUsersUseCase = makeDeleteUserUseCase();

    await deleteUsersUseCase.delete(id);
  } catch (error) {
    return reply.status(404).send({ message: 'user not found', error });
  }
  return reply.status(204).send();
}
