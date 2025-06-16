import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { DeleteUserUseCase } from '@/useCases/delete-user-use-case';

export function makeDeleteUserUseCase() {
  const userRepository = new PrismaUserRepository();
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  return deleteUserUseCase;
}
