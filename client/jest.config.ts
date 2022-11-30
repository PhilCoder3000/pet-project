/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  moduleDirectories: ['node_modules', 'src'],

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/config/tests/setupTests.ts'],
};
