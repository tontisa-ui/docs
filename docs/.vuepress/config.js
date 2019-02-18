module.exports = {
  title: 'ui 文档',
  description: 'tontisa ui 文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博文',
        items: [
          { text: 'Android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'Web', link: '/web/' }
          ]
        },
      { text: '关于', link: 'http://www.tontisa.com/' },
      { text: 'Github', link: 'https://github.com/tcly861204/tontisa-ui' },
    ],
    sidebar: {
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
    lastUpdated: 'Last Updated',
  },
}