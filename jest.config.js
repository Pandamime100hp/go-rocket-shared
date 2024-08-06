module.exports = {
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(mjs|js)$': 'babel-jest',
  },
  moduleFileExtensions: ['mjs', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};