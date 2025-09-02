
Scopes define what permissions an API key has when making requests to your API. You can create and define [custom scopes](/developer-tools/your-apis/custom-api-scopes/) when you register your API in Kinde, then assign them for each API key you create.

This topic is about strategies and considerations when assigning scopes to API keys.

## Example custom scopes

The scopes you set will be related to what your app is and does. These are just some examples for AI apps.

- `read:ai_chats`
- `write:ai_chat`
- `read:ai_analytics`
- `write:ai_analytics`
- `read:ai_workflows`

## Scope configuration

### When creating an API key

1. Select the minimum required scopes for your use case.
2. Consider the principle of least privilege.
3. Review scope descriptions carefully.

### Updating existing API keys

API keys are immutable, so you can't update the scopes of an existing API key. You can only create a new API key with the desired scopes.

## Recommendations for API scopes best practice

### Security

- **Principle of least privilege**: Only grant the minimum required scopes.
- **Regular review**: Periodically review and audit scope assignments.
- **Scope isolation**: Use different API keys for different purposes.

### Structure

- **Naming conventions**: Use clear, descriptive scope names.
- **Documentation**: Document what each scope provides access to.
- **Versioning**: Consider scope versioning for breaking changes.

## Scope validation

When your application receives a token, validate that it has the required scopes:

```javascript
function hasRequiredScope(scopes, requiredScope) {
  return Array.isArray(scopes) && scopes.includes(requiredScope);
}

// Example usage (after verifying the API key)
if (!hasRequiredScope(verification.scopes, "write:users")) {
  return res.status(403).json({ error: "Insufficient scope" });
}
```
