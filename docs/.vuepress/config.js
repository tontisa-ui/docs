module.exports = {
  base: '/docs/',
  title: 'tontisa-ui',
  description: '快应用UI组件库，简洁，易用，高效',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    lastUpdated: '更新时间',
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/frontend/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      // { text: '博文',
      //   items: [
      //     { text: 'Android', link: '/android/' },
      //     { text: 'ios', link: '/ios/' },
      //     { text: 'Web', link: '/web/' }
      //   ]
      // },
      { text: '关于tontisa', link: 'http://www.tontisa.com/' },
      { text: 'Github', link: 'https://github.com/tontisa-ui/docs' },
    ],
    sidebar: [
			{
        title: '介绍',
        collapsable: false,
        children: [
          '/guide/'
        ]
			},
			{
        title: '基础组件',
        collapsable: true,
        children: [
					'/guide/progress',
					'/guide/input',
					'/guide/cascader',
					'/guide/checkbox',
					'/guide/datePicker',
					'/guide/fileUpload',
					'/guide/imgUpload',
					'/guide/layout',
					'/guide/number',
					'/guide/select',
					'/guide/space',
					'/guide/tags',
					'/guide/timePicker',
					'/guide/tip',
					'/guide/title',
					'/guide/steps'
        ]
			}
			// {
			// 	title: '表单组件',
      //   children: [
			// 		'/guide/button',
			// 		'/guide/checkbox',
			// 		'/guide/radio',
			// 		'/guide/switch',
			// 		'/guide/input',
			// 		'/guide/rate',
			// 		'/guide/slider'
      //   ]
			// },
			// {
			// 	title: '功能组件',
      //   children: [
			// 		'/guide/counter',
			// 		'/guide/loading',
			// 		'/guide/swiper',
			// 		'/guide/indexlist',
			// 		'/guide/picker',
			// 		'/guide/tabs'
      //   ]
			// },
			// {
			// 	title: '提示反馈',
      //   children: [
			// 		'/guide/drawer',
			// 		'/guide/toast',
			// 		'/guide/dialog'
      //   ]
			// },
			// {
			// 	title: 'Changelog',
      //   children: [
			// 		'/guide/CHANGELOG'
      //   ]
			// }
    ],
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}