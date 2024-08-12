// This file has all the data for `Starlight’s` sidebar, but it contains some extra data
// we use to enrich and re-use somewhere else, like `icon` and `description`, used in the `Topics` component

const sidebarData = [
  {
    label: "Get started",
    description: "Essential information for using and connecting to Kinde",
    icon: "sparkle",
    collapsed: true,
    cardLink: "/get-started/guides/first-things-first/",
    items: [
      {
        label: "Guides",
        autogenerate: {directory: "get-started/guides"},
        collapsed: false
      },
      {
        label: "Learn about Kinde",
        autogenerate: {directory: "get-started/learn-about-kinde"},
        collapsed: false
      },
      {
        label: "Switch to Kinde",
        autogenerate: {directory: "get-started/switch-to-kinde"},
        collapsed: false
      },
      {
        label: "Connect",
        autogenerate: {directory: "get-started/connect"},
        collapsed: false
      },
      {
        label: "APIs and SDKs",
        autogenerate: {directory: "get-started/apis-and-sdks"},
        collapsed: false
      },
      {
        label: "Team and account",
        autogenerate: {directory: "get-started/team-and-account"},
        collapsed: false
      }
    ]
  },
  {
    label: "Build on Kinde",
    description: "Set up all the important features under the hood",
    icon: "build",
    collapsed: true,
    cardLink: "/build/set-up-options/kinde-business-model/",
    items: [
      {
        label: "Set up options",
        autogenerate: {directory: "build/set-up-options"},
        collapsed: false
      },
      {
        label: "Environments",
        autogenerate: {directory: "build/environments"},
        collapsed: false
      },
      {
        label: "Applications",
        autogenerate: {directory: "build/applications"},
        collapsed: false
      },
      {
        label: "Organizations",
        autogenerate: {directory: "build/organizations"},
        collapsed: false
      },
      {
        label: "Tokens",
        autogenerate: {directory: "build/tokens"},
        collapsed: false
      },
      {
        label: "Domain management",
        autogenerate: {directory: "build/domains"},
        collapsed: false
      }
    ]
  },
  {
    label: "SDKs and APIs",
    description: "Jump right in with our API-first developer tools",
    icon: "dev-tools",
    collapsed: true,
    cardLink: "/developer-tools/about/our-sdks/",
    items: [
      {
        label: "Overview",
        autogenerate: {directory: "developer-tools/about"},
        collapsed: false
      },
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
        label: "Kinde API",
        autogenerate: {directory: "developer-tools/kinde-api"},
        collapsed: false
      },
      {
        label: "Your APIs",
        autogenerate: {directory: "developer-tools/your-apis"},
        collapsed: false
      }
    ]
  },
  {
    label: "Auth and access",
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
        label: "Manage authentication",
        autogenerate: {directory: "authenticate/manage-authentication"},
        collapsed: false
      },
      {
        label: "Custom configurations",
        autogenerate: {directory: "authenticate/custom-configurations"},
        collapsed: false
      },
      {
        label: "Enterprise connections",
        autogenerate: {directory: "authenticate/enterprise-connections"},
        collapsed: false
      },
      {
        label: "Multi-factor auth",
        autogenerate: {directory: "authenticate/multi-factor-auth"},
        collapsed: false
      },
      {
        label: "Social connections",
        autogenerate: {directory: "authenticate/social-sign-in"},
        collapsed: false
      }
    ]
  },
  {
    label: "Plans and payments",
    description: "Build plans and pricing so that your users can pay you",
    icon: "billing",
    collapsed: true,
    cardLink: "/billing/about-payments-and-plans/",
    items: [
      {
        label: "About payments and plans",
        autogenerate: {directory: "billing/about-payments-and-plans"},
        collapsed: false
      }
    ]
  },
  {
    label: "Design",
    description: "Integrate your own brand elements for pages and screens",
    icon: "brand",
    collapsed: true,
    cardLink: "/design/brand/apply-branding-for-an-organization/",
    items: [
      {
        label: "Your brand",
        autogenerate: {directory: "design/brand"},
        collapsed: false
      },
      {
        label: "Pages",
        autogenerate: {directory: "design/pages"},
        collapsed: false
      },
      {
        label: "Forms",
        autogenerate: {directory: "design/forms"},
        collapsed: false
      },
      {
        label: "Emails",
        autogenerate: {directory: "design/emails"},
        collapsed: false
      }
    ]
  },
  {
    label: "Properties",
    description: "Store and use custom data about users and organizations",
    collapsed: true,
    icon: "properties",
    cardLink: "/properties/about-properties/",
    items: [
      {
        label: "About properties",
        autogenerate: {directory: "properties/about-properties"},
        collapsed: false
      },
      {
        label: "Work with properties",
        autogenerate: {directory: "properties/work-with-properties"},
        collapsed: false
      }
    ]
  },
  {
    label: "Manage users",
    description: "Manage user profiles, including roles and permissions",
    icon: "profile",
    collapsed: true,
    cardLink: "/manage-users/about/",
    items: [
      {
        label: "Overview",
        autogenerate: {directory: "manage-users/about"},
        collapsed: false
      },
      {
        label: "Add and edit",
        autogenerate: {directory: "manage-users/add-and-edit"},
        collapsed: false
      },
      {
        label: "Access control",
        autogenerate: {directory: "manage-users/access-control"},
        collapsed: false
      },
      {
        label: "Roles and permissions",
        autogenerate: {directory: "manage-users/roles-and-permissions"},
        collapsed: false
      },
      {
        label: "View activity",
        autogenerate: {directory: "manage-users/view-activity"},
        collapsed: false
      }
    ]
  },
  {
    label: "Features and releases",
    description: "Take control of feature development and releases  ",
    icon: "releases",
    collapsed: true,
    cardLink: "/releases/about/about-feature-flags/",
    items: [
      {
        label: "About",
        autogenerate: {directory: "releases/about"},
        collapsed: false
      },
      {
        label: "Feature flags",
        autogenerate: {directory: "releases/feature-flags"},
        collapsed: false
      }
      // {
      //   label: "Plan and release",
      //   autogenerate: {directory: "releases/plan-and-release"},
      //   collapsed: false
      // }
    ]
  },
  {
    label: "Integrations",
    description: "Create and manage external system connections to Kinde",
    icon: "webhooks",
    collapsed: true,
    cardLink: "/integrate/connected-apps/add-connected-apps/",
    items: [
      {
        label: "Connected apps",
        autogenerate: {directory: "integrate/connected-apps"},
        collapsed: false
      },
      {
        label: "Webhooks",
        autogenerate: {directory: "integrate/webhooks"},
        collapsed: false
      },
      {
        label: "Third-party tools",
        autogenerate: {directory: "integrate/third-party-tools"},
        collapsed: false
      }
    ]
  },
  {
    label: "Manage your account",
    description: "Update account details, data, team, and business information",
    icon: "settings",
    collapsed: true,
    cardLink: "/manage-your-account/profile-and-plan/view-kinde-plan/",
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
      // {
      //   label: "Team",
      //   autogenerate: {directory: "manage-your-account/team"},
      //   collapsed: false
      // },
      {
        label: "Business information",
        autogenerate: {directory: "manage-your-account/business-information"},
        collapsed: false
      }
    ]
  },
  {
    label: "Trust center",
    description: "Find out how we safeguard your security and data",
    icon: "trust",
    collapsed: true,
    cardLink: "/trust-center/privacy-and-compliance/compliance/",
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
  }
];

export default sidebarData;
