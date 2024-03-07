import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "微网站设计与开发文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: '代码',
        items: [
          { text: '返回顶部', link: '/weiwcode/BackTop.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leiji001/weiw-docs' }
    ]
  }
})
