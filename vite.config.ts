import { rmSync } from 'fs'
import { resolve } from 'path'

import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

rmSync('dist', { recursive: true, force: true })

const r = (dir: string) => resolve(__dirname, dir)

export default defineConfig(() => ({
  base: '/',

  build: {
    // < limit to base64 string
    assetsInlineLimit: 10000,
  },

  // pre-bundle the following inclusions
  optimizeDeps: {
    include: ['vue'],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/base";`,
      },
    },
  },

  plugins: [
    /* Vue */
    Vue({
      template: {},
    }),

    /* Auto-import the following modules as compiler macros */
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
    }),

    /* SVG Module Bundler */
    createSvgIconsPlugin({
      // see options here: https://github.com/svg/svgo
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),

    /* Electron */
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            // For Debug
            sourcemap: true,
            outDir: 'dist/electron/main',
          },
        },
      },
      preload: {
        input: {
          index: r('electron/preload/index.ts'),
        },
        vite: {
          build: {
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          },
        },
      },
      // Enables use of Node.js API in the Renderer-process
      // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
      renderer: {},
    }),
  ],

  /* Alias Resolution */
  resolve: {
    alias: {
      '@': r('./src'),
    },
  },

  server: {
    host: true,
    port: 3000,
  },

  test: {
    environment: 'jsdom',
    globals: true,
    api: false,
  },
}))
