import { prisma } from '@/lib/prisma';

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
      return false;
    }

    return true;
  }
}
