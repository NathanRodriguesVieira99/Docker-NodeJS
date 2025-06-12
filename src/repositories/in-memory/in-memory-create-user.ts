import type { IUserRepository } from '../user-repository';
import { User } from '@/entities/User';

export class InMemoryCreateUserUseCase implements IUserRepository {
  private items: User[] = [];

  async create(user: User): Promise<User> {
    this.items.push(user);

    return user;
  }
}
