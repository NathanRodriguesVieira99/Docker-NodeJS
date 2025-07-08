import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/*.e2e.test.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/generated/**',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testMatch: [
    '**/__tests__/**/*.(ts|js|tsx|jsx)',
    '**/*.(test|spec).(ts|js|tsx|jsx)',
  ],
  testPathIgnorePatterns: ['.*\\.e2e\\.test\\.(ts|js|tsx|jsx)$'],
  testEnvironment: 'node',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};

export default config;
