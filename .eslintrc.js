module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/essential',
		//'standard',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	ignorePatterns: ['*.d.ts'],
	rules: {
		'indent': ['error', 'tab'],
		'no-trailing-spaces': 'error',
	}
}
