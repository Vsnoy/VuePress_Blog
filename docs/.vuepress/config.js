module.exports = {
  title: "Trauma",
  head: [["link", { rel: "icon", href: "/header.jpg" }]],
  base: "/VuePress_Blog/",
  plugins: [
    ["vuepress-plugin-nuggets-style-copy"],
    ["@vuepress/back-to-top"],
    [
      "vuepress-plugin-auto-sidebar",
      {
        title: {
          mode: "titlecase",
          map: {
            "/engineer/ssh/": "SSH",
            "/fe-basic/js/": "JS",
          }
        }
      },
    ],
  ],
  markdown: { 
    lineNumbers: true,
    // extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "前端碎片",
        items: [
          {
            text: "JS",
            link: "/fe-piece/js"
          }
        ]
      },
      {
        text: "前端基础",
        items: [
          {
            text: "JS",
            link: "/fe-basic/js/this 指向"
          }
        ]
      },
      {
        text: "工程化",
        items: [
          {
            text: "Git",
            link: "/engineer/git/git commit 提交规范"
          },
          {
            text: "SSH",
            link: "/engineer/ssh/ssh 连接 github"
          }
        ]
      },
      {
        text: "面试",
        items: [
          {
            text: "面经",
            link: "/interview/question/html",
          },
          {
            text: "题库",
            link: "/interview/puzzler/js"
          }
        ],
      },
    ],
    sidebar: "auto",
  },
};
