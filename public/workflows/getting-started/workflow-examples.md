
View examples to help you get started with Kinde workflows.

## Base workflow template

This is the most basic template for a Kinde workflow. You can use this as a starting point for your own workflows.

You can use this in conjunction with the example files below to create more complex workflows.

[Base workflow template](https://github.com/kinde-starter-kits/workflow-base-template)

## Workflow example files

These can be used as a starting point for your own workflows. You can find them in the [Kinde GitHub repo](https://github.com/kinde-starter-kits/workflow-examples). Either copy the files you need into your existing project or the base template above.


- [Block disposable emails](https://github.com/kinde-starter-kits/workflow-examples/blob/main/preUserRegistration/blockDisposableEmails.ts) - Prevent users from creating accounts with disposable email addresses.
- [Drip feed migration](https://github.com/kinde-starter-kits/workflow-examples/blob/main/existingPassword/dripFeedMigrationWorkflow.ts) - Shows how to check a password against an external database before creating the user in Kinde.
- [Sync passwords to another system](https://github.com/kinde-starter-kits/workflow-examples/blob/main/newPassword/securelySyncPasswordWorkflow.ts) - Use encryption keys to securely keep passwords in sync between systems.
- [Custom password validation](https://github.com/kinde-starter-kits/workflow-examples/blob/main/newPassword/customPasswordValidationWorkflow.ts) - Shows how to validate a password against your own rules.
- [Sync new user data to Hubspot](https://github.com/kinde-starter-kits/workflow-examples/blob/main/postUserAuthentication/syncNewUserToHubspotWorkflow.ts) - Send user data and UTM tags to Hubspot when a new user record is created in Kinde.
- [Set a grace period for MFA](https://github.com/kinde-starter-kits/workflow-examples/blob/main/preMFA/gracePeriodWorkflow.ts) - Don't ask for MFA for a set period of time after a user has logged in.
- [Add custom claims to access token](https://github.com/kinde-starter-kits/workflow-examples/blob/main/userTokens/customClaimsAccessTokenWorkflow.ts) - Call an external API to get data to add as custom claims to the user access token.
- [Map M2M applications to organizations](https://github.com/kinde-starter-kits/workflow-examples/blob/main/m2mToken/mapOrgToM2MApplicationWorkflow.ts) - Shows how to map M2M applications to organizations. Useful if using Kinde for B2B API key management
- [Impossible travel - Trustpath integration](https://github.com/kinde-starter-kits/workflow-examples/blob/main/postUserAuthentication/impossibleTravelWorkflow.ts) - Evaluate user login risk using TrustPath's API by checking for "impossible travel" patterns based on IP and recent login activity. If high risk is detected, access is blocked proactively.
