// This file has all the data for `Starlight's` sidebar, but it contains some extra data
// we use to enrich and re-use somewhere else, like `icon` and `description`, used in the `Topics` component

const sidebarData = [
  // ─────────────────────────────────────────────
  // 1. GET STARTED
  // ─────────────────────────────────────────────
  {
    label: "Get started",
    description: "Learn about Kinde, connect your app, and deploy",
    icon: "sparkle",
    collapsed: true,
    cardLink: "/get-started/guides/first-things-first/",
    items: [
      {
        label: "First things first",
        link: "/get-started/guides/first-things-first/"
      },
      {
        label: "Start with a Kinde starter kit",
        link: "/get-started/guides/start-with-starter-kit/"
      },
      {label: "Connect existing code base to Kinde", link: "/get-started/guides/byo-code/"},
      {
        label: "Complete your business details",
        link: "/manage-your-account/business-information/update-your-details/"
      },
      {
        label: "Create a waitlist",
        link: "/build/set-up-options/manage-access-requests/"
      },
      {label: "Common set up tasks", link: "/get-started/guides/set-up-tasks/"},
      {
        label: "Connect",
        collapsed: false,
        items: [
          {label: "Custom domain", link: "/build/domains/pointing-your-domain/"},
          {label: "Custom email", link: "/get-started/connect/customize-email-sender/"},
          {label: "Get application keys", link: "/get-started/connect/getting-app-keys/"},
          {label: "Set callback and redirect URLs", link: "/get-started/connect/callback-urls/"}
        ]
      },
      {
        label: "Switch to Kinde",
        collapsed: true,
        items: [
          {
            label: "Migrate to Kinde for user authentication",
            link: "/get-started/switch-to-kinde/switch-to-kinde-for-user-authentication/"
          },
          {
            label: "Migrate to Kinde from Auth0",
            link: "/get-started/switch-to-kinde/auth0-to-kinde/"
          }
        ]
      },
      {
        label: "Learn about Kinde",
        collapsed: true,
        items: [
          {
            label: "What does Kinde do?",
            link: "/get-started/learn-about-kinde/what-does-kinde-do/"
          },
          {
            label: "Kinde for different business models",
            link: "/build/set-up-options/kinde-business-model/"
          },
          {
            label: "Run multiple businesses",
            link: "/build/set-up-options/run-multiple-businesses/"
          },
          {
            label: "Supported data regions",
            link: "/get-started/learn-about-kinde/supported-data-regions/"
          },
          {
            label: "Supported browsers",
            link: "/get-started/learn-about-kinde/kinde-supported-browsers/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 2. SDKs AND FRAMEWORKS
  // ─────────────────────────────────────────────
  {
    label: "SDKs and frameworks",
    description: "Jump right in with our API-first developer tools",
    icon: "dev-tools",
    collapsed: true,
    cardLink: "/developer-tools/about/our-sdks/",
    items: [
      {label: "Kinde SDKs", link: "/developer-tools/about/our-sdks/"},
      {
        label: "Frontend",
        collapsed: false,
        items: [
          {label: "JavaScript", link: "/developer-tools/sdks/frontend/javascript-sdk/"},
          {label: "React", link: "/developer-tools/sdks/frontend/react-sdk/"},
          {label: "Angular (community SDK)", link: "https://github.com/luukhaijes/kinde-angular"}
        ]
      },
      {
        label: "Backend",
        collapsed: true,
        items: [
          {label: ".NET", link: "/developer-tools/sdks/backend/dotnet-sdk/"},
          {label: "Elixir", link: "/developer-tools/sdks/backend/elixir-sdk/"},
          {label: "Express.js", link: "/developer-tools/sdks/backend/express-sdk/"},
          {label: "Java", link: "/developer-tools/sdks/backend/java-sdk/"},
          {label: "Next.js (App Router)", link: "/developer-tools/sdks/backend/nextjs-sdk/"},
          {label: "Next.js (Pages Router)", link: "/developer-tools/sdks/backend/nextjs-prev-sdk/"},
          {label: "Node.js", link: "/developer-tools/sdks/backend/nodejs-sdk/"},
          {label: "Nuxt", link: "/developer-tools/sdks/backend/nuxt-module/"},
          {label: "PHP", link: "/developer-tools/sdks/backend/php-sdk/"},
          {label: "Python", link: "/developer-tools/sdks/backend/python-sdk/"},
          {label: "Remix", link: "/developer-tools/sdks/backend/remix-sdk/"},
          {label: "Ruby", link: "/developer-tools/sdks/backend/ruby-sdk/"},
          {label: "SvelteKit", link: "/developer-tools/sdks/backend/sveltekit-sdk/"},
          {label: "TypeScript", link: "/developer-tools/sdks/backend/typescript-sdk/"},
          {label: "Node/Apollo GraphQL", link: "/developer-tools/sdks/backend/apollo-graphql/"},
          {
            label: "Node/Express GraphQL",
            link: "/developer-tools/sdks/backend/node-express-graphql/"
          }
        ]
      },
      {
        label: "Native",
        collapsed: true,
        items: [
          {label: "Android", link: "/developer-tools/sdks/native/android-sdk/"},
          {label: "Expo", link: "/developer-tools/sdks/native/expo/"},
          {label: "Flutter", link: "/developer-tools/sdks/native/flutter-sdk/"},
          {label: "iOS", link: "/developer-tools/sdks/native/ios-sdk/"},
          {label: "React Native", link: "/developer-tools/sdks/native/react-native-sdk/"}
        ]
      },
      {
        label: "Guides",
        collapsed: false,
        items: [
          {
            label: "Use Kinde without an SDK",
            link: "/developer-tools/about/using-kinde-without-an-sdk/"
          },
          {
            label: "Use Kinde permissions in React and any backend",
            link: "/developer-tools/guides/kinde-permissions-react-and-backend/"
          },
          {
            label: "Manage Kinde configurations via API",
            link: "/developer-tools/guides/manage-kinde-configuration/"
          },
          {
            label: "FastAPI",
            link: "/developer-tools/guides/protect-fastapi-routes-with-kinde/"
          },
          {
            label: "Electron app",
            link: "/developer-tools/guides/kinde-and-electron/"
          },
          {
            label: "ASP.NET (Open ID Connect)",
            link: "/developer-tools/guides/dotnet-open-id-connect/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. AUTHENTICATION
  // ─────────────────────────────────────────────
  {
    label: "Authentication",
    description: "Configure user sign up, sign in, and security verification",
    icon: "authentication",
    collapsed: true,
    cardLink: "/authenticate/about-auth/about-authentication/",
    items: [
      {
        label: "About authentication",
        collapsed: false,
        items: [
          {
            label: "About Kinde authentication",
            link: "/authenticate/about-auth/about-authentication/"
          },
          {label: "Ways to authenticate", link: "/authenticate/about-auth/authentication-methods/"},
          {
            label: "User identity and verification",
            link: "/authenticate/about-auth/identity-and-verification/"
          },
          {
            label: "User communication in Kinde",
            link: "/authenticate/about-auth/user-communication/"
          },
          {
            label: "Kinde Authentication FAQ",
            link: "/authenticate/about-auth/kinde-authentication-faq/"
          },
          {
            label: "General Authentication FAQ",
            link: "/authenticate/about-auth/authentication-faq/"
          }
        ]
      },
      {
        label: "Authentication methods",
        collapsed: false,
        items: [
          {
            label: "Select authentication options",
            link: "/authenticate/authentication-methods/set-up-user-authentication/"
          },
          {label: "Email", link: "/authenticate/authentication-methods/email-authentication/"},
          {
            label: "Password",
            link: "/authenticate/authentication-methods/password-authentication/"
          },
          {
            label: "Passwordless",
            link: "/authenticate/authentication-methods/passwordless-authentication/"
          },
          {
            label: "Username",
            link: "/authenticate/authentication-methods/username-authentication/"
          },
          {label: "Phone", link: "/authenticate/authentication-methods/phone-authentication/"},
          {
            label: "WhatsApp",
            link: "/authenticate/authentication-methods/whatsapp-authentication/"
          },
          {
            label: "Email deliverability in Kinde",
            link: "/authenticate/authentication-methods/email-deliverability/"
          },
          {
            label: "SMS deliverability in Kinde",
            link: "/authenticate/authentication-methods/sms-deliverability/"
          }
        ]
      },
      {
        label: "Social connections",
        collapsed: true,
        items: [
          {
            label: "Add and manage social connections",
            link: "/authenticate/social-sign-in/add-social-sign-in/"
          },
          {label: "Apple", link: "/authenticate/social-sign-in/apple/"},
          {label: "Bitbucket", link: "/authenticate/social-sign-in/bitbucket-sso/"},
          {label: "Clever", link: "/authenticate/social-sign-in/clever/"},
          {label: "Discord", link: "/authenticate/social-sign-in/discord/"},
          {label: "Facebook", link: "/authenticate/social-sign-in/facebook/"},
          {label: "GitHub", link: "/authenticate/social-sign-in/github/"},
          {label: "GitLab", link: "/authenticate/social-sign-in/gitlab/"},
          {label: "Google", link: "/authenticate/social-sign-in/google/"},
          {label: "LinkedIn", link: "/authenticate/social-sign-in/linkedin/"},
          {label: "Microsoft", link: "/authenticate/social-sign-in/microsoft-sso/"},
          {label: "Roblox", link: "/authenticate/social-sign-in/roblox-sso/"},
          {label: "Slack", link: "/authenticate/social-sign-in/slack/"},
          {label: "Twitch", link: "/authenticate/social-sign-in/twitch/"},
          {label: "X (Twitter)", link: "/authenticate/social-sign-in/twitter/"},
          {label: "Xero", link: "/authenticate/social-sign-in/xero-sso/"},
          {
            label: "Custom OAuth 2.0",
            link: "/authenticate/custom-configurations/custom-oauth2-connection/"
          }
        ]
      },
      {
        label: "Enterprise connections",
        collapsed: true,
        items: [
          {
            label: "Connect",
            collapsed: false,
            items: [
              {
                label: "Manage enterprise connections",
                link: "/authenticate/enterprise-connections/about-enterprise-connections/"
              },
              {
                label: "Microsoft Entra ID (OAuth 2.0, WS-Fed)",
                link: "/authenticate/enterprise-connections/azure/"
              },
              {
                label: "Microsoft Entra ID (SAML)",
                link: "/authenticate/enterprise-connections/entra-id-saml/"
              },
              {label: "Cloudflare", link: "/authenticate/enterprise-connections/cloudflare-saml/"},
              {
                label: "Google Workspace",
                link: "/authenticate/enterprise-connections/custom-saml-google-workspace/"
              },
              {label: "LastPass", link: "/authenticate/enterprise-connections/lastpass-sso/"},
              {label: "Okta", link: "/authenticate/enterprise-connections/okta-saml-connection/"},
              {label: "Custom SAML", link: "/authenticate/enterprise-connections/custom-saml/"}
            ]
          },
          {
            label: "Guides",
            collapsed: true,
            items: [
              {
                label: "Enterprise connections for B2B",
                link: "/authenticate/enterprise-connections/enterprise-connections-b2b/"
              },
              {
                label: "Provisioning users",
                link: "/authenticate/enterprise-connections/provision-users-enterprise/"
              },
              {
                label: "Mapping and syncing users",
                link: "/authenticate/enterprise-connections/mapping-users-enterprise/"
              },
              {
                label: "Home realm / IdP discovery",
                link: "/authenticate/enterprise-connections/home-realm-discovery/"
              },
              {
                label: "Migrating email to enterprise identity",
                link: "/authenticate/enterprise-connections/migrate-users-to-enterprise-identity/"
              },
              {
                label: "Advanced SAML configurations",
                link: "/authenticate/enterprise-connections/advanced-saml-configurations/"
              },
              {
                label: "IdP-initiated SAML SSO",
                link: "/authenticate/enterprise-connections/idp-initiated-saml-sso/"
              },
              {
                label: "Refresh SAML certificate",
                link: "/authenticate/enterprise-connections/refresh-saml-certificate/"
              }
            ]
          },
          {
            label: "Self-serve SSO",
            collapsed: true,
            items: [
              {
                label: "Add SSO via self-serve portal",
                link: "/authenticate/self-serve-sso/add-sso-self-serve/"
              },
              {
                label: "Manage customer SSO connections",
                link: "/authenticate/self-serve-sso/manage-self-serve-connections/"
              },
              {
                label: "Switch on SSO self-management",
                link: "/authenticate/self-serve-sso/self-manage-sso-per-org/"
              }
            ]
          }
        ]
      },
      {
        label: "Multi-factor authentication",
        collapsed: true,
        items: [
          {
            label: "About multi-factor authentication",
            link: "/authenticate/multi-factor-auth/about-multi-factor-authentication/"
          },
          {
            label: "Enable multi-factor authentication",
            link: "/authenticate/multi-factor-auth/enable-multi-factor-authentication/"
          },
          {
            label: "Set multi-factor authentication for an organization",
            link: "/authenticate/multi-factor-auth/mfa-per-org/"
          }
        ]
      },
      {
        label: "Custom configurations",
        collapsed: true,
        items: [
          {
            label: "Manage the authentication experience",
            link: "/authenticate/custom-configurations/authentication-experience/"
          },
          {
            label: "Disable self sign-up",
            link: "/authenticate/custom-configurations/disable-sign-up/"
          },
          {
            label: "Custom sign-up and sign-in pages",
            link: "/authenticate/custom-configurations/custom-authentication-pages/"
          },
          {
            label: "Pre-populate user identity on sign in",
            link: "/authenticate/custom-configurations/prepopulate-identity-sign-in/"
          },
          {label: "Redirect users", link: "/authenticate/custom-configurations/redirect-users/"},
          {label: "Static IP", link: "/authenticate/custom-configurations/static-ip/"},
          {
            label: "Custom OAuth 2.0 connections",
            link: "/authenticate/custom-configurations/custom-oauth2-connection/"
          },
          {
            label: "Proxy your Kinde auth pages through Cloudflare",
            link: "/authenticate/custom-configurations/proxy-your-kinde-auth-pages-through-cloudflare/"
          },
          {
            label: "Change authentication for an application",
            link: "/authenticate/manage-authentication/manage-authentication-applications/"
          },
          {
            label: "Keep your product in sync with Kinde",
            link: "/authenticate/manage-authentication/sync-with-kinde/"
          },
          {
            label: "Mixed auth set up for B2B and B2C",
            link: "/authenticate/auth-guides/mixed-b2b-b2c/"
          },
          {
            label: "Pass parameters to identity providers",
            link: "/authenticate/auth-guides/pass-params-idp/"
          },
          {
            label: "Guide to enterprise auth and user identities",
            link: "/authenticate/auth-guides/enterprise-connections-identity/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 5. SESSION MANAGEMENT
  // ─────────────────────────────────────────────
  {
    label: "Session management",
    description: "Manage sessions, tokens, and authentication state",
    icon: "authentication",
    collapsed: true,
    cardLink: "/authenticate/manage-authentication/session-management/",
    items: [
      {
        label: "Sessions",
        collapsed: false,
        items: [
          {
            label: "Session management",
            link: "/authenticate/manage-authentication/session-management/"
          },
          {
            label: "Authenticated sessions across multiple applications",
            link: "/authenticate/manage-authentication/user-auth-applications/"
          },
          {
            label: "Session management per organization",
            link: "/authenticate/manage-authentication/session-management-per-organization/"
          }
        ]
      },
      {
        label: "Tokens",
        collapsed: false,
        items: [
          {label: "Configure token and session expiry", link: "/build/tokens/configure-tokens/"},
          {label: "Access tokens", link: "/build/tokens/about-access-tokens/"},
          {label: "ID tokens", link: "/build/tokens/about-id-tokens/"},
          {label: "Refresh tokens", link: "/build/tokens/refresh-tokens/"},
          {label: "Token customization", link: "/build/tokens/token-customization/"},
          {
            label: "OAuth 2.0 access token validation and error codes",
            link: "/build/tokens/token-validation-errors/"
          },
          {label: "Using OAuth scopes", link: "/build/tokens/oath-scopes/"},
          {label: "Verifying JSON Web Tokens", link: "/build/tokens/verifying-json-web-tokens/"},
          {label: "Decoding JSON Web Tokens", link: "/build/tokens/decode-jwts/"}
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 4. USER MANAGEMENT
  // ─────────────────────────────────────────────
  {
    label: "User management",
    description: "Manage users, roles, permissions, and custom data",
    icon: "profile",
    collapsed: true,
    cardLink: "/manage-users/about/",
    items: [
      {
        label: "About user management",
        link: "/manage-users/about/"
      },
      {
        label: "Add and edit",
        collapsed: false,
        items: [
          {
            label: "Manually add and edit users",
            link: "/manage-users/add-and-edit/add-and-edit-users/"
          },
          {
            label: "Add and manage user identities",
            link: "/manage-users/add-and-edit/add-manage-user-identities/"
          },
          {
            label: "Import users via CSV or JSON",
            link: "/manage-users/add-and-edit/import-users-in-bulk/"
          },
          {
            label: "Import users in bulk from Auth0",
            link: "/manage-users/add-and-edit/import-users-from-auth0/"
          },
          {
            label: "Troubleshoot user import errors",
            link: "/manage-users/add-and-edit/troubleshoot-user-import-errors/"
          },
          {label: "Manage subscribers", link: "/manage-users/add-and-edit/manage-subscribers/"},
          {
            label: "Move users between Kinde environments and businesses",
            link: "/manage-users/add-and-edit/move-users/"
          },
          {
            label: "Send user invitations with webhooks",
            link: "/manage-users/add-and-edit/send-invitations-webhook/"
          }
        ]
      },
      {
        label: "Roles and permissions",
        collapsed: true,
        items: [
          {
            label: "Define user permissions",
            link: "/manage-users/roles-and-permissions/user-permissions/"
          },
          {label: "Manage user roles", link: "/manage-users/roles-and-permissions/user-roles/"},
          {
            label: "Apply roles and permissions to users",
            link: "/manage-users/roles-and-permissions/apply-roles-and-permissions-to-users/"
          },
          {
            label: "Set default user roles",
            link: "/manage-users/roles-and-permissions/default-user-roles/"
          }
        ]
      },
      {
        label: "User account actions",
        collapsed: true,
        items: [
          {
            label: "Delete or suspend users",
            link: "/manage-users/access-control/delete-or-suspend-users/"
          },
          {
            label: "Reset a user's password",
            link: "/manage-users/access-control/reset-user-password/"
          },
          {
            label: "Set temporary password",
            link: "/manage-users/access-control/set-temporary-password/"
          },
          {
            label: "Reset multi-factor authentication for a user",
            link: "/manage-users/access-control/reset-multi-factor-authentication-for-a-user/"
          },
          {
            label: "Accept policies at signup",
            link: "/manage-users/access-control/accept-policies-signup/"
          }
        ]
      },
      {
        label: "Properties",
        collapsed: true,
        items: [
          {label: "Custom claims and data with properties", link: "/properties/about-properties/"},
          {
            label: "Add and manage custom data with properties",
            link: "/properties/work-with-properties/manage-properties/"
          },
          {
            label: "Customize tokens using properties",
            link: "/properties/work-with-properties/properties-in-tokens/"
          },
          {
            label: "Add and manage property categories",
            link: "/properties/work-with-properties/property-groups/"
          },
          {
            label: "Edit custom data for users via properties",
            link: "/properties/work-with-properties/view-user-properties/"
          },
          {
            label: "Add marketing tags using properties",
            link: "/properties/work-with-properties/marketing-tags-properties/"
          }
        ]
      },
      {
        label: "Self-serve portal",
        collapsed: true,
        items: [
          {
            label: "Customer self-serve portal",
            link: "/build/self-service-portal/about-self-service-portal/"
          },
          {
            label: "Enable self-serve portal for orgs",
            link: "/build/self-service-portal/self-serve-portal-for-orgs/"
          },
          {
            label: "Enable self-serve portal for users",
            link: "/build/self-service-portal/self-serve-portal-for-users/"
          }
        ]
      },
      {
        label: "Activity",
        collapsed: true,
        items: [
          {label: "View audit log", link: "/manage-users/view-activity/view-audit-log/"},
          {label: "Audit log", link: "/manage-users/view-activity/view-user-activity/"}
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 6. ORGANIZATION MANAGEMENT
  // ─────────────────────────────────────────────
  {
    label: "Organization management",
    description: "Manage organizations, members, access, and multi-tenancy",
    icon: "profile",
    collapsed: true,
    cardLink: "/build/organizations/multi-tenancy-using-organizations/",
    items: [
      {
        label: "About organizations",
        link: "/build/organizations/multi-tenancy-using-organizations/"
      },
      {
        label: "Kinde organizations for developers",
        link: "/build/organizations/orgs-for-developers/"
      },
      {
        label: "Set up",
        collapsed: false,
        items: [
          {
            label: "Add and manage organizations",
            link: "/build/organizations/add-and-manage-organizations/"
          },
          {label: "Import organizations", link: "/build/organizations/import-organizations/"},
          {label: "Delete an organization", link: "/build/organizations/delete-organization/"}
        ]
      },
      {
        label: "Members",
        collapsed: true,
        items: [
          {
            label: "Manage user sign up to organizations",
            link: "/build/organizations/allow-user-signup-org/"
          },
          {
            label: "Allow organization creation on sign up",
            link: "/build/organizations/allow-org-create-on-signup/"
          },
          {
            label: "Manage users across organizations",
            link: "/manage-users/about/manage-users-across-organizations/"
          },
          {
            label: "Build a switch to navigate between organizations",
            link: "/authenticate/manage-authentication/navigate-between-organizations/"
          },
          {
            label: "Sign users in to last organization",
            link: "/authenticate/manage-authentication/sign-in-to-last-org/"
          }
        ]
      },
      {
        label: "Access and auth",
        collapsed: true,
        items: [
          {
            label: "Set access policies for an organization",
            link: "/build/organizations/organization-access-policies/"
          },
          {
            label: "Set custom authentication per organization",
            link: "/authenticate/manage-authentication/organization-auth-experience/"
          },
          {
            label: "Manage organization-level auth features",
            link: "/authenticate/custom-configurations/advanced-organization/"
          }
        ]
      },
      {
        label: "Customize",
        collapsed: true,
        items: [
          {
            label: "Customize email sender for an organization",
            link: "/build/organizations/email-sender-organization/"
          },
          {
            label: "Customize the self-serve portal for an organization",
            link: "/build/organizations/self-serve-portal-per-org/"
          },
          {
            label: "Apply unique branding for an organization",
            link: "/design/brand/apply-branding-for-an-organization/"
          },
          {
            label: "Add custom data for orgs",
            link: "/properties/about-properties/organization-properties/"
          }
        ]
      },
      {
        label: "Integrations",
        collapsed: true,
        items: [
          {
            label: "Give API access to an organization using M2M",
            link: "/build/organizations/organization-m2m-applications/"
          },
          {
            label: "Organization-level API keys",
            link: "/manage-your-apis/about-api-keys/organization-api-keys/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 7. DESIGN
  // ─────────────────────────────────────────────
  {
    label: "Design",
    description: "Integrate your brand, and update content for pages and screens",
    icon: "brand",
    collapsed: true,
    cardLink: "/design/brand/global-brand-defaults/",
    items: [
      {
        label: "Set global brand defaults",
        link: "/design/brand/global-brand-defaults/"
      },
      {
        label: "Apply unique branding for an organization",
        link: "/design/brand/apply-branding-for-an-organization/"
      },
      {
        label: "Remove Kinde branding from sign in pages",
        link: "/design/brand/remove-kinde-branding/"
      },
      {label: "Add homepage URL to the sign-in page", link: "/design/brand/link-to-homepage/"},
      {label: "Page layout", autogenerate: {directory: "design/pages"}, collapsed: true},
      {
        label: "Content",
        autogenerate: {directory: "design/content-customization"},
        collapsed: true
      },
      {
        label: "Customize with code",
        autogenerate: {directory: "design/customize-with-code"},
        collapsed: true
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 8. BILLING
  // ─────────────────────────────────────────────
  {
    label: "Billing",
    description: "Monetize your product, build plans, and accept payments",
    icon: "billing",
    collapsed: true,
    cardLink: "/billing/about-billing/about-billing/",
    items: [
      {
        label: "About billing",
        autogenerate: {directory: "billing/about-billing"},
        collapsed: false
      },
      {
        label: "Get started",
        autogenerate: {directory: "billing/get-started"},
        collapsed: false
      },
      {
        label: "Plans and pricing",
        collapsed: true,
        items: [
          {label: "About plans", link: "/billing/manage-plans/about-plans/"},
          {label: "Create plans", link: "/billing/manage-plans/create-plans/"},
          {
            label: "Plan upgrade and downgrade policies",
            link: "/billing/manage-plans/upgrade-downgrade-plans/"
          },
          {label: "Cancel a subscription", link: "/billing/manage-plans/cancel-plans/"},
          {
            label: "Add and manage plan groups",
            link: "/billing/manage-plans/add-manage-plan-groups/"
          },
          {label: "Pricing models", link: "/billing/pricing/pricing-models/"}
        ]
      },
      {
        label: "Payment management",
        autogenerate: {directory: "billing/payment-management"},
        collapsed: true
      },
      {
        label: "Subscription management",
        autogenerate: {directory: "billing/manage-subscribers"},
        collapsed: true
      },
      {
        label: "Billing UX",
        autogenerate: {directory: "billing/billing-user-experience"},
        collapsed: true
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 9. WORKFLOWS
  // ─────────────────────────────────────────────
  {
    label: "Workflows",
    description: "Execute custom code in response to Kinde triggers",
    collapsed: true,
    icon: "workflow",
    cardLink: "/workflows/about-workflows/",
    items: [
      {
        label: "Getting started",
        collapsed: false,
        items: [
          {label: "About workflows", link: "/workflows/about-workflows/"},
          {label: "Quick start guide", link: "/workflows/getting-started/quick-start-guide/"},
          {label: "Project structure", link: "/workflows/getting-started/project-structure/"},
          {label: "Workflow files", link: "/workflows/getting-started/workflow-files/"},
          {
            label: "Connect your workflows repo and branch",
            link: "/workflows/getting-started/connect-repo-for-workflows/"
          },
          {
            label: "Infrastructure package",
            link: "/workflows/getting-started/infrastructure-package/"
          },
          {label: "Workflow examples", link: "/workflows/getting-started/workflow-examples/"}
        ]
      },
      {
        label: "Tutorials",
        collapsed: true,
        items: [
          {
            label: "Customize tokens using workflows",
            link: "/workflows/workflow-tutorials/customize-token-with-workflow/"
          },
          {
            label: "Password validation check",
            link: "/workflows/workflow-tutorials/custom-password-validation-check/"
          },
          {
            label: "M2M apps and token management",
            link: "/workflows/workflow-tutorials/m2m-apps-and-token-management/"
          },
          {
            label: "Check plan change eligibility",
            link: "/workflows/workflow-tutorials/check-plan-change-eligibility/"
          },
          {
            label: "Check plan cancellation eligibility",
            link: "/workflows/workflow-tutorials/check-plan-cancellation-eligibility/"
          }
        ]
      },
      {
        label: "Configuration",
        autogenerate: {directory: "workflows/configuration"},
        collapsed: true
      },
      {label: "Bindings", autogenerate: {directory: "workflows/bindings"}, collapsed: true},
      {
        label: "Triggers",
        autogenerate: {directory: "workflows/example-workflows"},
        collapsed: true
      },
      {
        label: "Manage workflows",
        autogenerate: {directory: "workflows/manage-workflows"},
        collapsed: true
      },
      {label: "Testing", autogenerate: {directory: "workflows/testing"}, collapsed: true},
      {
        label: "Observability",
        autogenerate: {directory: "workflows/observability"},
        collapsed: true
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 10. SECURITY
  // ─────────────────────────────────────────────
  {
    label: "Security",
    description: "Attack protection, access policies, and security information",
    icon: "build",
    collapsed: true,
    cardLink: "/build/set-up-options/attack-protection/",
    items: [
      {label: "Security at Kinde", link: "/trust-center/security/security-at-kinde/"},
      {
        label: "Kinde product security information",
        link: "/get-started/learn-about-kinde/kinde-product-security/"
      },
      {
        label: "Configure attack protection",
        link: "/build/set-up-options/attack-protection/"
      },
      {
        label: "Set global access policies",
        link: "/build/set-up-options/access-policies/"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 11. DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    label: "Development",
    description: "Configure environments, applications, APIs, and developer tools",
    icon: "build",
    collapsed: true,
    cardLink: "/build/environments/environments/",
    items: [
      {
        label: "Environments",
        collapsed: false,
        items: [
          {label: "About environments", link: "/build/environments/environments/"},
          {
            label: "Prepare your production environment to go live",
            link: "/build/environments/production-to-live/"
          }
        ]
      },
      {
        label: "Applications",
        collapsed: false,
        items: [
          {
            label: "Standard apps",
            collapsed: true,
            items: [
              {label: "Applications in Kinde", link: "/build/applications/about-applications/"},
              {
                label: "Add and manage applications",
                link: "/build/applications/add-and-manage-applications/"
              },
              {label: "Rotate client secret", link: "/build/applications/rotate-client-secret/"},
              {
                label: "Authenticating single-page apps (SPAs) with Kinde",
                link: "/build/applications/authenticating-spa/"
              },
              {
                label: "Set a default login route for an application",
                link: "/build/applications/default-login-routes/"
              },
              {
                label: "View and edit application properties",
                link: "/properties/about-properties/application-properties/"
              }
            ]
          },
          {
            label: "Machine to machine (M2M)",
            collapsed: true,
            items: [
              {label: "M2M overview", link: "/machine-to-machine-applications/about-m2m/"},
              {
                label: "M2M quick start",
                link: "/machine-to-machine-applications/about-m2m/m2m-quick-start-guide/"
              },
              {
                label: "Authenticate with M2M applications",
                link: "/machine-to-machine-applications/about-m2m/authenticate-with-m2m/"
              },
              {
                label: "Token structure and claims",
                link: "/machine-to-machine-applications/about-m2m/token-structure-and-claims-for-m2m-applications/"
              },
              {
                label: "Top questions about M2M applications",
                link: "/machine-to-machine-applications/about-m2m/m2m-faqs/"
              },
              {
                label: "Create an M2M application",
                link: "/machine-to-machine-applications/m2m-application-setup/create-an-m2m-application/"
              },
              {
                label: "M2M application API scopes",
                link: "/machine-to-machine-applications/m2m-application-setup/scopes-for-m2m-applications/"
              },
              {
                label: "Add metadata to an M2M app using properties",
                link: "/machine-to-machine-applications/m2m-application-setup/add-metadata-to-an-m2m-application-with-properties/"
              },
              {
                label: "Assign feature flags for use in M2M tokens",
                link: "/machine-to-machine-applications/m2m-application-setup/add-feature-flags-to-m2m-applications/"
              },
              {
                label: "M2M apps scoped to organizations",
                link: "/machine-to-machine-applications/organization-scoped-m2m-apps/m2m-applications-for-organizations/"
              },
              {
                label: "Enforce org access in your API using M2M tokens",
                link: "/machine-to-machine-applications/organization-scoped-m2m-apps/enforce-org-m2m-access-in-your-api/"
              },
              {
                label: "Using M2M apps for AI applications",
                link: "/machine-to-machine-applications/organization-scoped-m2m-apps/using-m2m-apps-for-AI-applications/"
              },
              {
                label: "Customize the claims of an M2M token",
                link: "/machine-to-machine-applications/m2m-token-customization/customize-m2m-tokens/"
              },
              {
                label: "Trigger workflows when an M2M token is generated",
                link: "/machine-to-machine-applications/m2m-workflow-automation/m2m-workflow/"
              },
              {
                label: "Troubleshoot M2M token errors",
                link: "/machine-to-machine-applications/troubleshooting-m2m/troubleshoot-m2m-token-errors/"
              }
            ]
          },
          {
            label: "Device and IoT",
            collapsed: true,
            items: [
              {
                label: "About the device authorization flow",
                link: "/authenticate/device-authorization-flow/overview/"
              },
              {label: "Quick start", link: "/authenticate/device-authorization-flow/quick-start/"},
              {
                label: "Call your API using device authorization flow",
                link: "/authenticate/device-authorization-flow/api-calls/"
              },
              {
                label: "Troubleshooting device authorization",
                link: "/authenticate/device-authorization-flow/troubleshooting/"
              }
            ]
          }
        ]
      },
      {
        label: "Deployment",
        collapsed: true,
        items: [
          {label: "Vercel (Next.js)", link: "/developer-tools/guides/deploy-on-vercel/"},
          {label: "Netlify (Next.js)", link: "/developer-tools/guides/deploy-on-netlify/"},
          {
            label: "Cloudflare Workers",
            link: "/developer-tools/guides/deploy-on-cloudflare-workers/"
          }
        ]
      },
      {
        label: "Domains",
        collapsed: true,
        items: [
          {label: "Use your own custom domain", link: "/build/domains/pointing-your-domain/"},
          {
            label: "Org handles and dynamic callbacks for subdomains",
            link: "/build/domains/subdomains-for-callbacks/"
          },
          {
            label: "Add a custom domain for an organization",
            link: "/build/domains/organization-custom-domain/"
          }
        ]
      },
      {
        label: "Env variables",
        collapsed: true,
        items: [
          {
            label: "Store environment variables in Kinde",
            link: "/build/env-variables/store-environment-variables/"
          },
          {
            label: "Add and update environment variables",
            link: "/build/env-variables/add-manage-env-variables/"
          }
        ]
      },
      {
        label: "Git repo",
        collapsed: true,
        items: [{label: "Manage your code in Kinde", link: "/build/set-up-options/sync-git-code/"}]
      },
      {
        label: "Feature flags",
        collapsed: true,
        items: [
          {label: "About feature flags", link: "/releases/about/about-feature-flags/"},
          {label: "Add a feature flag in Kinde", link: "/releases/feature-flags/add-feature-flag/"},
          {label: "Manage feature flags", link: "/releases/feature-flags/manage-feature-flags/"},
          {
            label: "Override feature flag values",
            link: "/releases/feature-flags/edit-feature-flag/"
          },
          {
            label: "Manage feature flags through the Kinde API",
            link: "/releases/feature-flags/manage-feature-flags-api/"
          },
          {
            label: "Guide to app store reviews",
            link: "/releases/guides/guide-to-app-store-approvals/"
          }
        ]
      },
      {
        label: "Register and protect your APIs",
        collapsed: true,
        items: [
          {
            label: "Register and manage APIs",
            link: "/developer-tools/your-apis/register-manage-apis/"
          },
          {
            label: "Get a M2M token to test your APIs",
            link: "/developer-tools/your-apis/test-your-api-m2m-token/"
          },
          {
            label: "Get a user access token to test your APIs (Postman method)",
            link: "/developer-tools/your-apis/test-your-api-user-token/"
          },
          {label: "Protect your API", link: "/developer-tools/your-apis/protect-your-api/"},
          {
            label: "Secure your API using scopes",
            link: "/developer-tools/your-apis/custom-api-scopes/"
          },
          {
            label: "Give others access to your API",
            link: "/developer-tools/your-apis/access-to-your-api/"
          },
          {
            label: "Manage API scopes for M2M applications",
            link: "/developer-tools/your-apis/api-scopes-m2m-applications/"
          },
          {
            label: "Manage API scopes for users",
            link: "/developer-tools/your-apis/user-api-scopes/"
          },
          {
            label: "Get a M2M access token to test your APIs (Postman method)",
            link: "/developer-tools/your-apis/test-token-from-kinde/"
          },
          {
            label: "Integrate Kinde auth into .NET-based APIs",
            link: "/developer-tools/your-apis/dotnet-based-apis/"
          }
        ]
      },
      {
        label: "API keys",
        collapsed: true,
        items: [
          {
            label: "About",
            collapsed: true,
            items: [
              {
                label: "API keys overview",
                link: "/manage-your-apis/about-api-keys/api-keys-overview/"
              },
              {
                label: "API keys quick start",
                link: "/manage-your-apis/about-api-keys/api-keys-quick-start/"
              },
              {
                label: "API key best practices",
                link: "/manage-your-apis/about-api-keys/api-key-best-practice/"
              },
              {
                label: "Using API keys for AI products",
                link: "/manage-your-apis/about-api-keys/api-keys-and-ai-apps/"
              },
              {
                label: "API best practice for AI apps",
                link: "/manage-your-apis/about-api-keys/ai-app-best-practice/"
              },
              {
                label: "Organization-level API keys",
                link: "/manage-your-apis/about-api-keys/organization-api-keys/"
              },
              {
                label: "User-level API keys",
                link: "/manage-your-apis/about-api-keys/user-api-keys/"
              }
            ]
          },
          {
            label: "Add and manage",
            collapsed: true,
            items: [
              {
                label: "Create an API key",
                link: "/manage-your-apis/add-manage-api-keys/create-an-api-key/"
              },
              {
                label: "Scopes for API keys",
                link: "/manage-your-apis/add-manage-api-keys/scopes-for-api-keys/"
              },
              {
                label: "Self-serve API keys",
                link: "/manage-your-apis/add-manage-api-keys/self-serve-api-keys/"
              },
              {
                label: "Verify API keys in your API",
                link: "/manage-your-apis/add-manage-api-keys/verify-api-keys-in-your-api/"
              },
              {
                label: "Rotate API keys",
                link: "/manage-your-apis/add-manage-api-keys/rotate-api-keys/"
              },
              {
                label: "Revoke API keys",
                link: "/manage-your-apis/add-manage-api-keys/revoke-api-keys/"
              }
            ]
          },
          {
            label: "Troubleshoot",
            collapsed: true,
            items: [
              {
                label: "Troubleshoot API key errors",
                link: "/manage-your-apis/troubleshoot-api-keys/common-api-key-errors/"
              }
            ]
          }
        ]
      },
      {
        label: "Kinde Management API",
        collapsed: true,
        items: [
          {label: "About Kinde APIs", link: "/get-started/apis-and-sdks/about-kinde-apis/"},
          {
            label: "Set up Kinde Management API access",
            link: "/developer-tools/kinde-api/connect-to-kinde-api/"
          },
          {
            label: "Call the Kinde Management API",
            link: "/developer-tools/kinde-api/access-token-for-api/"
          },
          {
            label: "Get token to test the Kinde Management API",
            link: "/developer-tools/kinde-api/kinde-api-test-token/"
          },
          {
            label: "About scopes and Kinde API access",
            link: "/developer-tools/kinde-api/about-m2m-scopes/"
          },
          {
            label: "Troubleshooting Kinde API access",
            link: "/developer-tools/kinde-api/troubleshoot-kinde-api/"
          },
          {
            label: "Call the Kinde API - NodeJS example",
            link: "/developer-tools/kinde-api/api-example-node/"
          },
          {label: "API rate limits", link: "/developer-tools/kinde-api/api-rate-limits/"},
          {
            label: "Search users via the Kinde API",
            link: "/developer-tools/kinde-api/search-users-via-api/"
          }
        ]
      },
      {
        label: "Account API",
        collapsed: true,
        items: [
          {
            label: "About Kinde's Account API",
            link: "/developer-tools/account-api/about-account-api/"
          }
        ]
      },
      {
        label: "MCP Server",
        collapsed: true,
        items: [
          {label: "About the Kinde MCP Server", link: "/mcp-server/about-mcp-server/"},
          {
            label: "Available Operations and Scopes",
            link: "/mcp-server/about-mcp-server/operations-and-scopes/"
          },
          {
            label: "Set up the Kinde MCP server with AI assistants",
            link: "/mcp-server/get-started/setup-mcp-server/"
          }
        ]
      },
      {
        label: "Testing",
        collapsed: true,
        items: [
          {label: "End-to-end testing overview", link: "/testing/"},
          {
            label: "Setup test user and environment",
            link: "/testing/setup-test-user-environment/"
          },
          {
            label: "Testing authentication flows",
            link: "/testing/testing-authentication-flows/"
          },
          {label: "Testing passwordless flows", link: "/testing/testing-passwordless-flows/"},
          {
            label: "Testing authenticated features",
            link: "/testing/testing-authenticated-features/"
          },
          {label: "Testing backend APIs", link: "/testing/testing-backend-apis/"},
          {
            label: "Cypress",
            collapsed: true,
            items: [
              {label: "Setup Cypress", link: "/testing/cypress/"},
              {label: "Test authentication flows", link: "/testing/cypress/test-auth-flows/"},
              {label: "Test passwordless flows", link: "/testing/cypress/test-passwordless-flows/"},
              {label: "Test authenticated features", link: "/testing/cypress/test-auth-features/"},
              {label: "Test backend APIs", link: "/testing/cypress/test-backend-apis/"}
            ]
          },
          {
            label: "Playwright",
            collapsed: true,
            items: [
              {label: "Setup Playwright", link: "/testing/playwright/"},
              {label: "Test authentication flows", link: "/testing/playwright/test-auth-flows/"},
              {
                label: "Test passwordless flows",
                link: "/testing/playwright/test-passwordless-flows/"
              },
              {
                label: "Test authenticated features",
                link: "/testing/playwright/test-auth-features/"
              },
              {label: "Test backend APIs", link: "/testing/playwright/test-backend-apis/"}
            ]
          },
          {label: "Test backend APIs with Jest", link: "/testing/test-backend-apis-jest/"}
        ]
      },
      {
        label: "Troubleshooting",
        collapsed: true,
        items: [
          {
            label: "Common errors and codes",
            link: "/get-started/guides/error-codes/"
          },
          {
            label: "Git Repo code sync errors",
            link: "/developer-tools/guides/code-sync-errors/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 12. INTEGRATIONS
  // ─────────────────────────────────────────────
  {
    label: "Integrations",
    description: "Connect external systems, webhooks, and third-party tools to Kinde",
    icon: "webhooks",
    collapsed: true,
    cardLink: "/integrate/connected-apps/add-connected-apps/",
    items: [
      {
        label: "Connected apps",
        collapsed: false,
        items: [
          {label: "Add connected apps", link: "/integrate/connected-apps/add-connected-apps/"},
          {label: "Discord", link: "/integrate/connected-apps/discord-connected-app/"},
          {label: "GitHub", link: "/integrate/connected-apps/github-connected-app/"},
          {label: "GitLab", link: "/integrate/connected-apps/gitlab-connected-app/"},
          {label: "Google Drive", link: "/integrate/connected-apps/google-drive-connected-app/"},
          {label: "Microsoft 365", link: "/integrate/connected-apps/microsoft-365-connected-app/"},
          {label: "Patreon", link: "/integrate/connected-apps/patreon-connected-app/"}
        ]
      },
      {
        label: "Webhooks",
        collapsed: true,
        items: [
          {label: "About webhooks", link: "/integrate/webhooks/about-webhooks/"},
          {label: "Add and manage webhooks", link: "/integrate/webhooks/add-manage-webhooks/"},
          {label: "Set up webhooks using Next.js", link: "/integrate/webhooks/webhooks-nextjs/"},
          {label: "Connect Zapier to Kinde", link: "/integrate/webhooks/zapier-event-hooks/"}
        ]
      },
      {
        label: "Third-party tools",
        collapsed: true,
        items: [
          {
            label: "Database",
            collapsed: false,
            items: [
              {label: "Firebase", link: "/integrate/third-party-tools/kinde-firebase/"},
              {label: "Supabase", link: "/integrate/third-party-tools/kinde-supabase/"},
              {label: "Hasura", link: "/integrate/third-party-tools/kinde-hasura/"},
              {label: "Convex", link: "/integrate/third-party-tools/kinde-and-convex/"},
              {
                label: "Prisma ORM (Next.js)",
                link: "/integrate/third-party-tools/kinde-nextjs-prisma/"
              },
              {
                label: "Drizzle ORM (Next.js)",
                link: "/integrate/third-party-tools/kinde-nextjs-drizzle/"
              }
            ]
          },
          {
            label: "Email",
            collapsed: true,
            items: [
              {
                label: "Mailgun",
                link: "/integrate/third-party-tools/kinde-mailgun-email-delivery/"
              },
              {label: "Resend", link: "/integrate/third-party-tools/kinde-resend-custom-smtp/"},
              {label: "Loops (via Zapier)", link: "/integrate/third-party-tools/kinde-loops/"}
            ]
          },
          {
            label: "Infrastructure",
            collapsed: true,
            items: [
              {
                label: "Cloudflare Zero Trust",
                link: "/integrate/third-party-tools/cloudflare-zero-trust/"
              },
              {label: "Edge workers", link: "/integrate/third-party-tools/kinde-edge-workers/"},
              {
                label: "Cloudflare Workers JWT verification",
                link: "/integrate/third-party-tools/verifying-jwts-cloudflare-workers/"
              }
            ]
          },
          {
            label: "Platforms",
            collapsed: true,
            items: [
              {label: "WordPress", link: "/integrate/third-party-tools/kinde-wordpress/"},
              {label: "Bravo Studio", link: "/integrate/third-party-tools/kinde-bravo-studio/"},
              {label: "Shopify Multipass", link: "/integrate/third-party-tools/shopify-multipass/"}
            ]
          },
          {
            label: "Analytics",
            collapsed: true,
            items: [
              {
                label: "Google Analytics",
                link: "/manage-users/view-activity/track-user-sign-in-with-google-analytics/"
              },
              {label: "Hotjar", link: "/manage-users/view-activity/hotjar/"}
            ]
          },
          {
            label: "Tutorials",
            collapsed: true,
            items: [
              {
                label: "Marketing campaign tracking",
                link: "/integrate/third-party-tools/marketing-campaign-tracking/"
              },
              {
                label: "TrustPath fraud detection",
                link: "/integrate/third-party-tools/trustpath-fraud-protection/"
              },
              {
                label: "Supabase to-do app",
                link: "/integrate/third-party-tools/kinde-supabase-todo-app/"
              },
              {
                label: "Convex message board",
                link: "/integrate/third-party-tools/kinde-convex-app/"
              }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 13. KINDE DASHBOARD
  // ─────────────────────────────────────────────
  {
    label: "Kinde dashboard",
    description: "Manage your account, plan, team, and business settings",
    icon: "settings",
    collapsed: true,
    cardLink: "/manage-your-account/profile-and-plan/view-kinde-plan/",
    items: [
      {
        label: "Account",
        collapsed: false,
        items: [
          {
            label: "View your Kinde plan",
            link: "/manage-your-account/profile-and-plan/view-kinde-plan/"
          },
          {
            label: "Changing your Kinde plan",
            link: "/manage-your-account/profile-and-plan/change-kinde-plan/"
          },
          {
            label: "Add or update payment details",
            link: "/manage-your-account/profile-and-plan/update-kinde-payment/"
          },
          {
            label: "Update billing details for your Kinde account",
            link: "/manage-your-account/profile-and-plan/update-billing-details/"
          },
          {
            label: "Claim credits with Kinde perk code",
            link: "/get-started/team-and-account/kinde-perk-code/"
          },
          {
            label: "Get a referral code for sharing Kinde",
            link: "/get-started/team-and-account/kinde-referral-program/"
          }
        ]
      },
      {
        label: "Your data",
        collapsed: true,
        items: [
          {label: "Check your MAU and MAO", link: "/manage-your-account/your-data/check-your-mau/"},
          {label: "Export your data", link: "/manage-your-account/your-data/exporting-data/"},
          {label: "About your Kinde domain", link: "/manage-your-account/your-data/kinde-domains/"},
          {
            label: "Closing your account",
            link: "/manage-your-account/your-data/closing-your-account/"
          },
          {
            label: "Delete your Kinde business",
            link: "/manage-your-account/your-data/delete-business/"
          }
        ]
      },
      {
        label: "Business information",
        collapsed: true,
        items: [
          {
            label: "Update your business details",
            link: "/manage-your-account/business-information/update-your-details/"
          },
          {
            label: "Your business data region and timezone",
            link: "/manage-your-account/business-information/change-your-business-time-zone/"
          },
          {
            label: "Add and update policies and terms",
            link: "/manage-your-account/business-information/policies-terms/"
          },
          {
            label: "Change the Owner of your Kinde business",
            link: "/manage-your-account/business-information/change-business-owner/"
          }
        ]
      },
      {
        label: "Team",
        collapsed: true,
        items: [
          {label: "Add team members", link: "/get-started/team-and-account/add-team-members/"},
          {
            label: "Team member roles in Kinde",
            link: "/get-started/team-and-account/team-member-roles/"
          },
          {
            label: "Access Kinde via an enterprise connection",
            link: "/get-started/team-and-account/enterprise-access-to-kinde/"
          },
          {
            label: "Add MFA for accessing Kinde",
            link: "/get-started/team-and-account/mfa-for-kinde-access/"
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 14. RESOURCES
  // ─────────────────────────────────────────────
  {
    label: "Resources",
    description: "Trust, compliance, and contribution guides",
    icon: "settings",
    collapsed: true,
    cardLink: "/contribute/",
    items: [
      {
        label: "Trust and compliance",
        collapsed: false,
        items: [
          {
            label: "Privacy and compliance",
            collapsed: false,
            items: [
              {label: "Compliance", link: "/trust-center/privacy-and-compliance/compliance/"},
              {
                label: "Our privacy policy",
                link: "/trust-center/privacy-and-compliance/privacy-policy/"
              },
              {
                label: "General data protection regulation (GDPR)",
                link: "/trust-center/privacy-and-compliance/gdpr/"
              },
              {
                label: "Sub-processors",
                link: "/trust-center/privacy-and-compliance/sub-processors/"
              },
              {
                label: "Sub-processors - Interactive",
                link: "/trust-center/privacy-and-compliance/sub-processors-interactive/"
              }
            ]
          },
          {
            label: "Agreements",
            collapsed: true,
            items: [
              {label: "Terms of Service", link: "/trust-center/agreements/terms-of-service/"},
              {
                label: "End User Licence Agreement",
                link: "/trust-center/agreements/end-user-licence-agreement/"
              }
            ]
          },
          {
            label: "Performance",
            collapsed: true,
            items: [
              {
                label: "Kinde services status",
                link: "/trust-center/kinde-performance/service-status/"
              }
            ]
          }
        ]
      },
      {
        label: "Vulnerability disclosure policy",
        link: "/trust-center/security/vulnerability-disclosure-policy/"
      },
      {
        label: "Security wall of fame",
        link: "/trust-center/security/security-wall-of-fame/"
      },
      {label: "Docs contribution guide", link: "/contribute/"}
    ]
  }
];

export default sidebarData;
