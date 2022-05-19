---
sidebar: 5
---

# 使用

## 安装

More info see [VitePress Docs](https://vitepress.vuejs.org/).

```bash
pnpm add vitepress-theme-you
```

在 `.vitepress/theme/index.ts` 中引入。

```ts
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { VPTheme } from 'vitepress-theme-you'

// https://github.com/antfu/unocss
import 'uno.css'

const theme: Theme = {
  ...VPTheme,
  enhanceApp: ({ app }) => {},
}

export default theme
```

配置 `.vitepress/config.ts`。

> 因为使用 unocss 来动态生成 CSS 图标。

```ts
import type { UserConfig } from 'vitepress'
import baseConfig from 'vitepress-theme-you/config'

const config: UserConfig = {
  extends: baseConfig,
  title: 'You',
  themeConfig: {
    // ...
  }
}

export default config
```

## More info

...
