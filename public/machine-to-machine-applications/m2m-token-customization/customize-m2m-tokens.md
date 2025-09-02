
You can customize the claims of tokens issued to Machine-to-Machine (M2M) applications in Kinde by including selected **Properties** and **Feature Flags**. This allows you to inject structured metadata and configuration directly into the token, without requiring an additional lookup at runtime.

This is useful for:

- Routing or behavior changes based on metadata
- Feature gating in backend systems
- Configuring AI agents or other automation tools

Tokens remain signed JWTs and can be verified like any other Kinde-issued token.

See [Token customization](/build/tokens/token-customization/) for detailed procedures. 

## Include feature flags in the token

If your M2M app is scoped to an organization, you can also include feature flags that are enabled for that org. See [Add feature flags to M2M applications](/machine-to-machine-applications/m2m-application-setup/add-feature-flags-to-m2m-applications/)


## Important info about customizing M2M tokens

- [Properties must be defined and assigned](/properties/work-with-properties/manage-properties/) before they can be included in a token.
- Only [environment level feature flags](/releases/feature-flags/add-feature-flag/) are available for M2M apps.
- Only toggled flags and properties are included - so the token stays lean and secure.

## Complete control over the token

For complete control over the token, you can use the [Kinde M2M token generation workflow](/machine-to-machine-applications/m2m-workflow-automation/m2m-workflow/) to customize the token further.

For example, you can:

- Add custom claims to the token
- Add custom scopes to the token
- Add custom metadata to the token
