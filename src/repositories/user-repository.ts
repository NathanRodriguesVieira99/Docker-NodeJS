import type { Prisma, User } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

export interface IUserRepository {
  create(user: User): Promise<User>;
}

export class PrismaUserRepository implements IUserRepository {
  async create(user: Prisma.UserCreateInput): Promise<User> {
    const prismaUser = await prisma.user.create({
      data: {
        ...user,
      },
    });

    return prismaUser;
  }
}
