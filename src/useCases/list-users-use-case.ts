import type { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import type { User } from '@/generated/prisma';
import { UserNotExistsError } from './errors/user-not-exists-error';

export class ListUsersUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  async listUsers(): Promise<User[]> {
    const users = await this.userRepository.listAll();

    if (!users) {
      throw new UserNotExistsError();
    }

    return users.map((user) => user);
  }
}
