import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  lessOpinionated: true,
  rules: {
    'no-console': 'off',
    'ts/no-use-before-define': 'off',
    'style/max-statements-per-line': 'off',
  },
})
