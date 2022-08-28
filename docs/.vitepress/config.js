module.exports = {
  title: "Barrier",
  description: '来自天下第一帅气的楚留香的博客',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image', href: '德莉傻.png' }]],
  repo: 'egoistme/Barrier-vite',
  repoLabel: 'GitHub',
  docsDir: 'docs',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: 'Javascript',
            link: '/web/javascript/'
          },
          {
            text: 'vue',
            link: '/web/vue/'
          }
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'git', link: '/tools/git/' }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '异常错误记录',
            link: '/others/error-gather/'
          }
        ]
      }
    ],
  }
} 