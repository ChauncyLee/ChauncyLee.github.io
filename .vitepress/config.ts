import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'
import { customElements } from './shared/customeElements'

export default defineConfig({
  title: '网站title',
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',
  head: [['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chauncylee' },
    ],

    algolia: {
      appId: 'SQQX8T24C2',
      apiKey: '5ead0f097971bf2b9263a5e0f50dece8',
      indexName: 'liujiayu',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-katex'))
    },
  },

})
