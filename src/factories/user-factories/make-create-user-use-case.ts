import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '@/useCases/user-use-cases/create-user-use-case';

export function makeCreateUserUseCase() {
  const usersRepository = new PrismaUserRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);

  return createUserUseCase;
}
