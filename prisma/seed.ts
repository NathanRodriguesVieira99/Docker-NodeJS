/* eslint-disable @typescript-eslint/no-unused-vars */
import { hashPassword } from './../src/utils/hash';
import { PrismaClient } from '../src/generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'Jhon Doe',
      email: 'jhon@acme.com',
      password_hash: await hashPassword('12345678'),
    },
  });

  const anotherUser = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password_hash: await hashPassword('12345678'),
    },
  });

  const anotherUser2 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password_hash: await hashPassword('12345678'),
    },
  });
}

seed().then(() => {
  console.log('Database seeded 🌱');
});
