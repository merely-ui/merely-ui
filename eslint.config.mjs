import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			react: eslintPluginReact,
			'react-hooks': fixupPluginRules(eslintPluginReactHooks)
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			parserOptions: {
				project: './tsconfig.build.json',
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		rules: {
			...eslintPluginReactHooks.configs.recommended.rules,
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto'
				}
			],
			'react-hooks/exhaustive-deps': 'error',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off'
		}
	}
)
