import type { IUserRepository } from '@/repositories/user-repository';
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

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(user: User): Promise<User> {
    this.items.push(user);

    return user;
  }
  async delete(id: string): Promise<boolean> {
    const index = this.items.findIndex((item) => item.id === id);

    if (index !== 1) {
      this.items.splice(index, 1);

      return true;
    }

    return false;
  }

  async listAll(): Promise<User[]> {
    return [...this.items];
  }
}
