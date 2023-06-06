module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'prettier',
    'testing-library',
    'jest-dom',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'camelcase': 'error',
    'spaced-comment': 'error',
    'quotes': [
      'error',
      'single',
    ],
    'no-duplicate-imports': 'error',
    'no-console': 'warn',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
  settings: {
    'import/resolver': {
      'typescript': {},
    },
    'react': {
      'pragma': 'React',
      'version': 'detect',
    }
  },
};
