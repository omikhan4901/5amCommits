import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  rules: {
      // Catch syntax/logic errors that actually break things
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/rules-of-hooks': 'error', 
       
      // Set to 'warn' so they see it 
      'no-console': 'warn',

      // Explicitly turning off PropTypes for now so beginners don't get errors
      'react/prop-types': 'off', 
      
      // Prevents "ReferenceError: React is not defined" in older setups
      'react/react-in-jsx-scope': 'off',
    },
  },
])
