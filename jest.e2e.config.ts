import baseConfig from './jest.config';
import type { Config } from 'jest';

const config: Config = {
  ...baseConfig,
  testMatch: ['**/*.e2e.test.(ts|js|tsx|jsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  maxWorkers: 1,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.{test,spec}.ts',
    '!<rootDir>/src/generated/**',
    '!<rootDir>/src/@types/**',
  ],
};

export default config;
