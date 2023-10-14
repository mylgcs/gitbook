// let plugins = [
//     '-lunr', // 默认插件，无需引用
//     '-sharing', // 默认插件，无需引用
//     '-search', // 默认插件，无需引用
//     '-favicon', // 默认插件，无需引用
//     'code',
//     'expandable-chapters',
//     'theme-lou',
//     'back-to-top-button',
//     'search-pro',
//     'flexible-alerts',
//   ];
//   if (process.env.NODE_ENV == 'dev') plugins.push('livereload');


module.exports = {
    // 书籍信息
    title: 'gitbook 入门',
    // 描述
    description: 'gitbook入门书籍介绍gitbook的使用以及gitbook的相关插件以及gitbook的使用技巧',
    // 图书编号
    isbn: '978-7-121-29899-8',
    // 作者
    author: '公子醉客',
    // 语言
    language: 'zh-hans',
    

    // 插件列表
    plugins: [
      "-lunr",
      "-search",
      "search-pro",
      "code",
      "expandable-chapters",
      "theme-lou",
    ],

    // 插件全局配置
    pluginsConfig: {
      code: {
        copyButtons: true, // code插件复制按钮
      },
      'theme-lou': {
        color: '#2096FF', // 主题色
        favicon: 'assets/favicon.ico', // 网站图标
        logo: 'assets/logo.png', // Logo图
        copyrightLogo: 'assets/copyringht1.png', // 背景水印版权图
        autoNumber: 3, // 自动给标题添加编号(如1.1.1)
        titleColor: {
          // 自定义标题颜色(不设置则默认使用主题色)
          h1: '#8b008b', // 一级标题颜色
          h2: '#20b2aa', // 二级标题颜色
          h3: '#a52a2a', // 三级标题颜色
        },
        forbidCopy: true, // 页面是否禁止复制（不影响code插件的复制）
      'search-placeholder': '众里寻他千百度', // 搜索框默认文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: '公子醉客', // 底部版权展示的作者名
      },
    },
  },

    // 模版变量
    variables: {
      themeLou: {
        // 顶部导航栏配置
        nav: [
          {
            target: '_blank', // 跳转方式: 打开新页面
            url: 'https://space.bilibili.com/378936143', // 跳转页面
            name: 'B站', // 导航名称
          },
          {
            target: '_blank', // 跳转方式: 打开新页面
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzMjY0NjU5Ng==&scene=124#wechat_redirect', // 跳转页面
            name: '公众号', // 导航名称
          },
          {
            target: '_blank', // 跳转方式: 打开新页面
            url: 'https://edu.csdn.net/course/detail/32032', // 跳转页面
            name: 'CSDN', // 导航名称
          },
        ],
        // 底部打赏配置
        footer: {
          donate: {
            button: '赞赏', // 打赏按钮
            avatar: '/assets/avatar.png', // 头像地址
            nickname: '作者', // 显示打赏昵称
            message: '随意打赏，但不要超过一顿早餐钱！☕️', // 打赏消息文本
            text: '『 赠人玫瑰 🌹 手有余香 』',
            wxpay: '/assets/donate-code-wxpay.png', // 微信收款码
            alipay: '/assets/donate-code-alipay.png', // 支付宝收款码
          },
          copyright: true, // 显示版权
        },
      },
    },

};