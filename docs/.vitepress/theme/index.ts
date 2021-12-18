import { Theme } from "vitepress";
import YouTheme from "vitepress-theme-you";

// https://github.com/antfu/unocss
import 'uno.css'

const theme: Theme = {
  ...YouTheme,
  // enhanceApp: ({ app }) => {},
};

export default theme;
