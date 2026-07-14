import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
                dimensions: false,
            },
            exclude: '**/node_modules/**',
        }),
    ],

    build: {
        rolldownOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('node_modules')) return;

                    if (
                        id.includes('/react-dom/') ||
                        id.includes('/react/') ||
                        id.includes('/scheduler/') ||
                        id.includes('/react-router') ||
                        id.includes('/use-sync-external-store/')
                    ) {
                        return 'vendor-react';
                    }

                    if (
                        id.includes('/redux/') ||
                        id.includes('/react-redux/') ||
                        id.includes('/redux-thunk/')
                    ) {
                        return 'vendor-redux';
                    }

                    if (
                        id.includes('/chart.js/') ||
                        id.includes('/react-chartjs-2/') ||
                        id.includes('/@kurkle/')
                    ) {
                        return 'vendor-ui';
                    }

                    if (
                        id.includes('/react-hook-form/') ||
                        id.includes('/@hookform/') ||
                        id.includes('/yup/') ||
                        id.includes('/property-expr/') ||
                        id.includes('/tiny-case/') ||
                        id.includes('/toposort/')
                    ) {
                        return 'vendor-forms';
                    }

                    if (
                        id.includes('/axios/') ||
                        id.includes('/dayjs/') ||
                        id.includes('/clsx/') ||
                        id.includes('/tailwind-merge/') ||
                        id.includes('/class-variance-authority/')
                    ) {
                        return 'vendor-utils';
                    }

                    return 'vendor-other';
                },
            },
        },
    },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3006',
                changeOrigin: true,
            },
        },
    },
});
