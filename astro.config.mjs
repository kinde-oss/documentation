import sitemap from "@astrojs/sitemap";
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import AutoImport from "astro-auto-import";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import starlightLinksValidator from "starlight-links-validator";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import { rehypeExternalLinks } from "./plugins/rehype-external-links.mjs";
import { rehypeTable } from "./plugins/rehype-table.mjs";
import sidebarConfig from './src/data/sidebarConfig';

const expressiveCodeOptions = {
  themes: ["min-dark", "material-theme-lighter"],
  styleOverrides: {
    frames: {
      shadowColor: "none",
      tooltipSuccessBackground: "black"
    }
  }
};


// https://astro.build/config
export default defineConfig({
  prefetch: false,
  site: "https://docs.kinde.com",
  devToolbar: {
    enabled: false
  },
  redirects: {
    "/developer-tools/kinde-api/register-manage-apis/":
      "/developer-tools/your-apis/register-manage-apis/",
    "/developer-tools/kinde-api/protect-your-api/": "/developer-tools/your-apis/protect-your-api/",
    "/developer-tools/kinde-api/access-to-your-api/":
      "/developer-tools/your-apis/access-to-your-api/",
    "/developer-tools/kinde-api/custom-api-scopes/": "/developer-tools/your-apis/custom-api-scopes/"
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkConfig],
      rehypeTable,
      rehypeExternalLinks
    ]
  },
  integrations: [
    starlight({
      title: "Kinde docs",
      description: "Our developer tools provide everything you need to get started with Kinde.",
      disable404Route: true,
      social: {
        github: "https://github.com/kinde-oss" /* update to repo specific one when it is public */
      },
      sidebar: sidebarConfig,
      customCss: [
        "@fontsource/inter/400.css",
        "@fontsource/inter/500.css",
        "./src/styles/custom.css",
        "./src/styles/tailwind.css"
      ],
      pagefind: false,
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.png",
            sizes: "any"
          }
        }
      ],
      components: {
        Head: "./src/starlight-overrides/Head.astro",
        Header: "./src/starlight-overrides/Header.astro",
        Footer: "./src/starlight-overrides/Footer.astro",
        Search: "./src/starlight-overrides/Search.astro",
        PageFrame: "./src/starlight-overrides/Page.astro",
        PageTitle: "./src/starlight-overrides/PageTitle.astro",
        ThemeSelect: "./src/starlight-overrides/ThemeSelect.astro",
        SiteTitle: "./src/starlight-overrides/SiteTitle.astro",
        Pagination: "./src/starlight-overrides/Pagination.astro",
        MobileMenuFooter: "./src/starlight-overrides/MobileMenuFooter.astro",
        Sidebar: "./src/starlight-overrides/Sidebar.astro",
        SocialIcons: "./src/starlight-overrides/SocialIcons.astro"
      },
      tableOfContents: {
        maxHeadingLevel: 2
      },
      // editLink: {
      //   baseUrl: "https://github.com/kinde-oss/documentation/edit/main",
      // },
      lastUpdated: false,
      titleDelimiter: "-",
      expressiveCode: expressiveCodeOptions
    }),
    tailwind({
      applyBaseStyles: false
    }),
    icon(),
    sitemap(),
    starlightLinksValidator(),
    AutoImport({
      imports: [
        "./src/components/SDKSelector.astro",
        "./src/components/YoutubeVideo.astro",
        "./src/components/Note.astro",
        "./src/components/FileTree.astro"
      ]
    })
  ]
});