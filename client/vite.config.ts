import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],

    // CORS
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3004',
                changeOrigin: true,
            },
        },
    },
});
