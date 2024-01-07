import react from '@vitejs/plugin-react'
import dotenvExpand from 'dotenv-expand'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === 'development') {
        const env = loadEnv(mode, process.cwd(), '')
        dotenvExpand.expand({ parsed: env })
    }
    return {
        plugins: [react(), tsconfigPaths()],
        server: {
            port: 3000,
        },
    }
})
