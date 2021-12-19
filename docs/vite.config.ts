import { resolve } from 'path'
import type { UserConfig } from 'vite'

import { defaultConfig } from '../src/config'

const config: UserConfig = Object.assign(defaultConfig, {
  resolve: {
    alias: {
      'vitepress-theme-you/': `${resolve(__dirname, '../src')}/`,
      'vitepress-theme-you': resolve(__dirname, '../src/index.ts'),
    },
  },
})

export default config
