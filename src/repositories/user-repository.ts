import type { Prisma, User } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

export interface IUserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
  async create(user: Prisma.UserCreateInput): Promise<User> {
    const prismaUser = await prisma.user.create({
      data: {
        ...user,
      },
    });

    return prismaUser;
  }
}
