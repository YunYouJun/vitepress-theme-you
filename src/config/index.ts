import type { UserConfig } from 'vite'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

const colors = ['red', 'green', 'blue', 'gray', 'yellow', 'dark']
const safelist: string[] = []

colors.forEach((color: string) => {
  safelist.push(`bg-${color}-500`)
  safelist.push(`hover:bg-${color}-400`)
  safelist.push(`border-${color}-600`)
  safelist.push(`hover:border-${color}-500`)
})

export const defaultConfig: UserConfig = {
  plugins: [
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
      ],
      safelist,
    }),
  ],
}
