import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sidebarConfig from './src/data/sidebarConfig';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import { rehypeTable } from "./plugins/rehype-table.mjs";
import icon from "astro-icon";
import { rehypeExternalLinks } from "./plugins/rehype-external-links.mjs";
import AutoImport from "astro-auto-import";

// TODO:
import starlightLinksValidator from "starlight-links-validator";
import {redirects} from './src/data/redirects';



// TODO:
import sitemap from "@astrojs/sitemap";

const shouldLoadPlausible = import.meta.env.PROD && import.meta.env.PUBLIC_IS_ANALYTICS_ENABLED;

const plausibleScriptTag = shouldLoadPlausible ?  {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.tagged-events.js",
            "data-domain": "kinde.com",
            defer: true
          }
        }  : {
          tag: "script",
          content: "// placeholder for Plausible script. Only loaded correctly in production with `PUBLIC_IS_ANALYTICS_ENABLED` set to `true`."
        };

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
  devToolbar: {
    enabled: false
  },
  redirects: redirects,
  experimental: {
    contentCollectionCache: true,
    clientPrerender: true,
    directRenderScript: true
  },
  integrations: [
    starlight({
      title: 'Kinde docs',
      description: "Our developer tools provide everything you need to get started with Kinde.",
      disable404Route: true,
      social: {
        github: "https://github.com/kinde-oss/documentation"
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
        },
        plausibleScriptTag
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
        Sidebar: "./src/starlight-overrides/Sidebar.astro"
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
    AutoImport({
      imports: [
        "./src/components/SDKSelector.astro",
        "./src/components/YoutubeVideo.astro",
        "./src/components/Note.astro",
        "./src/components/FileTree.astro"
      ]
    }),
    sitemap()
  ],
  build: {
    inlineStylesheets: "auto"
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkConfig],
      rehypeTable,
      rehypeExternalLinks
    ]
  }
});