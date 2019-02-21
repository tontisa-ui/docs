module.exports = {
  base: '/docs/',
  title: 'tontisa-ui',
  description: 'tontisa ui 文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/frontend/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      { text: '博文',
        items: [
          { text: 'Android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'Web', link: '/web/' }
        ]
      },
      { text: '关于tontisa', link: 'http://www.tontisa.com/' },
      { text: 'Github', link: 'https://github.com/tontisa-ui/docs' },
    ],
    sidebar: {
      '/install': [
        'install'
      ],
      '/android/': [
        "",
        "android1",
        ],
      "/ios/":[
        "",
        "ios1",
        ],
      "/web/":[
        "",
        "web1"
      ],
    },
    sidebarDepth: 2,
    lastUpdated: '更新时间',
  },
}