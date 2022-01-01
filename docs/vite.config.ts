import { resolve } from 'path'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  resolve: {
    alias: {
      'vitepress-theme-you/': `${resolve(__dirname, '../src')}/`,
      'vitepress-theme-you': resolve(__dirname, '../src/index.ts'),
    },
  },
}

export default config
