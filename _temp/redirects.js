const redirects = {
  "/docs/developer-tools/typescript-sdk/": "/developer-tools/sdks/backend/typescript-sdk/",
  "/docs/user-management/view-user-activity/": "/manage-users/view-activity/view-user-activity/",
  "/docs/user-management/set-temporary-password/":
    "/manage-users/access-control/set-temporary-password/",
  "/docs/authentication-and-access/azure/": "/authenticate/enterprise-connections/azure/",
  "/docs/authentication-and-access/email-deliverability/":
    "/authenticate/manage-authentication/email-deliverability/",
  "/docs/your-kinde-account/supported-data-regions/":
    "/get-started/learn-about-kinde/supported-data-regions/",
  "/docs/developer-tools/nextjs-sdk/": "/developer-tools/sdks/backend/nextjs-sdk/",
  "/docs/authentication-and-access/user-communication/":
    "/authenticate/manage-authentication/user-communication/",
  "/docs/authentication-and-access/identity-and-verification/":
    "/authenticate/about-auth/identity-and-verification/",
  "/docs/authentication-and-access/authentication-basics/":
    "/authenticate/about-auth/authentication-basics/",
  "/docs/authentication-and-access/password-authentication/":
    "/authenticate/authentication-methods/password-authentication/",
  "/docs/authentication-and-access/username-authentication/":
    "/authenticate/authentication-methods/username-authentication/",
  "/docs/user-management/import-users-in-bulk/": "/manage-users/add-and-edit/import-users-in-bulk/",
  "/docs/user-management/add-and-edit-users/": "/manage-users/add-and-edit/add-and-edit-users/",
  "/docs/authentication-and-access/cloudflare-zero-trust/":
    "/integrate/third-party-tools/cloudflare-zero-trust/",
  "/docs/important-information/privacy-policy/":
    "/trust-center/privacy-and-compliance/privacy-policy/",
  "/docs/developer-tools/nuxt-module/": "/developer-tools/sdks/backend/nuxt-module/",
  "/docs/developer-tools/kinde-edge-workers/": "/integrate/third-party-tools/kinde-edge-workers/",
  "/docs/important-information/compliance/": "/trust-center/privacy-and-compliance/compliance/",
  "/docs/authentication-and-access/": "/authenticate/about-auth/about-authentication/",
  "/docs/authentication-and-access/email-authentication/":
    "/authenticate/authentication-methods/email-authentication/",
  "/docs/authentication-and-access/xero-sso/": "/authenticate/social-sign-in/xero-sso/",
  "/docs/authentication-and-access/twitter/": "/authenticate/social-sign-in/twitter/",
  "/docs/authentication-and-access/twitch/": "/authenticate/social-sign-in/twitch/",
  "/docs/authentication-and-access/slack/": "/authenticate/social-sign-in/slack/",
  "/docs/authentication-and-access/microsoft-sso/": "/authenticate/social-sign-in/microsoft-sso/",
  "/docs/authentication-and-access/linkedin/": "/authenticate/social-sign-in/linkedin/",
  "/docs/authentication-and-access/google/": "/authenticate/social-sign-in/google/",
  "/docs/authentication-and-access/gitlab/": "/authenticate/social-sign-in/gitlab/",
  "/docs/authentication-and-access/github/": "/authenticate/social-sign-in/github/",
  "/docs/authentication-and-access/facebook/": "/authenticate/social-sign-in/facebook/",
  "/docs/authentication-and-access/discord/": "/authenticate/social-sign-in/discord/",
  "/docs/authentication-and-access/bitbucket-sso/": "/authenticate/social-sign-in/bitbucket-sso/",
  "/docs/authentication-and-access/apple/": "/authenticate/social-sign-in/apple/",
  "/docs/authentication-and-access/custom-social-sign-in/":
    "/authenticate/social-sign-in/custom-social-sign-in/",
  "/docs/authentication-and-access/enable-multi-factor-authentication/":
    "/authenticate/multi-factor-auth/enable-multi-factor-authentication/",
  "/docs/authentication-and-access/about-multi-factor-authentication/":
    "/authenticate/multi-factor-auth/about-multi-factor-authentication/",
  "/docs/authentication-and-access/home-realm-discovery/":
    "/authenticate/enterprise-connections/home-realm-discovery/",
  "/docs/authentication-and-access/custom-saml-google-workspace/":
    "/authenticate/enterprise-connections/custom-saml-google-workspace/",
  "/docs/authentication-and-access/navigate-between-organizations/":
    "/authenticate/custom-configurations/navigate-between-organizations/",
  "/docs/authentication-and-access/redirect-users-on-sign-in/":
    "/authenticate/custom-configurations/redirect-users-on-sign-in/",
  "/docs/authentication-and-access/prepopulate-identity-sign-in/":
    "/authenticate/custom-configurations/prepopulate-identity-sign-in/",
  "/docs/authentication-and-access/custom-authentication-pages/":
    "/authenticate/custom-configurations/custom-authentication-pages/",
  "/docs/authentication-and-access/disable-sign-up/":
    "/authenticate/custom-configurations/disable-sign-up/",
  "/docs/authentication-and-access/authentication-experience/":
    "/authenticate/custom-configurations/authentication-experience/",
  "/docs/authentication-and-access/organization-auth-experience/":
    "/authenticate/manage-authentication/organization-auth-experience/",
  "/docs/authentication-and-access/manage-authentication-organizations/":
    "/authenticate/manage-authentication/manage-authentication-organizations/",
  "/docs/authentication-and-access/manage-authentication-applications/":
    "/authenticate/manage-authentication/manage-authentication-applications/",
  "/docs/authentication-and-access/phone-authentication/":
    "/authenticate/authentication-methods/phone-authentication/",
  "/docs/authentication-and-access/passwordless-authentication/":
    "/authenticate/authentication-methods/passwordless-authentication/",
  "/docs/authentication-and-access/set-up-user-authentication/":
    "/authenticate/authentication-methods/set-up-user-authentication/",
  "/docs/authentication-and-access/authentication-screen-flows/":
    "/authenticate/about-auth/authentication-screen-flows/",
  "/docs/releases/about-feature-flags/": "/releases/basics/about-feature-flags/",
  "/docs/authentication-and-access/reset-multi-factor-authentication-for-a-user/":
    "/manage-users/access-control/reset-multi-factor-authentication-for-a-user/",
  "/docs/user-management/delete-or-suspend-users/":
    "/manage-users/access-control/delete-or-suspend-users/",
  "/docs/user-management/accept-policies-signup/":
    "/manage-users/access-control/accept-policies-signup/",
  "/docs/undefined/organization-properties/":
    "/properties/about-properties/organization-properties/",
  "/docs/connect-to-kinde/what-does-kinde-do/":
    "/get-started/learn-about-kinde/what-does-kinde-do/",
  "/docs/developer-tools/sveltekit-sdk/": "/developer-tools/sdks/backend/sveltekit-sdk/",
  "/docs/connect-to-kinde/kinde-product-security/":
    "/get-started/learn-about-kinde/kinde-product-security/",
  "/docs/developer-tools/using-kinde-without-an-sdk/":
    "/developer-tools/about/using-kinde-without-an-sdk/",
  "/docs/developer-tools/nextjs-sdkv1/": "/developer-tools/sdks/backend/nextjs-sdkv1/",
  "/docs/customize/design-your-welcome-pages/": "/design/pages/design-your-welcome-pages/",
  "/docs/build/allow-org-create-on-signup/": "/build/organizations/allow-org-create-on-signup/",
  "/docs/developer-tools/nodejs-sdk/": "/developer-tools/sdks/backend/nodejs-sdk/",
  "/docs/user-management/reset-user-password/": "/manage-users/access-control/reset-user-password/",
  "/docs/undefined/property-groups/": "/properties/work-with-properties/property-groups/",
  "/docs/undefined/manage-properties/": "/properties/work-with-properties/manage-properties/",
  "/docs/developer-tools/python-sdk/": "/developer-tools/sdks/backend/python-sdk/",
  "/docs/developer-tools/php-sdk/": "/developer-tools/sdks/backend/php-sdk/",
  "/docs/authentication-and-access/authentication-methods/":
    "/authenticate/about-auth/authentication-methods/",
  "/docs/developer-tools/react-sdk/": "/developer-tools/sdks/frontend/react-sdk/",
  "/docs/authentication-and-access/custom-saml/":
    "/authenticate/enterprise-connections/custom-saml/",
  "/docs/connect-to-kinde/callback-urls/": "/get-started/connect/callback-urls/",
  "/docs/undefined/": "/properties/about-properties/",
  "/docs/undefined/properties-in-tokens/": "/properties/work-with-properties/properties-in-tokens/",
  "/docs/build/add-a-m2m-application-for-api-access/":
    "/developer-tools/kinde-api/add-a-m2m-application-for-api-access/",
  "/docs/connect-to-kinde/auth0-to-kinde/": "/get-started/switch-to-kinde/auth0-to-kinde/",
  "/docs/build/allow-user-signup-org/": "/build/organizations/allow-user-signup-org/",
  "/docs/build/add-and-manage-organizations/": "/build/organizations/add-and-manage-organizations/",
  "/docs/important-information/security-wall-of-fame/":
    "/trust-center/security/security-wall-of-fame/",
  "/docs/customize/email-notifications/": "/design/emails/email-notifications/",
  "/docs/your-kinde-account/check-your-mau/": "/manage-your-account/your-data/check-your-mau/",
  "/docs/developer-tools/ruby-sdk/": "/developer-tools/sdks/backend/ruby-sdk/",
  "/docs/customize/apply-branding-for-an-organization/":
    "/design/brand/apply-branding-for-an-organization/",
  "/docs/connect-to-kinde/set-up-tasks/": "/get-started/guides/set-up-tasks/",
  "/docs/developer-tools/add-connected-apps/": "/integrate/connected-apps/add-connected-apps/",
  "/docs/developer-tools/patreon-connected-app/":
    "/integrate/connected-apps/patreon-connected-app/",
  "/docs/customize/internationalization/": "/design/pages/internationalization/",
  "/docs/important-information/end-user-licence-agreement/":
    "/trust-center/agreements/end-user-licence-agreement/",
  "/docs/build/manage-subscribers/": "/manage-users/add-and-edit/manage-subscribers/",
  "/docs/connect-to-kinde/subdomains-for-callbacks/": "/build/domains/subdomains-for-callbacks/",
  "/docs/developer-tools/express-sdk/": "/developer-tools/sdks/backend/express-sdk/",
  "/docs/user-management/view-audit-log/": "/manage-users/view-activity/view-audit-log/",
  "/docs/build/multi-tenancy-using-organizations/":
    "/build/organizations/multi-tenancy-using-organizations/",
  "/docs/your-kinde-account/environments/": "/build/environments/environments/",
  "/docs/build/get-access-token-for-connecting-securely-to-kindes-api/":
    "/developer-tools/kinde-api/get-access-token-for-connecting-securely-to-kindes-api/",
  "/docs/developer-tools/javascript-sdk/": "/developer-tools/sdks/frontend/javascript-sdk/",
  "/docs/developer-tools/ios-sdk/": "/developer-tools/sdks/native/ios-sdk/",
  "/docs/developer-tools/dotnet-sdk/": "/developer-tools/sdks/backend/dotnet-sdk/",
  "/docs/your-kinde-account/add-team-members/": "/get-started/team-and-account/add-team-members/",
  "/docs/user-management/": "/manage-users/about/",
  "/docs/developer-tools/java-sdk/": "/developer-tools/sdks/backend/java-sdk/",
  "/docs/customize/pointing-your-domain/": "/build/domains/pointing-your-domain/",
  "/docs/your-kinde-account/run-multiple-businesses/":
    "/build/set-up-options/run-multiple-businesses/",
  "/docs/your-kinde-account/closing-your-account/":
    "/manage-your-account/your-data/closing-your-account/",
  "/docs/build/about-kinde-apis/": "/get-started/apis-and-sdks/about-kinde-apis/",
  "/docs/important-information/terms-of-service/": "/trust-center/agreements/terms-of-service/",
  "/docs/your-kinde-account/kinde-perk-code/": "/get-started/team-and-account/kinde-perk-code/",
  "/docs/important-information/service-status/": "/trust-center/kinde-performance/service-status/",
  "/docs/important-information/vulnerability-disclosure-policy/":
    "/trust-center/security/vulnerability-disclosure-policy/",
  "/docs/important-information/security-at-kinde/": "/trust-center/security/security-at-kinde/",
  "/docs/important-information/gdpr/": "/trust-center/privacy-and-compliance/gdpr/",
  "/docs/your-kinde-account/policies-terms/":
    "/manage-your-account/business-information/policies-terms/",
  "/docs/your-kinde-account/change-your-business-time-zone/":
    "/manage-your-account/business-information/change-your-business-time-zone/",
  "/docs/your-kinde-account/update-your-details/":
    "/manage-your-account/business-information/update-your-details/",
  "/docs/your-kinde-account/exporting-data/": "/manage-your-account/your-data/exporting-data/",
  "/docs/your-kinde-account/update-kinde-payment/":
    "/manage-your-account/profile-and-plan/update-kinde-payment/",
  "/docs/your-kinde-account/change-kinde-plan/":
    "/manage-your-account/profile-and-plan/change-kinde-plan/",
  "/docs/your-kinde-account/view-kinde-plan/":
    "/manage-your-account/profile-and-plan/view-kinde-plan/",
  "/docs/developer-tools/gitlab-connected-app/": "/integrate/connected-apps/gitlab-connected-app/",
  "/docs/developer-tools/github-connected-app/": "/integrate/connected-apps/github-connected-app/",
  "/docs/developer-tools/google-drive-connected-app/":
    "/integrate/connected-apps/google-drive-connected-app/",
  "/docs/releases/manage-feature-flags-api/": "/releases/feature-flags/manage-feature-flags-api/",
  "/docs/releases/edit-feature-flag/": "/releases/feature-flags/edit-feature-flag/",
  "/docs/releases/manage-feature-flags/": "/releases/feature-flags/manage-feature-flags/",
  "/docs/releases/add-feature-flag/": "/releases/feature-flags/add-feature-flag/",
  "/docs/authentication-and-access/track-user-sign-in-with-google-analytics/":
    "/manage-users/view-activity/track-user-sign-in-with-google-analytics/",
  "/docs/user-management/default-user-roles/":
    "/manage-users/roles-and-permissions/default-user-roles/",
  "/docs/user-management/apply-roles-and-permissions-to-users/":
    "/manage-users/roles-and-permissions/apply-roles-and-permissions-to-users/",
  "/docs/user-management/user-roles/": "/manage-users/roles-and-permissions/user-roles/",
  "/docs/user-management/user-permissions/":
    "/manage-users/roles-and-permissions/user-permissions/",
  "/docs/user-management/troubleshoot-user-import-errors/":
    "/manage-users/add-and-edit/troubleshoot-user-import-errors/",
  "/docs/user-management/manage-users-across-organizations/":
    "/manage-users/about/manage-users-across-organizations/",
  "/docs/customize/robot-detection/": "/design/forms/robot-detection/",
  "/docs/customize/set-up-subscription-form/": "/design/forms/set-up-subscription-form/",
  "/docs/customize/set-up-the-request-access-page/":
    "/design/pages/set-up-the-request-access-page/",
  "/docs/customize/remove-kinde-branding/": "/design/brand/remove-kinde-branding/",
  "/docs/authentication-and-access/add-social-sign-in/":
    "/authenticate/social-sign-in/add-social-sign-in/",
  "/docs/developer-tools/protect-your-api/": "/developer-tools/kinde-api/protect-your-api/",
  "/docs/developer-tools/api-example-node/": "/developer-tools/kinde-api/api-example-node/",
  "/docs/build/test-the-connection-to-kindes-api/":
    "/developer-tools/kinde-api/test-the-connection-to-kindes-api/",
  "/docs/build/register-an-api/": "/developer-tools/your-apis/register-manage-apis/",
  "/docs/developer-tools/apollo-graphql/": "/developer-tools/sdks/other/apollo-graphql/",
  "/docs/developer-tools/node-express-graphql/":
    "/developer-tools/sdks/other/node-express-graphql/",
  "/docs/developer-tools/flutter-sdk/": "/developer-tools/sdks/native/flutter-sdk/",
  "/docs/developer-tools/expo-react-native/": "/developer-tools/sdks/native/expo-react-native/",
  "/docs/developer-tools/react-native-sdk/": "/developer-tools/sdks/native/react-native-sdk/",
  "/docs/developer-tools/android-sdk/": "/developer-tools/sdks/native/android-sdk/",
  "/docs/developer-tools/elixir-sdk/": "/developer-tools/sdks/backend/elixir-sdk/",
  "/docs/developer-tools/": "/developer-tools/about/our-sdks/",
  "/docs/developer-tools/verifying-json-web-tokens/": "/build/tokens/verifying-json-web-tokens/",
  "/docs/developer-tools/oath-scopes/": "/build/tokens/oath-scopes/",
  "/docs/developer-tools/token-validation-errors/": "/build/tokens/token-validation-errors/",
  "/docs/build/token-customization/": "/build/tokens/token-customization/",
  "/docs/developer-tools/refresh-tokens/": "/build/tokens/refresh-tokens/",
  "/docs/build/about-id-tokens/": "/build/tokens/about-id-tokens/",
  "/docs/build/about-access-tokens/": "/build/tokens/about-access-tokens/",
  "/docs/build/configure-tokens/": "/build/tokens/configure-tokens/",
  "/docs/build/delete-organization/": "/build/organizations/delete-organization/",
  "/docs/build/import-organizations/": "/build/organizations/import-organizations/",
  "/docs/build/orgs-for-developers/": "/build/organizations/orgs-for-developers/",
  "/docs/build/add-and-manage-applications/": "/build/applications/add-and-manage-applications/",
  "/docs/connect-to-kinde/about-applications/": "/build/applications/about-applications/",
  "/docs/build/production-to-live/": "/build/environments/production-to-live/",
  "/docs/build/manage-access-requests/": "/build/set-up-options/manage-access-requests/",
  "/docs/connect-to-kinde/kinde-business-model/": "/build/set-up-options/kinde-business-model/",
  "/docs/connect-to-kinde/getting-app-keys/": "/get-started/connect/getting-app-keys/",
  "/docs/connect-to-kinde/switch-to-kinde-for-user-authentication/":
    "/get-started/switch-to-kinde/switch-to-kinde-for-user-authentication/",
  "/docs/connect-to-kinde/byo-code/": "/get-started/guides/byo-code/",
  "/docs/connect-to-kinde/start-with-starter-kit/": "/get-started/guides/start-with-starter-kit/",
  "/docs/connect-to-kinde/first-things-first/": "/get-started/guides/first-things-first/"
};

export default redirects;
