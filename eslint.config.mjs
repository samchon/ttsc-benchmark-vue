// Flat ESLint config for the ttsc benchmark (B3): the 12 shared lint rules,
// matching the ttsc-benchmark `lint.config.ts` `rules` block.
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['packages/*/src/**/*.ts'],
    ignores: ['**/dist/**', '**/temp/**'],
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
      'object-shorthand': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-template': 'error',
      'no-useless-rename': 'error',
      'dot-notation': 'error',
      'no-extra-boolean-cast': 'error',
      'no-useless-escape': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
    },
  },
]
