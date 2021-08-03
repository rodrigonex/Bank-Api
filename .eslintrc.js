module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'prefer-const': 'off',
  },
};
