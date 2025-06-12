import type { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaUserRepository } from '@/repositories/user-repository';
import { requestBodySchema } from '@/schemas/requestBodySchema';
import { CreateUserUseCase } from '@/useCases/create-user-use-case';
import { UserAlreadyExistsError } from '@/useCases/errors/user-already-exists-error';

export async function CreateUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, email, password } = requestBodySchema.parse(request.body);

  try {
    const prismaUserRepository = new PrismaUserRepository();
    const createUserUseCase = new CreateUserUseCase(prismaUserRepository);

    await createUserUseCase.create({
      name,
      email,
      password,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    }
    return reply.status(500).send({ message: 'Internal server error', error });
  }

  return reply.status(201).send({ message: 'user created' });
}
