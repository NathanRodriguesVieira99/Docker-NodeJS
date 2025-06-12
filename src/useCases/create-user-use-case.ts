import type { User } from '@/generated/prisma';
import type { PrismaUserRepository } from '@/repositories/user-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { randomInt } from 'crypto';

export interface ICreateUserUseCaseParams {
  name: string;
  email: string;
  password: string;
}
export interface ICreateUserUseCaseResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private prismaUsersRepository: PrismaUserRepository) {}

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
  }: ICreateUserUseCaseParams): Promise<ICreateUserUseCaseResponse> {
    const randomHash = randomInt(6, 10);
    const hashedPassword = await hash(password, randomHash);

    const userWithSameEmail = await this.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.prismaUsersRepository.create({
      name,
      email,
      password_hash: hashedPassword,
    });

    return { user };
  }
}
