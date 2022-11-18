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
            { text: "v0.0.1", link: "/v0-0-1" },
            { text: "v0.0.2", link: "/v0-0-2" },
            { text: "v0.0.3", link: "/v0-0-3" },
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
        text: "1 Introduction",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/guide/introduction" },
        ],
      },
      {
        text: "2 Start, Stop, and Teleport Commbase Application",
        collapsible: false,
        items: [
          { text: "Commbase Start", link: "/guide/commbase-start" },
          { text: "Commbase Stop", link: "/guide/commbase-stop" },
        ],
      },
      {
        text: "3 Useful System Commands",
        collapsible: true,
        items: [
          { text: "Useful System Commands", link: "/guide/useful-system-commands" },
        ],
      },
    ],
  },
};

