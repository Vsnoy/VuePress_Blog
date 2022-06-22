module.exports = {
  title: "Trauma",
  head: [["link", { rel: "icon", href: "/header.jpg" }]],
  base: "/VuePress_Blog/",
  plugins: [
    [
      "vuepress-plugin-auto-sidebar",
      {
        // options
      },
    ],
    ["vuepress-plugin-nuggets-style-copy"],
    ["@vuepress/back-to-top"],
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
        link: "/engineer/git/git commit 提交规范",
      },
    ],
    sidebar: "auto",
  },
};
