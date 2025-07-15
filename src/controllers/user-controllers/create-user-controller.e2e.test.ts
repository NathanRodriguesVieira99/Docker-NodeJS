import {
  setupPrismaTestEnv,
  teardownPrismaTestEnv,
} from '../../../prisma/prisma-test-environment';
import type { PrismaClient } from '@/generated/prisma';

/*
 * ESTRUTURA BÁSICA DE UM TESTE E2E
 * Cada teste roda em um schema isolado do banco de dados, garantindo que não haja interferência entre os testes.
 * Use setupPrismaTestEnv/teardownPrismaTestEnv para criar e destruir o ambiente.
 */
describe('', () => {
  let prisma: PrismaClient;
  let schema: string;

  beforeEach(async () => {
    const env = await setupPrismaTestEnv();
    prisma = env.prisma;
    schema = env.schema;
  });

  afterEach(async () => {
    await teardownPrismaTestEnv(prisma, schema);
  });

  it('should  ', async () => {});
});
