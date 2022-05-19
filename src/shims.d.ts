declare const __ALGOLIA__: boolean

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module 'vitepress-theme-you/config' {
  export default any
}

// this module's typing is broken
declare module '@docsearch/js' {
  function docsearch<T = any>(props: T): void
  export default docsearch
}

declare module '@docsearch/css' {
  const css: string
  export default css
}
