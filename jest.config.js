module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/', '<rootDir>/src/__tests__/fixtures/'],
  transformIgnorePatterns: ['/node_modules/', '<rootDir>/lib/', '<rootDir>/src/__tests__/fixtures/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
