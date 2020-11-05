// 参考 https://cn.eslint.org/docs/rules/

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint-config-ant/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    allowArgumentsExplicitlyTypedAsAny?: true;
  },
  settings: {},
};
