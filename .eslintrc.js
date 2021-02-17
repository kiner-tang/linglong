module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: ['*.js'],
  rules: {
    'no-unused-vars': [0],
    'max-classes-per-file': [0],
    'import/prefer-default-export': [0],
    'class-methods-use-this': [0],
    'no-shadow': [0],
    'no-param-reassign': [0],
    'no-use-before-define': [0]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/', './src/'],
          ['@/config', './src/config/'],
          ['@/common', './src/common/'],
          ['@/inner', './src/inner/'],
          ['@/main', './src/main/'],
          ['@/utils', './src/utils/'],
          ['@/mock', './src/mock/'],
        ],
      },
    },
  },
};
