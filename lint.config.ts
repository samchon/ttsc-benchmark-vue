import type { ITtscLintConfig } from '@ttsc/lint'

export default {
  files: ['packages/*/src/**/*.ts'],
  ignores: ['**/dist/**', '**/temp/**'],
  format: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'all',
    singleQuote: true,
    semi: false,
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'error',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': 'error',
    'dot-notation': 'error',
    'no-extra-boolean-cast': 'error',
    'no-useless-escape': 'error',
    'prefer-template': 'warn',
    'typescript/prefer-as-const': 'error',
    'typescript/prefer-namespace-keyword': 'error',
  },
} satisfies ITtscLintConfig
