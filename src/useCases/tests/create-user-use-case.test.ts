import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository';
import { UserAlreadyExistsError } from '../errors/user-already-exists-error';
import { compare } from 'bcryptjs';
import { CreateUserUseCase } from '../create-user-use-case';

describe('Create user useCase', () => {
  let userRepository: InMemoryUserRepository;
  let sut: CreateUserUseCase;

  const userMock = {
    name: 'Jhon Doe',
    email: 'JhonDoe@email.com',
    password: '12345678',
  };

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    sut = new CreateUserUseCase(userRepository);
  });

  it('should hash user password ', async () => {
    const user = await sut.create({
      name: userMock.name,
      email: userMock.email,
      password: userMock.password,
    });

    const isPasswordCorrectlyHashed = await compare(
      userMock.password,
      user.user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });
  it('should not be able to create user with the same email', async () => {
    const email = userMock.email;

    await sut.create({
      name: userMock.name,
      email,
      password: userMock.password,
    });

    await expect(
      sut.create({
        name: userMock.name,
        email,
        password: userMock.password,
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
