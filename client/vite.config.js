import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'


const resolver = (route) => path.resolve(__dirname, route)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
	],
	build: {
		sourcemap: false,  // Desactiva los source maps
	},
	resolve: {
		alias: {
			'@app': resolver('./src/app'),
			'@store': resolver('./src/app/store'),
			'@auth': resolver('./src/features/auth'),
			'@stories': resolver('./src/features/stories'),
			'@chat': resolver('./src/features/chat'),
			'@friends': resolver('./src/features/friends'),
			'@posts': resolver('./src/features/posts'),
			'@users': resolver('./src/features/users'),
			'@shared': resolver('./src/shared'),
		}
	}
})
