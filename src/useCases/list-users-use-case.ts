import type { User } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

interface IlistUsersUseCaseProps {
  listUsers(): Promise<User[]>;
}

export class ListUsersUseCase implements IlistUsersUseCaseProps {
  async listUsers(): Promise<User[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password_hash: true,
        created_at: true,
        updated_at: true,
      },
    });

    return users.map((user) => user);
  }
}
