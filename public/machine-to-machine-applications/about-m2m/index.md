
Machine-to-machine (M2M) applications allow you to authenticate backend services, scripts, or automation tools that need to call your APIs without a user being involved.

M2M apps in Kinde use the OAuth 2.0 client credentials flow to obtain access tokens. These tokens can then be used to securely interact with Kinde APIs or your own APIs.

You can create M2M applications for general use across your business, or [scope them to a specific organization](/machine-to-machine-applications/organization-scoped-m2m-apps/m2m-applications-for-organizations/) for tighter access control.

## Use cases

Common scenarios where M2M apps are useful:

- Internal automation scripts that manage users, flags, or orgs
- CI/CD pipelines that update configuration or deploy features
- AI agents that need to interact with your product on behalf of a customer
- Customer-facing API keys that are tied to a specific tenant

## Types of M2M apps in Kinde

### Global (unscoped) M2M apps

These are not linked to any one organization and can be used to call APIs across multiple orgs. Typically used for admin-level automation or infrastructure integration.

### Org-scoped M2M apps

These are tied to a single organization. Tokens issued to these apps include trusted claims like `org_code`, ensuring that any access is isolated to that organization’s context.

## How M2M authentication works

1. Create an M2M app in Kinde.
2. Use the provided `client_id` and `client_secret` in a client credentials request.
3. Receive an access token in response.
4. Use the token to call Kinde APIs or your own backend.

Tokens can include scopes to limit access and, if scoped to an org, will include the `org_code` trusted claim.

## Best practices for M2M apps

- Use separate M2M apps for different scopes or services.
- Limit the [scopes](https://docs.kinde.com/developer-tools/your-apis/custom-api-scopes/) assigned to each M2M app to the minimum required for its function.
- [Rotate client secrets](/build/applications/rotate-client-secret/) periodically using the UI.
- Avoid including any personally identifiable information (PII) in token claims.
