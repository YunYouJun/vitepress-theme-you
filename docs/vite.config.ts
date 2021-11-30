import { resolve } from 'path'
import { UserConfig } from 'vite'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

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

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [resolve(__dirname, '../src/components')],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        // IconsResolver({
        //   // componentPrefix: '',
        //   // enabledCollections: ['carbon']
        // }),
      ],
      dts: resolve(__dirname, '../src/components.d.ts'),
    }),
  ],
}

export default config
