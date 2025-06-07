import type { Prisma, User } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

interface CreateUserUseCaseProps {
  create(user: User): Promise<User>;
}

export class CreateUserUseCase implements CreateUserUseCaseProps {
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

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const userWithSameEmail = await this.findByEmail(data.email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
