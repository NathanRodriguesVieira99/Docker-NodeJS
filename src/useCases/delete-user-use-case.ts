import { prisma } from '@/lib/prisma';
import { UserNotExistsError } from './errors/user-not-exists-error';

interface IDeleteUserUseCase {
  delete(id: string): Promise<boolean>;
}

export class DeleteUserUseCase implements IDeleteUserUseCase {
  async delete(id: string) {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    if (!id) {
      throw new UserNotExistsError();
    }

    return true;
  }
}
