import type { FastifyReply, FastifyRequest } from 'fastify';
import { makeDeleteUserUseCase } from '@/factories/user-factories/make-delete-user-use-case';
import { deleteByIDSchema } from '@/schemas/user-schemas';
import { ZodError } from 'zod';
import { UserNotExistsError } from '@/useCases/user-use-cases/errors/user-not-exists-error';

export async function DeleteUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = deleteByIDSchema.parse(request.params);

    const deleteUsersUseCase = makeDeleteUserUseCase();

    await deleteUsersUseCase.delete(id);

    return reply.status(204).send();
  } catch (error) {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        message: 'Invalid data',
        errors: error.errors,
      });
    }

    if (error instanceof UserNotExistsError) {
      return reply.status(404).send({ message: error.message });
    }

    return reply.status(500).send({ message: 'Internal server error' });
  }
}
