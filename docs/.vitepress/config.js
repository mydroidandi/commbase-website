export default {
  themeConfig: {
    logo: "/commbase.png",
    siteTitle: "Commbase",
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/" },
      { text: "Install", link: "/install" },
      { text: "Changelog",
          items: [
            { text: "v0.0.1", link: "/item-1" },
            { text: "v0.0.2", link: "/item-2" },
            { text: "v0.0.3", link: "/item-3" },
          ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/mydroidandi/commbase" },
      { icon: "twitter", link: "/" },
      { icon: "discord", link: "/" },
    ],
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};

