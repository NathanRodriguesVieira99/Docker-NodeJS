import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { ListUsersUseCase } from '@/useCases/user-use-cases/list-users-use-case';

export function makeListUsersUseCase() {
  const usersRepository = new PrismaUserRepository();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);

  return listUsersUseCase;
}
