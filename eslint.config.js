export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['.eslintrc.cjs', 'vite.config.ts', 'tsconfig.json'],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json'],
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    rules: {
      'import/extensions': 0,
      '@typescript-eslint/semi': 0,
      'react/react-in-jsx-scope': 0,
      'comma-dangle': ['error', 'only-multiline'],
      'import/no-absolute-path': 0,
      'react/function-component-definition': 0,
      'react/jsx-props-no-spreading': 0,
      'react-hooks/exhaustive-deps': 0,
      'react/prop-types': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'no-console': [1, { allow: ['error'] }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/require-default-props': 0,
    },
  },
  {
    files: ['.eslintrc.{js,cjs}'],
    env: {
      node: true,
    },
    parserOptions: {
      sourceType: 'script',
    },
  },
];
