// import path from 'path'

// import type { UserConfig } from 'vitepress'

const { readFileSync } = require('fs')
const { resolve } = require('path')

const Unocss = require('unocss/vite').default

const presetIcons = require('@unocss/preset-icons').default

const { presetAttributify, presetUno } = require('unocss')

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
module.exports = async () => ({
  vite: {
    ssr: {
      noExternal: deps,
    },

    optimizeDeps: {
      include: ['dayjs'],
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
