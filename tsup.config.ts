import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}', '!src/generated/prisma/**'],
  clean: true,
  format: 'esm',
  outDir: 'build',
});
