import { compare, hash } from 'bcryptjs';
import { randomInt, randomUUID } from 'crypto';

interface UserProps {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at?: Date;
  updated_at?: Date;
}

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password_hash: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    props: Omit<UserProps, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
    created_at?: Date,
    updated_at?: Date
  ) {
    this.id = id || randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.password_hash = props.password_hash;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.password_hash);
  }

  static async create(props: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const randomHash = randomInt(10, 16);
    const hashedPassword = await hash(props.password, randomHash);

    return new User({
      name: props.name,
      email: props.email,
      password_hash: hashedPassword,
    });
  }
}
