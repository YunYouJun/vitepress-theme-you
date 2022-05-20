import type { UserConfig } from 'vitepress'
import baseConfig from 'vitepress-theme-you/config'

const config: UserConfig = {
  extends: baseConfig,

  title: 'You',

  themeConfig: {
    repo: 'YunYouJun/vitepress-theme-you',
    logo: '/favicon.svg',
    iconClass: 'i-ri-layout-3-line',

    docsDir: 'docs',
    docsBranch: 'main',
    docsRepo: 'YunYouJun/vitepress-theme-you',

    editLinks: true,
    editLinkText: '帮助改善此页面',
    lastUpdated: '上次更新',

    sidebar: {
      '/': [
        {
          text: '指南',
          children: [
            {
              text: '介绍',
              link: '/guide/',
            },
            {
              text: '使用',
              link: '/guide/usage',
            },
          ],
        },
        {
          text: '测试',
          link: '/test/',
        },
      ],
    },

    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '测试',
        link: '/test/',
      },
    ],
  },
}

export default config
