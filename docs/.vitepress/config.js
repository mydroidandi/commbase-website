export default {
  themeConfig: {
    logo: "/commbase.png",
    siteTitle: "Commbase",
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide" },
      { text: "Install", link: "/configs" },
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
      { icon: "twitter", link: "#" },
      { icon: "discord", link: "#" },
    ],
  },
};

