import sitemap from "@astrojs/sitemap";
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import AutoImport from "astro-auto-import";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import { rehypeExternalLinks } from "./plugins/rehype-external-links.mjs";
import { rehypeTable } from "./plugins/rehype-table.mjs";
import sidebarConfig from './src/data/sidebarConfig';
import mdx from "@astrojs/mdx";


const expressiveCodeOptions = {
  themes: ["min-dark", "material-theme-lighter"],
  styleOverrides: {
    borderRadius: "0.5rem",
    frames: {
      shadowColor: "none",
      tooltipSuccessBackground: "black",
      inlineButtonBorder: "transparent"
      
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
    "/developer-tools/kinde-api/protect-your-api/": 
      "/developer-tools/your-apis/protect-your-api/",
    "/developer-tools/kinde-api/access-to-your-api/":
      "/developer-tools/your-apis/access-to-your-api/",
    "/developer-tools/kinde-api/custom-api-scopes/":
      "/developer-tools/your-apis/custom-api-scopes/",
    "/developer-tools/kinde-api/register-an-api/":
      "/developer-tools/your-apis/register-manage-apis/",
    "/developer-tools/kinde-api/add-a-m2m-application-for-api-access/":
      "/developer-tools/kinde-api/connect-to-kinde-api/",
    "/developer-tools/kinde-api/get-access-token-for-connecting-securely-to-kindes-api/":
      "/developer-tools/kinde-api/access-token-for-api/",
    "/developer-tools/kinde-api/test-the-connection-to-kindes-api/":
      "/developer-tools/kinde-api/troubleshoot-kinde-api/",
    "/developer-tools/sdks/native/expo-react-native/": 
      "/developer-tools/sdks/native/expo/",
    "/design/pages/design-your-welcome-pages/":
      "/design/brand/apply-branding-for-an-organization/",
    "/developer-tools/guides/deploy-on-vercel/kinde.com/":
      "/developer-tools/guides/deploy-on-vercel/",
    "/design/pages/set-language-for-pages/":
      "/design/content-customization/set-language-for-pages/",
    "/design/pages/internationalization/":
      "/design/content-customization/set-language-for-pages/",
    
    // Section-level redirects to prevent 404s when users truncate URLs
    "/authenticate/":
      "/authenticate/about-auth/about-authentication/",
    "/billing/":
      "/billing/about-billing/about-billing/",
    "/build/":
      "/build/applications/about-applications/",
    "/contribute/":
      "/contribute/",
    "/design/":
      "/design/brand/global-brand-defaults/",
    "/developer-tools/":
      "/developer-tools/about/our-sdks/",
    "/get-started/":
      "/get-started/apis-and-sdks/about-kinde-apis/",
    "/integrate/":
      "/integrate/connected-apps/add-connected-apps/",
    "/machine-to-machine-applications/":
      "/machine-to-machine-applications/about-m2m/index/",
    "/manage-your-account/":
      "/manage-your-account/business-information/update-your-details/",
    "/manage-users/":
      "/manage-users/about/index/",
    "/properties/":
      "/properties/about-properties/index/",
    "/releases/":
      "/releases/about/about-feature-flags/",
    "/trust-center/":
      "/trust-center/agreements/terms-of-service/",
    "/workflows/":
      "/workflows/about-workflows/index/",
    
    // Authenticate section subfolder redirects
    "/authenticate/about-auth/":
      "/authenticate/about-auth/about-authentication/",
    "/authenticate/auth-guides/":
      "/authenticate/auth-guides/enterprise-connections-identity/",
    "/authenticate/authentication-methods/":
      "/authenticate/authentication-methods/email-authentication/",
    "/authenticate/custom-configurations/":
      "/authenticate/custom-configurations/authentication-experience/",
    "/authenticate/enterprise-connections/":
      "/authenticate/enterprise-connections/about-enterprise-connections/",
    "/authenticate/manage-authentication/":
      "/authenticate/manage-authentication/authenticated-sessions-across-multiple-applications/",
    "/authenticate/multi-factor-auth/":
      "/authenticate/multi-factor-auth/about-multi-factor-authentication/",
    "/authenticate/social-sign-in/":
      "/authenticate/social-sign-in/add-social-sign-in/",
    
    // Billing section subfolder redirects
    "/billing/about-billing/":
      "/billing/about-billing/about-billing/",
    "/billing/billing-user-experience/":
      "/billing/billing-user-experience/add-pricing-table/",
    "/billing/get-started/":
      "/billing/get-started/add-billing-role/",
    "/billing/manage-plans/":
      "/billing/manage-plans/about-plans/",
    "/billing/manage-subscribers/":
      "/billing/manage-subscribers/add-metered-usage/",
    "/billing/payment-management/":
      "/billing/payment-management/manage-stripe-connection/",
    "/billing/pricing/":
      "/billing/pricing/pricing-models/",
    
    // Build section subfolder redirects
    "/build/applications/":
      "/build/applications/about-applications/",
    "/build/domains/":
      "/build/domains/pointing-your-domain/",
    "/build/env-variables/":
      "/build/env-variables/add-manage-env-variables/",
    "/build/environments/":
      "/build/environments/environments/",
    "/build/organizations/":
      "/build/organizations/add-and-manage-organizations/",
    "/build/set-up-options/":
      "/build/set-up-options/access-policies/",
    "/build/tokens/":
      "/build/tokens/about-access-tokens/",
    
    // Design section subfolder redirects
    "/design/brand/":
      "/design/brand/global-brand-defaults/",
    "/design/content-customization/":
      "/design/content-customization/how-content-is-managed/",
    "/design/customize-with-code/":
      "/design/customize-with-code/connect-repo/",
    "/design/pages/":
      "/design/pages/page-layout/",
    
    // Developer tools section subfolder redirects
    "/developer-tools/about/":
      "/developer-tools/about/our-sdks/",
    "/developer-tools/account-api/":
      "/developer-tools/account-api/about-account-api/",
    "/developer-tools/guides/":
      "/developer-tools/guides/code-sync-errors/",
    "/developer-tools/kinde-api/":
      "/developer-tools/kinde-api/about-m2m-scopes/",
    "/developer-tools/sdks/backend/":
      "/developer-tools/sdks/backend/apollo-graphql/",
    "/developer-tools/sdks/frontend/":
      "/developer-tools/sdks/frontend/javascript-sdk/",
    "/developer-tools/sdks/native/":
      "/developer-tools/sdks/native/android-sdk/",
    "/developer-tools/your-apis/":
      "/developer-tools/your-apis/access-to-your-api/",
    
    // Get started section subfolder redirects
    "/get-started/apis-and-sdks/":
      "/get-started/apis-and-sdks/about-kinde-apis/",
    "/get-started/connect/":
      "/get-started/connect/callback-urls/",
    "/get-started/guides/":
      "/get-started/guides/byo-code/",
    "/get-started/learn-about-kinde/":
      "/get-started/learn-about-kinde/kinde-product-security/",
    "/get-started/switch-to-kinde/":
      "/get-started/switch-to-kinde/auth0-to-kinde/",
    "/get-started/team-and-account/":
      "/get-started/team-and-account/add-team-members/",
    
    // Integrate section subfolder redirects
    "/integrate/connected-apps/":
      "/integrate/connected-apps/add-connected-apps/",
    "/integrate/third-party-tools/":
      "/integrate/third-party-tools/cloudflare-zero-trust/",
    "/integrate/webhooks/":
      "/integrate/webhooks/about-webhooks/",
    
    // Machine-to-machine applications section subfolder redirects
    "/machine-to-machine-applications/about-m2m/":
      "/machine-to-machine-applications/about-m2m/authenticate-with-m2m/",
    "/machine-to-machine-applications/m2m-application-setup/":
      "/machine-to-machine-applications/m2m-application-setup/add-feature-flags-to-m2m-applications/",
    "/machine-to-machine-applications/m2m-token-customization/":
      "/machine-to-machine-applications/m2m-token-customization/customize-m2m-tokens/",
    "/machine-to-machine-applications/m2m-workflow-automation/":
      "/machine-to-machine-applications/m2m-workflow-automation/m2m-workflow/",
    "/machine-to-machine-applications/organization-scoped-m2m-apps/":
      "/machine-to-machine-applications/organization-scoped-m2m-apps/enforce-org-m2m-access-in-your-api/",
    "/machine-to-machine-applications/troubleshooting-m2m/":
      "/machine-to-machine-applications/troubleshooting-m2m/troubleshoot-m2m-token-errors/",
    
    // Manage your account section subfolder redirects
    "/manage-your-account/business-information/":
      "/manage-your-account/business-information/change-your-business-time-zone/",
    "/manage-your-account/profile-and-plan/":
      "/manage-your-account/profile-and-plan/change-kinde-plan/",
    "/manage-your-account/your-data/":
      "/manage-your-account/your-data/check-your-mau/",
    
    // Manage users section subfolder redirects
    "/manage-users/access-control/":
      "/manage-users/access-control/accept-policies-signup/",
    "/manage-users/add-and-edit/":
      "/manage-users/add-and-edit/add-and-edit-users/",
    "/manage-users/roles-and-permissions/":
      "/manage-users/roles-and-permissions/apply-roles-and-permissions-to-users/",
    "/manage-users/view-activity/":
      "/manage-users/view-activity/hotjar/",
    
    // Properties section subfolder redirects
    "/properties/about-properties/":
      "/properties/about-properties/application-properties/",
    "/properties/work-with-properties/":
      "/properties/work-with-properties/manage-properties/",
    
    // Releases section subfolder redirects
    "/releases/about/":
      "/releases/about/about-feature-flags/",
    "/releases/feature-flags/":
      "/releases/feature-flags/add-feature-flag/",
    "/releases/guides/":
      "/releases/guides/guide-to-app-store-approvals/",
    
    // Trust center section subfolder redirects
    "/trust-center/agreements/":
      "/trust-center/agreements/end-user-licence-agreement/",
    "/trust-center/kinde-performance/":
      "/trust-center/kinde-performance/service-status/",
    "/trust-center/privacy-and-compliance/":
      "/trust-center/privacy-and-compliance/compliance/",
    "/trust-center/security/":
      "/trust-center/security/security-at-kinde/",
    
    // Workflows section subfolder redirects
    "/workflows/bindings/":
      "/workflows/bindings/access-token-binding/",
    "/workflows/configuration/":
      "/workflows/configuration/bindings/",
    "/workflows/example-workflows/":
      "/workflows/example-workflows/existing-password-provided-workflow/",
    "/workflows/getting-started/":
      "/workflows/getting-started/connect-repo-for-workflows/",
    "/workflows/manage-workflows/":
      "/workflows/manage-workflows/create-workflow/",
    "/workflows/observability/":
      "/workflows/observability/workflow-build-logs/",
    "/workflows/testing/":
      "/workflows/testing/preview-workflows/"
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
        github: "https://github.com/kinde-oss"
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
          tag: "link"
        }
      ],
      components: {
        Head: "./src/starlight-overrides/Head.astro",
        Header: "./src/starlight-overrides/Header.astro",
        Footer: "./src/starlight-overrides/Footer.astro",
        Search: "./src/starlight-overrides/Search.astro",
        PageFrame: "./src/starlight-overrides/Page.astro",
        PageSidebar: "./src/starlight-overrides/PageSidebar.astro",
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
      editLink: {
        baseUrl: "https://github.com/kinde-oss/documentation/edit/main"
      },
      lastUpdated: false,
      titleDelimiter: "-",
      expressiveCode: expressiveCodeOptions
    }),
    tailwind({
      applyBaseStyles: false
    }),
    icon(),
    sitemap(),
    AutoImport({
      imports: [
        "./src/components/SDKSelector.astro",
        "./src/components/YoutubeVideo.astro",
        "./src/components/Aside.astro",
        "./src/components/FileTree.astro",
        "./src/components/Divider.astro",
        {
          "starlight-package-managers": ["PackageManagers"]
        },
        {
          "@astrojs/starlight/components": ["Tabs", "TabItem"]
        }
      ]
    }),
    mdx() // Typically, with Starlight we wouldn't need to add `mdx`, but the `astro-auto-import` was throwing warnings https://github.com/withastro/starlight/releases/tag/%40astrojs%2Fstarlight%400.23.0
  ]
});
