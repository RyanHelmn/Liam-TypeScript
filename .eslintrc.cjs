module.exports = {
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'quotes': ['error', 'double'],
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': 'error',
  },
}
