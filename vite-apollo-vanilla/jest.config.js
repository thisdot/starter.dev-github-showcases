const { compilerOptions } = require('./tsconfig');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@context/(.*)': '<rootDir>/src/context/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
