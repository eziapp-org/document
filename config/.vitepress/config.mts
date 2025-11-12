import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "..\\docs",
  head: [
    ['link', { rel: 'icon', href: '/ezi-logo.svg' }]
  ],
  title: "EziApp",
  description: "EziApp is a modern desktop application framework powered by frontend technologies.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start/introduction' },
      { text: 'API 参考', link: '/api-reference/api-config' },
      { text: 'FAQ', link: '/quick-start' },

    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '简介', link: '/quick-start/introduction' },
          { text: 'Hello EziApp', link: '/quick-start/helloworld' },
          { text: '配置你的应用', link: '/quick-start' },
          { text: '从模板创建应用', link: '/quick-start' },
          { text: '从vite项目创建应用', link: '/quick-start' },
          { text: '打包发布应用', link: '/quick-start' },
        ]
      },
      {
        text: '扩展',
        items: [
          { text: '安装扩展', link: '/extensions/use-plugins' },
          { text: '官方扩展', link: '/extensions/create-plugins' },
          { text: '社区扩展', link: '/extensions/create-plugins' },
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '配置', link: '/api-reference/api-config' },
          { text: '应用', link: '/api-reference' },
          { text: '窗口', link: '/api-reference' },
          { text: '外观', link: '/api-reference' },
          { text: '托盘', link: '/api-reference' },
          { text: '文件', link: '/api-reference' },
          { text: '终端(调试)', link: '/api-reference' },
        ]
      },
      {
        text: '扩展开发者指南',
        items: [
          { text: '创建扩展', link: '/developer-guide/create-plugins' },
          { text: '扩展 API 参考', link: '/developer-guide/plugin-api' },
          { text: '发布扩展', link: '/developer-guide/publish-plugins' },
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: '为什么要配置包名', link: '/best-practices' },
          { text: '如何储存应用数据？', link: '/best-practices' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eziapp-org/core' }
    ],

    logo: '/ezi-logo.svg',
    editLink: {
      pattern: 'https://github.com/eziapp-org/document/docs/:path',
      text: '在GitHub上编辑此页'
    }
  }
})
