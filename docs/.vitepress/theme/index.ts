import { Theme } from "vitepress";
import YouTheme from "vitepress-theme-you";

// https://github.com/antfu/unocss
import 'uno.css'


const theme: Theme = {
  ...YouTheme,
  enhanceApp: ({ app }) => {
    // Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.())
  },
};

export default theme;
