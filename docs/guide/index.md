# 使用

## 安装

More info see [VitePress Docs](https://vitepress.vuejs.org/).

```bash
pnpm add vitepress-theme-you
```

在 `.vitepress/theme/index.ts` 中引入。

```ts
// docs/.vitepress/theme/index.ts
import { Theme } from "vitepress";
import YouTheme from "vitepress-theme-you";

// https://github.com/antfu/unocss
import 'uno.css'

const theme: Theme = {
  ...YouTheme,
  enhanceApp: ({ app }) => {},
};

export default theme;
```

配置 `vite.config.ts`。

> 因为使用 unocss 来动态生成 CSS 图标。

```ts
import { UserConfig } from 'vite'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'

const config: UserConfig = {
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
  ],
}

export default config
```

## More info

...
