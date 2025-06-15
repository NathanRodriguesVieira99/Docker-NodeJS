import { User } from '@/entities/User';
import type { IUserRepository } from '../user-repository';
import type { Prisma } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

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

    return new User(
      // passo os parâmetros obrigatórios da entidade
      {
        name: user.name,
        email: user.email,
        password_hash: user.password_hash,
      },
      // passo os parâmetros gerados automaticamente da entidade
      user.id,
      user.created_at,
      user.updated_at
    );
  }
  async create(user: Prisma.UserCreateInput): Promise<User> {
    const prismaUser = await prisma.user.create({
      data: {
        ...user,
      },
    });

    return new User(
      // passo os parâmetros obrigatórios da entidade
      {
        name: prismaUser.name,
        email: prismaUser.email,
        password_hash: prismaUser.password_hash,
      },
      // passo os parâmetros gerados automaticamente da entidade
      prismaUser.id,
      prismaUser.created_at,
      prismaUser.updated_at
    );
  }
}
