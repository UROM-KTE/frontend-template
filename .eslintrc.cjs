module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            "cases": {
              "camelCase": true,
              "pascalCase": true
            }
          }
        ]
      },
    },
  ],
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
    'unicorn'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'camelcase': 'error',
    'spaced-comment': 'error',
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': 'warn',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    'max-len': [
      'warn',
        {
          'code': 120,
          'tabWidth': 2,
        },
    ],
    'unicorn/numeric-separators-style': 'off',
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
  },
  settings: {
    'import/resolver': {
      'typescript': {}
    },
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  }
};
