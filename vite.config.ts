/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [
      '**/{public,node_modules}/**',
      '**/.{idea,git,github,coverage}/**',
      '**/{vite,vitest,jest,build}.config.*',
    ],
    globals: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      watermarks: {
        lines: [70, 90],
        functions: [70, 90],
        branches: [70, 90],
        statements: [70, 90],
      },
    },
  },
});
