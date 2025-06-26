import baseConfig from './jest.config';
import type { Config } from 'jest';

const config: Config = {
  ...baseConfig,
  testMatch: ['**/*.e2e.test.(ts|js|tsx|jsx)'],
};

export default config;
