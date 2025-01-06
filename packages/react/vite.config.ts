import react from '@vitejs/plugin-react'
import { glob } from 'glob'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dtsPlugin({ include: ['lib'] })],
	resolve: {
		extensions: ['.ts', '.tsx'],

		alias: {
			'@': resolve(__dirname, './lib')
		}
	},

	build: {
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'@emotion/css',
				'next-themes'
			],
			input: Object.fromEntries(
				glob
					.sync('lib/**/*.{ts,tsx}')
					.map(file => [
						relative('lib', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url))
					])
			),
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
})
