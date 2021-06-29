import { resolve } from 'path'
import { ViteAliases } from 'vite-aliases'
import Banner from 'vite-plugin-banner'
// import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

function pathResolve (dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// const fs = require('fs')

export default defineConfig({
  build: {
    lib: {
      name: 'AscUtils',
      fileName: 'asc_js_utils',
      entry: pathResolve('./src/main.ts'),
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    sourcemap: true
  },
  define: {
    'process.env': {}
  },
  plugins: [
    ViteAliases(),
    Banner(`/**\n * name: AckyStackCMS Js Utils\n * version: v1.0.0\n * description: AckyStack CMS JS Utils\n * author: Xuanzi An\n */`),
    dts({
      exclude: ['vite.config.ts'],
      insertTypesEntry: true,
    })
  ],
  resolve: {
    alias: [
      // /#/xxxx = types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ]
  },
})


