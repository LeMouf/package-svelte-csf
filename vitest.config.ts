import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({mode}) => ({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],

  test: {
    api: 3002,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test/setupTestEnv.cjs']
  },

}))
