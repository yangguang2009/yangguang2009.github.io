import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Yang'Website",
  tagline: "Welcome to Yang'Website!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yangguang2009.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yangguang2009", // Usually your GitHub org/user name.
  projectName: "yangguang2009.github.io", // Usually your repo name.
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-D0R56YJK18",
          // anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Yang'Website",
      logo: {
        alt: "Yang'Website Logo",
        src: "img/logo.png",
      },
      items: [
        // left
        {
          to: "/acunote",
          label: "AcuNote",
          position: "left",
        },
        {
          to: "/w3s",
          label: "W3S",
          position: "left",
        },
        {
          to: "/classicalchinese",
          label: "Classical Chinese",
          position: "left",
        },
        {
          to: "/stylerater",
          label: "Style Rater",
          position: "left",
        },
        {
          to: "/chinesemeal",
          label: "Chinese Meal",
          position: "left",
        },
        {
          to: "/linkland",
          label: "LinkLand",
          position: "left",
        },
        {
          to: "/hearnear",
          label: "HearNear",
          position: "left",
        },
        {
          to: "/w3",
          label: "W3",
          position: "left",
        },
        {
          to: "/talkcast",
          label: "TalkCast",
          position: "left",
        },
        {
          to: "/cultour",
          label: "Cultour",
          position: "left",
        },
        {
          to: "/danciriji",
          label: "单词日记",
          position: "left",
        },
        {
          to: "/tcmaid",
          label: "TCM AID",
          position: "left",
        },

        // right
        { to: "/blog", label: "Blog", position: "right" },
        {
          type: "docSidebar",
          sidebarId: "tutorialsSidebar",
          label: "Tutorials",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "manualsSidebar",
          label: "Docs",
          position: "right",
        },
        {
          to: "/about",
          label: "About",
          position: "right",
        },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yang'Website. Built with Docusaurus.`,
    },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
  } satisfies Preset.ThemeConfig,
  plugins: ["@docusaurus/theme-live-codeblock"],
};

export default config;
