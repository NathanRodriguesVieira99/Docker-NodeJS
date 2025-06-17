/* eslint-disable @typescript-eslint/no-unused-vars */
import { hash } from 'bcryptjs';
import { PrismaClient } from '../src/generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();

  const password_hash = await hash('12345678', 1);

  const user = await prisma.user.create({
    data: {
      name: 'Jhon Doe',
      email: 'jhon@acme.com',
      password_hash,
    },
  });

  const anotherUser = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password_hash,
    },
  });

  const anotherUser2 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password_hash,
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
});
