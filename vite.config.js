import ViteRestart from 'vite-plugin-restart';
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        manifest: true,
        outDir: './web/dist/',
        rollupOptions: {
            input: {
                app: './src/js/app.ts',
            }
        },
    },
    plugins: [
        ViteRestart({
            reload: [
                './templates/**/*',
            ],
        }),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
    ],
});
