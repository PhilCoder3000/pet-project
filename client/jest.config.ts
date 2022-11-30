import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,

  moduleDirectories: ['node_modules', 'src'],

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./config/tests/setupTests.ts'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',

  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
};

export default config;
