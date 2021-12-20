import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export type { YouTheme } from './types/config'

export const theme: Theme = {
  Layout,
  NotFound,
}

export default theme
