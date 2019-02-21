module.exports = {
  base: '/docs/',
  title: 'tontisa-ui',
  description: '快应用UI组件库，简洁，易用，高效',
  per_page: 5,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    lastUpdated: '更新时间',
    repo: 'tontisa-ui/docs',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/frontend/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      { text: '关于tontisa', link: 'http://www.tontisa.com/' },
      { text: 'Github', link: 'https://github.com/tontisa-ui/docs' },
    ],
    sidebar: {
      // 侧边栏在 /foo/ 上
      '/guide/': [
        '',
        {
          title: '基础组件',
          collapsable: true,
          children: [
            '/guide/base/progress',
            '/guide/base/input',
            '/guide/base/button',
            '/guide/base/cascader',
            '/guide/base/checkbox',
            '/guide/base/datePicker',
            '/guide/base/fileUpload',
            '/guide/base/imgUpload',
            '/guide/base/layout',
            '/guide/base/number',
            '/guide/base/select',
            '/guide/base/space',
            '/guide/base/tags',
            '/guide/base/timePicker',
            '/guide/base/tip',
            '/guide/base/title',
            '/guide/base/steps'
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}