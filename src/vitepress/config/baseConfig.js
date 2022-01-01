// import path from 'path'

// import type { UserConfig } from 'vitepress'

import { readFileSync } from 'fs'
import { resolve } from 'path'

import { URL } from 'url'
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite'

import presetIcons from '@unocss/preset-icons'

const __dirname = new URL('.', import.meta.url).pathname

const colors = ['red', 'green', 'blue', 'gray', 'yellow', 'dark']
const safelist = []

colors.forEach((color) => {
  safelist.push(`bg-${color}-500`)
  safelist.push(`hover:bg-${color}-400`)
  safelist.push(`border-${color}-600`)
  safelist.push(`hover:border-${color}-500`)
})

const deps = ['@vueuse/core']

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
export default async() => ({
  vite: {
    ssr: {
      noExternal: deps,
    },

    optimizeDeps: {
      exclude: deps,
    },

    plugins: [
      Unocss({
        presets: [presetAttributify(), presetUno(), presetIcons()],
        safelist,
      }),
    ],
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.svg',
      },
    ],
    [
      'script',
      {},
      readFileSync(
        resolve(__dirname, './inlined-scripts/applyDarkMode.js'),
        'utf-8',
      ),
    ],
  ],

  shouldPreload: (link) => {
    // make algolia chunk prefetch instead of preload
    return !link.includes('Algolia')
  },
})
