// common vitepress config

import type { UserConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const colors = ['red', 'green', 'blue', 'gray', 'yellow', 'dark']
const safelist: string[] = []

colors.forEach((color) => {
  safelist.push(`bg-${color}-500`)
  safelist.push(`hover:bg-${color}-400`)
  safelist.push(`border-${color}-600`)
  safelist.push(`hover:border-${color}-500`)
})

export const baseConfig: UserConfig = {
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true,
          }),
          presetTypography(),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ],
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
  ],
}
