
User-level API keys are tied to an individual user account. When verified, these keys return a trusted user context so you can authorize requests on a per-user basis. This is ideal for B2C apps, personal automations, and integrations where actions should be attributed to a specific user.

## What are user-level API keys?

User-level API keys authenticate requests on behalf of a single user. The verification response includes that user's identifier so you can enforce user-specific authorization rules in your API.

## Benefits of user-level API keys

### Security

- **Clear ownership**: Every call is attributed to a specific user.
- **Fine-grained access**: Enforce per-user permissions and quotas.
- **Auditability**: Attribute changes and access to a concrete user identity.

### Simplicity

- **Straightforward logic**: No need to infer user context from other signals.
- **Consistent across services**: Portable for personal integrations and scripts.

### Let users self-serve

You can expose API key creation to users in the Kinde self-serve portal. See: [Self-serve API keys](/manage-your-apis/add-manage-api-keys/self-serve-api-keys/).

## User context in verification

When you verify a user-level API key, the response includes a non-null `user_id`:

```json
{
  "code": "API_KEY_VERIFIED",
  "message": "API key verified",
  "is_valid": true,
  "key_id": "api_key_123",
  "status": "active",
  "scopes": ["read:profile"],
  "org_code": null,
  "user_id": "kp_1234567890",
  "last_verified_on": "2024-11-18T13:32:03+11",
  "verification_count": 42
}
```

Rely on the `user_id` for authorization and auditing within your API. If you need organization context, consider using [organization-level API keys](/manage-your-apis/about-api-keys/organization-api-keys/) instead.

## Use cases for user-level API keys

### B2C applications

- **Personal data access**: Users access and manage their own data.
- **Per-user rate limits**: Enforce limits per user account.

### Personal automations and scripts

- **Background jobs**: Users run scripts that act as them.
- **Third-party tooling**: Allow integrations to operate within a single user's scope.

### AI assistance

- **User-specific retrieval**: Attribute AI actions and retrieval to a user.

## Best practices for user-level API keys

### Key management

- **Naming**: Include the user's name or ID in key names for clarity.
- **Minimum scopes**: Grant only the scopes needed.
- **Rotation**: Encourage periodic key rotation.
- **Monitoring**: Track usage and anomalies per user.

### Security considerations

- **User validation**: Always validate `user_id` from verification before processing.
- **Scope enforcement**: Enforce scopes server-side.
- **Audit logging**: Log operations with the `user_id` for traceability.
