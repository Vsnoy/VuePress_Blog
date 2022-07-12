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
  markdown: { lineNumbers: true },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "前端基础",
        items: [
          {
            text: "JS",
            link: "/fe-basic/js/var、let 及 const 区别"
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
