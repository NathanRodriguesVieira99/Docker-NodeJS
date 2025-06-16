import { UserNotExistsError } from './errors/user-not-exists-error';
import type { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';

export class DeleteUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  async delete(id: string) {
    await this.userRepository.delete(id);

    if (!id) {
      throw new UserNotExistsError();
    }

    return true;
  }
}
