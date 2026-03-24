// This file has all the data for `Starlight's` sidebar, but it contains some extra data
// we use to enrich and re-use somewhere else, like `icon` and `description`, used in the `Topics` component

const sidebarData = [
  {
    label: "Get started",
    description: "Learn about Kinde, connect your app, and deploy",
    icon: "sparkle",
    collapsed: true,
    cardLink: "/get-started/guides/first-things-first/",
    items: [
      {
        label: "Learn about Kinde",
        autogenerate: {directory: "get-started/learn-about-kinde"},
        collapsed: false
      },
      {
        label: "Guides",
        collapsed: false,
        items: [
          {label: "Where to start with Kinde", link: "/get-started/guides/first-things-first/"},
          {
            label: "Start with a Kinde starter kit",
            link: "/get-started/guides/start-with-starter-kit/"
          },
          {label: "Connect existing code base to Kinde", link: "/get-started/guides/byo-code/"},
          {label: "Common set up tasks", link: "/get-started/guides/set-up-tasks/"}
        ]
      },
      {label: "Connect", autogenerate: {directory: "get-started/connect"}, collapsed: false},
      {
        label: "Switch to Kinde",
        autogenerate: {directory: "get-started/switch-to-kinde"},
        collapsed: false
      },
      {
        label: "Deployment",
        collapsed: false,
        items: [
          {label: "Deploy a Kinde app on Vercel", link: "/developer-tools/guides/deploy-on-vercel/"},
          {
            label: "Deploy a Kinde app on Netlify",
            link: "/developer-tools/guides/deploy-on-netlify/"
          },
          {
            label: "Deploy a Kinde app on Cloudflare Workers",
            link: "/developer-tools/guides/deploy-on-cloudflare-workers/"
          },
          {
            label: "Prepare your production environment to go live",
            link: "/build/environments/production-to-live/"
          }
        ]
      },
      {
        label: "Team and account",
        autogenerate: {directory: "get-started/team-and-account"},
        collapsed: false
      }
    ]
  },
  {
    label: "SDKs and frameworks",
    description: "Jump right in with our API-first developer tools",
    icon: "dev-tools",
    collapsed: true,
    cardLink: "/developer-tools/about/our-sdks/",
    items: [
      {label: "Overview", autogenerate: {directory: "developer-tools/about"}, collapsed: false},
      {
        label: "Front end SDKs",
        autogenerate: {directory: "developer-tools/sdks/frontend"},
        collapsed: false
      },
      {
        label: "Back end SDKs",
        autogenerate: {directory: "developer-tools/sdks/backend"},
        collapsed: false
      },
      {
        label: "Native app SDKs",
        autogenerate: {directory: "developer-tools/sdks/native"},
        collapsed: false
      },
      {
        label: "Guides",
        collapsed: false,
        items: [
          {
            label: "Integrate Kinde with ASP.NET using Open ID Connect",
            link: "/developer-tools/guides/dotnet-open-id-connect/"
          },
          {
            label: "Use Kinde auth in an Electron app",
            link: "/developer-tools/guides/kinde-and-electron/"
          },
          {
            label: "Protect FastAPI routes with Kinde",
            link: "/developer-tools/guides/protect-fastapi-routes-with-kinde/"
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
            label: "Troubleshoot code sync errors",
            link: "/developer-tools/guides/code-sync-errors/"
          }
        ]
      },
      {
        label: "Kinde Management API",
        autogenerate: {directory: "developer-tools/kinde-api"},
        collapsed: false
      },
      {
        label: "Account API",
        autogenerate: {directory: "developer-tools/account-api"},
        collapsed: false
      }
    ]
  },
  {
    label: "Authentication",
    description: "Configure user sign up, sign in, and security verification",
    icon: "authentication",
    collapsed: true,
    cardLink: "/authenticate/about-auth/about-authentication/",
    items: [
      {
        label: "About authentication",
        autogenerate: {directory: "authenticate/about-auth"},
        collapsed: false
      },
      {
        label: "Authentication methods",
        autogenerate: {directory: "authenticate/authentication-methods"},
        collapsed: false
      },
      {
        label: "Social connections",
        autogenerate: {directory: "authenticate/social-sign-in"},
        collapsed: false
      },
      {
        label: "Enterprise connections",
        autogenerate: {directory: "authenticate/enterprise-connections"},
        collapsed: false
      },
      {
        label: "Self-serve SSO",
        autogenerate: {directory: "authenticate/self-serve-sso"},
        collapsed: false
      },
      {
        label: "Multi-factor auth",
        autogenerate: {directory: "authenticate/multi-factor-auth"},
        collapsed: false
      },
      {
        label: "Sessions",
        collapsed: false,
        items: [
          {
            label: "Authenticated sessions across multiple applications",
            link: "/authenticate/manage-authentication/user-auth-applications/"
          },
          {
            label: "Session management",
            link: "/authenticate/manage-authentication/session-management/"
          },
          {
            label: "Session management per organization",
            link: "/authenticate/manage-authentication/session-management-per-organization/"
          }
        ]
      },
      {
        label: "Manage authentication",
        collapsed: false,
        items: [
          {
            label: "Change authentication for an application",
            link: "/authenticate/manage-authentication/manage-authentication-applications/"
          },
          {
            label: "Set custom authentication per organization",
            link: "/authenticate/manage-authentication/organization-auth-experience/"
          },
          {
            label: "Build a switch to navigate between organizations",
            link: "/authenticate/manage-authentication/navigate-between-organizations/"
          },
          {
            label: "Sign users in to last organization",
            link: "/authenticate/manage-authentication/sign-in-to-last-org/"
          },
          {
            label: "Keep your product in sync with Kinde",
            link: "/authenticate/manage-authentication/sync-with-kinde/"
          }
        ]
      },
      {
        label: "Custom configurations",
        autogenerate: {directory: "authenticate/custom-configurations"},
        collapsed: false
      },
      {
        label: "Authentication guides",
        autogenerate: {directory: "authenticate/auth-guides"},
        collapsed: false
      },
      {
        label: "Security",
        collapsed: false,
        items: [
          {
            label: "Configure attack protection",
            link: "/build/set-up-options/attack-protection/"
          },
          {label: "Set global access policies", link: "/build/set-up-options/access-policies/"}
        ]
      },
      {
        label: "Machine to machine",
        collapsed: true,
        items: [
          {
            label: "Overview",
            autogenerate: {directory: "machine-to-machine-applications/about-m2m"},
            collapsed: false
          },
          {
            label: "Application setup",
            autogenerate: {directory: "machine-to-machine-applications/m2m-application-setup"},
            collapsed: false
          },
          {
            label: "Organization-scoped M2M apps",
            autogenerate: {
              directory: "machine-to-machine-applications/organization-scoped-m2m-apps"
            },
            collapsed: false
          },
          {
            label: "Token customization",
            autogenerate: {directory: "machine-to-machine-applications/m2m-token-customization"},
            collapsed: false
          },
          {
            label: "Automation",
            autogenerate: {directory: "machine-to-machine-applications/m2m-workflow-automation"},
            collapsed: false
          },
          {
            label: "Troubleshooting",
            autogenerate: {directory: "machine-to-machine-applications/troubleshooting-m2m"},
            collapsed: false
          }
        ]
      },
      {
        label: "Device authorization flow",
        autogenerate: {directory: "authenticate/device-authorization-flow"},
        collapsed: false
      }
    ]
  },
  {
    label: "Users and organizations",
    description: "Manage users, organizations, roles, permissions, and custom data",
    icon: "profile",
    collapsed: true,
    cardLink: "/manage-users/about/",
    items: [
      {label: "Overview", autogenerate: {directory: "manage-users/about"}, collapsed: false},
      {
        label: "Add and edit users",
        autogenerate: {directory: "manage-users/add-and-edit"},
        collapsed: false
      },
      {
        label: "Roles and permissions",
        autogenerate: {directory: "manage-users/roles-and-permissions"},
        collapsed: false
      },
      {
        label: "User account actions",
        autogenerate: {directory: "manage-users/access-control"},
        collapsed: false
      },
      {
        label: "Organizations",
        autogenerate: {directory: "build/organizations"},
        collapsed: false
      },
      {
        label: "Properties",
        collapsed: false,
        items: [
          {
            label: "Custom claims and data with properties",
            link: "/properties/about-properties/"
          },
          {
            label: "Add custom data for orgs",
            link: "/properties/about-properties/organization-properties/"
          },
          {
            label: "View and edit application properties",
            link: "/properties/about-properties/application-properties/"
          },
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
        label: "User activity",
        autogenerate: {directory: "manage-users/view-activity"},
        collapsed: false
      }
    ]
  },
  {
    label: "Design",
    description: "Integrate your brand, and update content for pages and screens",
    icon: "brand",
    collapsed: true,
    cardLink: "/design/brand/global-brand-defaults/",
    items: [
      {label: "Brand", autogenerate: {directory: "design/brand"}, collapsed: false},
      {label: "Page layout", autogenerate: {directory: "design/pages"}, collapsed: false},
      {
        label: "Content customization",
        autogenerate: {directory: "design/content-customization"},
        collapsed: false
      },
      {
        label: "Customize with code",
        autogenerate: {directory: "design/customize-with-code"},
        collapsed: false
      }
    ]
  },
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
        collapsed: false,
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
        collapsed: false
      },
      {
        label: "Subscription management",
        autogenerate: {directory: "billing/manage-subscribers"},
        collapsed: false
      },
      {
        label: "Billing UX",
        autogenerate: {directory: "billing/billing-user-experience"},
        collapsed: false
      }
    ]
  },
  {
    label: "Workflows",
    description: "Execute custom code in response to Kinde triggers",
    collapsed: true,
    icon: "workflow",
    cardLink: "/workflows/about-workflows/",
    items: [
      {
        label: "About workflows",
        autogenerate: {directory: "workflows/about-workflows"},
        collapsed: false
      },
      {
        label: "Getting started",
        autogenerate: {directory: "workflows/getting-started"},
        collapsed: false
      },
      {
        label: "Tutorials",
        autogenerate: {directory: "workflows/workflow-tutorials"},
        collapsed: false
      },
      {
        label: "Configuration",
        autogenerate: {directory: "workflows/configuration"},
        collapsed: false
      },
      {label: "Bindings", autogenerate: {directory: "workflows/bindings"}, collapsed: false},
      {
        label: "Triggers",
        autogenerate: {directory: "workflows/example-workflows"},
        collapsed: false
      },
      {
        label: "Manage workflows",
        autogenerate: {directory: "workflows/manage-workflows"},
        collapsed: false
      },
      {label: "Testing", autogenerate: {directory: "workflows/testing"}, collapsed: false},
      {
        label: "Observability",
        autogenerate: {directory: "workflows/observability"},
        collapsed: false
      }
    ]
  },
  {
    label: "Integrations",
    description: "Connect external systems, webhooks, and third-party tools to Kinde",
    icon: "webhooks",
    collapsed: true,
    cardLink: "/integrate/connected-apps/add-connected-apps/",
    items: [
      {
        label: "Connected apps",
        autogenerate: {directory: "integrate/connected-apps"},
        collapsed: false
      },
      {label: "Webhooks", autogenerate: {directory: "integrate/webhooks"}, collapsed: false},
      {
        label: "Third-party tools",
        autogenerate: {directory: "integrate/third-party-tools"},
        collapsed: false
      },
      {
        label: "MCP Server",
        collapsed: false,
        items: [
          {
            label: "About the Kinde MCP Server",
            link: "/mcp-server/about-mcp-server/"
          },
          {
            label: "Available Operations and Scopes",
            link: "/mcp-server/about-mcp-server/operations-and-scopes/"
          },
          {
            label: "Set up the Kinde MCP server with AI assistants",
            link: "/mcp-server/get-started/setup-mcp-server/"
          }
        ]
      }
    ]
  },
  {
    label: "Platform and APIs",
    description: "Configure environments, tokens, APIs, and platform settings",
    icon: "build",
    collapsed: true,
    cardLink: "/build/set-up-options/kinde-business-model/",
    items: [
      {
        label: "Set up options",
        collapsed: false,
        items: [
          {
            label: "Kinde for different business models",
            link: "/build/set-up-options/kinde-business-model/"
          },
          {label: "Run multiple businesses", link: "/build/set-up-options/run-multiple-businesses/"},
          {
            label: "Set up and manage user access requests",
            link: "/build/set-up-options/manage-access-requests/"
          },
          {label: "Manage your code in Kinde", link: "/build/set-up-options/sync-git-code/"}
        ]
      },
      {
        label: "Environments",
        collapsed: false,
        items: [
          {label: "About environments", link: "/build/environments/environments/"}
        ]
      },
      {label: "Applications", autogenerate: {directory: "build/applications"}, collapsed: false},
      {
        label: "Domain management",
        autogenerate: {directory: "build/domains"},
        collapsed: false
      },
      {
        label: "Environment variables",
        autogenerate: {directory: "build/env-variables"},
        collapsed: false
      },
      {
        label: "Self-service portal",
        autogenerate: {directory: "build/self-service-portal"},
        collapsed: false
      },
      {
        label: "Feature flags",
        collapsed: false,
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
      {label: "Tokens", autogenerate: {directory: "build/tokens"}, collapsed: false},
      {
        label: "Register and protect your APIs",
        autogenerate: {directory: "developer-tools/your-apis"},
        collapsed: false
      },
      {
        label: "About API keys",
        autogenerate: {directory: "manage-your-apis/about-api-keys"},
        collapsed: false
      },
      {
        label: "Add and manage API keys",
        autogenerate: {directory: "manage-your-apis/add-manage-api-keys"},
        collapsed: false
      },
      {
        label: "Troubleshoot API keys",
        autogenerate: {directory: "manage-your-apis/troubleshoot-api-keys"},
        collapsed: false
      }
    ]
  },
  {
    label: "Resources",
    description: "Testing, troubleshooting, account management, and compliance",
    icon: "settings",
    collapsed: true,
    cardLink: "/testing/",
    items: [
      {
        label: "Troubleshooting",
        collapsed: false,
        items: [
          {label: "Common errors and codes", link: "/get-started/guides/error-codes/"},
          {
            label: "Top questions about Kinde authentication",
            link: "/authenticate/about-auth/kinde-authentication-faq/"
          },
          {
            label: "Top questions about authentication",
            link: "/authenticate/about-auth/authentication-faq/"
          },
          {
            label: "Top questions about M2M applications",
            link: "/machine-to-machine-applications/about-m2m/m2m-faqs/"
          },
          {label: "Billing FAQ", link: "/billing/about-billing/billing-faq/"},
          {
            label: "Top questions about Kinde billing",
            link: "/billing/about-billing/kinde-billing-faqs/"
          }
        ]
      },
      {
        label: "Testing",
        collapsed: false,
        items: [
          {label: "Overview", link: "/testing/"},
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
          {label: "Test backend APIs with Jest", link: "/testing/test-backend-apis-jest/"},
          {
            label: "Cypress",
            autogenerate: {directory: "testing/cypress"},
            collapsed: true
          },
          {
            label: "Playwright",
            autogenerate: {directory: "testing/playwright"},
            collapsed: true
          }
        ]
      },
      {
        label: "Account management",
        collapsed: true,
        items: [
          {
            label: "Profile and plan",
            autogenerate: {directory: "manage-your-account/profile-and-plan"},
            collapsed: false
          },
          {
            label: "Your data",
            autogenerate: {directory: "manage-your-account/your-data"},
            collapsed: false
          },
          {
            label: "Business information",
            autogenerate: {directory: "manage-your-account/business-information"},
            collapsed: false
          }
        ]
      },
      {
        label: "Trust and compliance",
        collapsed: true,
        items: [
          {
            label: "Privacy and compliance",
            autogenerate: {directory: "trust-center/privacy-and-compliance"},
            collapsed: false
          },
          {
            label: "Agreements",
            autogenerate: {directory: "trust-center/agreements"},
            collapsed: false
          },
          {
            label: "Security",
            autogenerate: {directory: "trust-center/security"},
            collapsed: false
          },
          {
            label: "Kinde performance",
            autogenerate: {directory: "trust-center/kinde-performance"},
            collapsed: false
          }
        ]
      },
      {label: "Contributing", link: "/contribute/"}
    ]
  }
];

export default sidebarData;
