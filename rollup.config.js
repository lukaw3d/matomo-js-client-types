import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json'

const banner = `/**
 * ${packageJson.name}
 * ${packageJson.description}
 * @file
 * @version ${packageJson.version}
 * @author ${packageJson.author}
 * @license ${packageJson.license}
 */
`

export default {
	input: 'src/index.ts',
	output: [
		// CommonJS
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
			banner,
		},

		// ESM
		{
			file:packageJson.module,
			format: 'esm',
			sourcemap: true,
			banner,
		},

		// Browser
		{
			name: 'VueMatomo',
			file: packageJson.browser,
			format: "iife",
			sourcemap: true,
			banner,
		},

		// Browser (minified)
		{
			name: 'VueMatomo',
			file: packageJson.browser.replace(/\.js$/, '.min.js'),
			format: "iife",
			sourcemap: true,
			banner,
			plugins: [
				terser(),
			],
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript(),
	],
};
