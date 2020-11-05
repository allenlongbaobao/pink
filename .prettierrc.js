module.exports = {
  // 单行字符长度
  printWidth: 100,
  // 是否添加分号
  semi: true,
  // 是否使用单引号
  singleQuote: true,
  // 多行数组是否需要尾部追加逗号 es5 语法需要
  trailingComma: 'es5',
  // 覆写微信小程序匹配规则
  overrides: [
    {
      files: ['*.wxss'],
      options: { parser: 'css' },
    },
    {
      files: ['*.wxml'],
      options: { parser: 'html' },
    },
  ],
};
