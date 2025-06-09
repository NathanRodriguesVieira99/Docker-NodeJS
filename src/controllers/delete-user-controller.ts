import { deleteByIDSchema } from '@/schemas/deleteByIDSchema';
import { DeleteUserUseCase } from '@/useCases/delete-user-use-case';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function DeleteUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = deleteByIDSchema.parse(request.params);

    const deleteUsersUseCase = new DeleteUserUseCase();

    await deleteUsersUseCase.delete(id);
  } catch (error) {
    return reply.status(404).send({ message: 'user not found', error });
  }
  return reply.status(204).send();
}
