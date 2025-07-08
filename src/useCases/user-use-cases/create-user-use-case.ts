import type { User } from '@/generated/prisma';
import type { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { hashPassword } from '@/utils/hash';

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
    const user = await this.prismaUsersRepository.findByEmail(email);

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
    const hashedPassword = await hashPassword(password);

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
