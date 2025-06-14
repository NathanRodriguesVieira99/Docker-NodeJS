import type { IUserRepository } from '../user-repository';
import { User } from '@/entities/User';

export class InMemoryUserRepository implements IUserRepository {
  private items: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(user: User): Promise<User> {
    this.items.push(user);

    return user;
  }
}
