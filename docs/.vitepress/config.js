module.exports = {
  title: "Barrier",
  description: '欲破知见障，不做釜中仙',
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
        link: '/web/'
      },
      {
        text: '工具',
        link: '/tools/'
      },
      {
        text: '其他',
        link: '/others/'
      }
    ],
    sidebar: {
      '/web/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: '函数对象',
              link: '/web/javascript/函数对象'
            }
          ]
        },
        {
          text: '设计模式',
          items: [
            {
              text: '单例模式',
              link: '/web/design-pattern/singleton'
            },
            {
              text: '使用责任链模式重构axios响应拦截器',
              link: '/web/design-pattern/使用责任链模式重构axios响应拦截器'
            }
          ]
        },
        {
          text: '页面',
          items: [
            {
              text: '滑动轮播图',
              link: '/web/animate/滑动轮播图'
            },
            {
              text: '图标与鼠标反向运动',
              link: '/web/animate/图标与鼠标反向运动'
            }
          ]
        }
      ],
      '/tools/': [
        {
          text: 'git',
          items: [
            {
              text: '利用cz工具集做Giit提交规范',
              link: '/tools/git/利用cz工具集做Giit提交规范'
            }
          ],
        }

      ],
      '/others/': [
        {
          text:'部署',
          items:[
            {
              text:'阿里云部署web应用',
              link:'/others/deploy/aliyun-deploy-web'
            },
            {
              text:'设置localhost-ssl',
              link:'/others/deploy/设置localhost-ssl'
            }
          ]
        },
        {
          text:'bug记录',
          items:[
            {
              text:'阿里云CentOS 8.x系统yum报404的解决方法',
              link:'/others/error-gather/阿里云CentOS-8.x系统yum报404的解决方法'
            },
            {
              text:'chore',
              link:'/others/error-gather/chore'
            },
            {
              text:'flutter',
              link:'/others/error-gather/flutter'
            },
            {
              text:'git',
              link:'/others/error-gather/git'
            },
          ]
        }
      ]
    }
  }
} 