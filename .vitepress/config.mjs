import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "Flux",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: [2,6],
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/markdown-start' },
      { text: '使用指南', link: '/markdown-use.md' },
      { text: '常见问题', link: '/markdown-question' }
    ],

    // sidebar: [
    //   // {
    //   //   text: 'Examples',
    //   //   items: [
    //   //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //   //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   //   ]
    //   // }
    // ],
    sidebar: false, //关闭侧边栏
    aside: "left", //设置右侧边栏左侧显示
    socialLinks: [
      { icon: 'github', link: '/' }
    ],
    footer:{ 
      copyright:"Copyright@ 2023 MuFVPS"
    },
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
