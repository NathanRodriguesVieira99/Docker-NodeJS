import type { User } from '@/generated/prisma';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { randomInt } from 'crypto';

interface CreateUserUseCaseProps {
  create(user: {
    name: string;
    email: string;
    password: string;
  }): Promise<User>;
}

interface ICreateUserUseCaseParams {
  name: string;
  email: string;
  password: string;
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

  async create({
    name,
    email,
    password,
  }: ICreateUserUseCaseParams): Promise<User> {
    const randomHash = randomInt(6, 10);
    const hashedPassword = await hash(password, randomHash);

    const userWithSameEmail = await this.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: hashedPassword,
      },
    });

    return user;
  }
}
