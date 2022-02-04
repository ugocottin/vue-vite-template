import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcss from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
	root: 'src/renderer',
	base: process.env.ELECTRON == 'true' ? './' : '',
	plugins: [vue()],
	css: {
		postcss,
	},
	cacheDir: '../../.cache',
	build: {
		emptyOutDir: true,
		outDir: '../../dist/renderer',
	},
})
