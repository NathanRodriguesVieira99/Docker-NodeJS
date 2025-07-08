import baseConfig from './jest.config';
import type { Config } from 'jest';

const config: Config = {
  ...baseConfig,
  testMatch: ['**/*.e2e.test.(ts|js|tsx|jsx)'],
  testPathIgnorePatterns: [],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.{test,spec}.ts',
    '!<rootDir>/src/generated/**',
    '!<rootDir>/src/@types/**',
  ],
};

export default config;
