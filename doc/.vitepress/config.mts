import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Element extended icon pack",
  description: "Element extended icon pack",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      },
      {
        text: "Packages",
        items: [{ text: "Vue", link: "/packages/vue" }]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  }
});
