import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/default-theme-config
const themeConfig: DefaultTheme.Config = {
    logo: '/ezi-logo.svg',

    search: {
        provider: 'local'
    },

    nav: [
        { text: '首页', link: '/' },
        { text: '快速开始', link: '/quick-start/introduction' },
        { text: 'API 参考', link: '/api-reference/config' },
        { text: 'FAQ', link: '/best-practices/为什么要配置包名' },
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/eziapp-org/core' }
    ],

    sidebar: [
        {
            text: '快速开始',
            items: [
                { text: '简介', link: '/quick-start/introduction' },
                { text: 'Hello World', link: '/quick-start/helloworld' },
                { text: '配置你的应用', link: '/quick-start/configuration' },
                { text: '从模板创建应用', link: '/quick-start/template' },
                { text: '从 Vite 项目创建应用', link: '/quick-start/vite' },
                { text: '构建与发布', link: '/quick-start/release' },
            ]
        },
        {
            text: '扩展',
            items: [
                { text: '安装扩展', link: '/extensions/install' },
                { text: '官方扩展', link: '/extensions/official' },
                { text: '社区扩展', link: '/extensions/community' },
            ]
        },
        {
            text: 'API 参考',
            items: [
                { text: '配置', link: '/api-reference/config' },
                { text: '应用', link: '/api-reference/application' },
                { text: '窗口', link: '/api-reference/window' },
                { text: '外观', link: '/api-reference/appearance' },
                { text: '托盘', link: '/api-reference/tray' },
                { text: '文件', link: '/api-reference/file' },
                { text: '终端(调试)', link: '/api-reference/terminal' },
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
                { text: '为什么要配置包名?', link: '/best-practices/为什么要配置包名' },
                { text: '如何储存应用数据?', link: '/best-practices/如何储存应用数据' },
            ]
        }
    ],

    editLink: {
        pattern: 'https://github.com/eziapp-org/document/edit/main/docs/:path',
        text: '在GitHub上编辑此页'
    }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "../docs",
    lang: 'zh-CN',

    title: "EziApp 文档",
    description: "更快、更轻量——使用Web技术构建原生能力客户端",

    head: [
        ['meta', { name: 'keywords', content: 'EziApp, desktop framework, frontend technologies,' }],
        ['meta', { property: 'og:title', content: 'EziApp 文档' }],
        ['meta', { property: 'og:description', content: '更快、更轻量——使用Web技术构建原生能力客户端' }],
        ['meta', { property: 'og:image', content: '/ezi-logo.svg' }],
        ['meta', { property: 'og:url', content: 'https://eziapp.dev' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ],

    sitemap: {
        hostname: 'https://eziapp.dev',
    },
    themeConfig,
})
