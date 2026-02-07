import js from '@eslint/js';
import globals from 'globals';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    extends: [
      js.configs.recommended,
      ...pluginVue.configs['flat/essential'],
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      semi: ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
    },
  },
]);
