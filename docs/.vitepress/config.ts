import { UserConfig } from "vitepress";
import baseConfig from 'vitepress-theme-you/config'

const config: UserConfig = {
  extends: baseConfig,
  
  title: "You",

  themeConfig: {
    repo: "YunYouJun/advjs",
    logo: "/favicon.svg",
    iconClass: "i-ri-layout-3-line",

    docsDir: "docs",
    docsBranch: "main",
    docsRepo: "YunYouJun/advjs",

    editLinks: true,
    editLinkText: "帮助改善此页面",
    lastUpdated: "上次更新",

    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "测试",
        link: "/test/",
      },
    ],
  },
};

export default config;
