module.exports = {
  title: "Trauma",
  head: [["link", { rel: "icon", href: "/header.jpg" }]],
  base: "/VuePress_Blog/",
  plugins: [
    ["vuepress-plugin-nuggets-style-copy"],
    ["@vuepress/back-to-top"],
    ['cursor-effects'],
    [
      "md-enhance",
      {
        footnote: true,
      },
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        title: {
          mode: "titlecase",
          map: {
            "/fe-piece/": "Piece",
            "/fe-basic/css/": "CSS",
            "/fe-basic/js/": "JS",
            "/engineer/ssh/": "SSH",
            "/question/js/": "JS",
          }
        }
      },
    ],
  ],
  markdown: { 
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "前端碎片",
        link: "/fe-piece/js"
      },
      {
        text: "前端基础",
        items: [
          {
            text: "CSS",
            link: "/fe-basic/css/盒子模型"
          },
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
            text: "Node",
            link: "/engineer/node/nrm 切换镜像源"
          },
          {
            text: "SSH",
            link: "/engineer/ssh/ssh 连接 github"
          }
        ]
      },
      {
        text: "面试",
        link: "/interview/html",
      },
      {
        text: "题库",
        link: "/question/this 指向",
      },
      {
        text: "资源",
        link: "/resource/study",
      },
    ],
    sidebar: "auto",
  },
};
