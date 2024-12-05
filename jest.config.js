/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // Использование babel-jest для файлов TypeScript
    '^.+\\.jsx?$': 'babel-jest', // Для файлов JS/JSX
  },
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  roots: ['./src/test/unit', './scripts/test/unit'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    '/node_modules/(?!@testing-library/user-event|some-other-library).+\\.js$',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
