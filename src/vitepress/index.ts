import './styles/index.scss'

import type { Theme } from 'vitepress'

import VPApp from './components/VPApp.vue'
import NotFound from './components/NotFound.vue'

// import { withConfigProvider } from './composables/config'

export type { YouTheme } from './types/config'

export const VPTheme: Theme = {
  // Layout: withConfigProvider(VPApp),
  Layout: VPApp,
  NotFound,
}
