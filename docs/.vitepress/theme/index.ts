import { Theme } from "vitepress";
import YouTheme from "vitepress-theme-you";

const theme: Theme = {
  ...YouTheme,
  enhanceApp: ({ app }) => {},
};

export default theme;
