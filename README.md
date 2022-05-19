# vitepress-theme-you

> 🎮 你的下一个文档主题（开发中）
> Can not work well yet, do not use it.

[![npm](https://img.shields.io/npm/v/vitepress-theme-you)](https://npmjs.com/package/vitepress-theme-you)

- Preview: [you.yunyoujun.cn](https://you.yunyoujun.cn)

## Usage

```bash
pnpm i vitepress
```

More info see [vitepress](https://github.com/vuejs/vitepress). Base on [theme-default | vitepress](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/).

Config `.vitepress/config.ts`:

```ts
import baseConfig from 'vitepress-theme-you/config'

export default {
  extends: baseConfig,
  // ...
}
```

Config `.vitepress/theme/index.ts`:

```ts
import type { Theme } from 'vitepress'
import { VPTheme } from 'vitepress-theme-you'

import 'uno.css'

const theme: Theme = Object.assign({}, VPTheme, {
  enhanceApp: ({ app }) => {
    // ...
  },
})

export default theme
```

## Who use it?

- [advjs](https://github.com/YunYouJun/advjs/)
- [augma](https://github.com/YunYouJun/augma/)
- [el-bot](https://github.com/YunYouJun/el-bot)
- [vtuber](https://github.com/YunYouJun/vtuber)
- [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun)

## [Sponsors](https://sponsors.yunyoujun.cn)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/YunYouJun/sponsors/public/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/YunYouJun/sponsors/public/sponsors.svg'/>
  </a>
</p>
