import { UserNotExistsError } from './errors/user-not-exists-error';
import type { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';

export class DeleteUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  async delete(id: string) {
    // Primeiro verifica se o usuário existe
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new UserNotExistsError();
    }

    // Só então deleta o usuário
    await this.userRepository.delete(id);

    return true;
  }
}
