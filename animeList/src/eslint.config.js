// eslint.config.js
import vue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.vue'],
    plugins: { vue },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  },
]
