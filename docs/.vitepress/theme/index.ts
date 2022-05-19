import type { Theme } from 'vitepress'
import { VPTheme } from 'vitepress-theme-you'

// https://github.com/antfu/unocss
import 'uno.css'

const theme: Theme = Object.assign({}, VPTheme, {
  // enhanceApp: ({ app }) => {
  // Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.())
  // },
})

export default theme
