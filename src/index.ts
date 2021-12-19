import './styles/vars.scss'
import './styles/vars-dark.scss'
import './styles/index.scss'
import './styles/layout.scss'

import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'

import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export type { YouTheme } from './config'

const theme: Theme = {
  Layout,
  NotFound,
}

export default theme
