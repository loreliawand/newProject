module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['off', 'windows'],
    quotes: ['error', 'single'],
    semi: ['off', 'never'],
    eqeqeq: 'off',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'import/no-anonymous-default-export': ['off'],
  },
};
