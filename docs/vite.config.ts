import { resolve } from 'path'
import { UserConfig } from 'vite'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'

import AutoImport from 'unplugin-auto-import/vite'

const config: UserConfig = {
  resolve: {
    alias: {
      'vitepress-theme-you/': `${resolve(__dirname, '../src')}/`,
      'vitepress-theme-you': resolve(__dirname, '../src/index.ts'),
    },
  },

  plugins: [
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        presetIcons({
          /* options */
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
}

export default config
