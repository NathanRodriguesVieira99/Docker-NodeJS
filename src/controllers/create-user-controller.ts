import { requestBodySchema } from '@/schemas/requestBodySchema';
import { CreateUserUseCase } from '@/useCases/create-user-use-case';
import { UserAlreadyExistsError } from '@/useCases/errors/user-already-exists-error';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function CreateUserController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const { name, email, password } = requestBodySchema.parse(request.body);

    try {
        const createUserUseCase = new CreateUserUseCase();

        await createUserUseCase.create({
            name,
            email,
            password,
        });
    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            return reply.status(409).send({ message: error.message });
        }
        return reply
            .status(500)
            .send({ message: 'Internal server error', error });
    }

    return reply.status(201).send({ message: 'user created' });
}
