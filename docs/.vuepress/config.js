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
        text: "面试",
        link: "/interview/HTML",
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
    ],
    sidebar: "auto",
  },
};
