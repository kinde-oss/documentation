
Bindings allow your workflow code to interact with resources within the Kinde infrastructure.

When you declare a binding in your workflow, you grant it a specific capability, such as being able to access environment variables or add claims to an access token. For example:

```js
export const workflowSettings: WorkflowSettings = {
  bindings: {
    "kinde.env": {}
  },
  ...
};
```

If a binding is not declared and you try to use it in the workflow, you'll get a runtime error.

## Available bindings

The following bindings available, but only within certain workflow contexts. Check the documentation to see which bindings are available for each workflow trigger.

### Kinde specific bindings:

- [kinde.accessToken](/workflows/bindings/access-token-binding/)
- [kinde.auth](/workflows/bindings/auth-binding/)
- [kinde.env](/workflows/bindings/env-binding/)
- [kinde.fetch](/workflows/bindings/fetch-binding/)
- [kinde.idToken](/workflows/bindings/id-token-binding/)
- [kinde.m2mToken](/workflows/bindings/m2m-token-binding/)
- [kinde.mfa](/workflows/bindings/mfa-binding/)
- [kinde.plan](/workflows/bindings/plan-binding/)
- [kinde.secureFetch](/workflows/bindings/secure-fetch-binding/)

### Native bindings

- [url](/workflows/bindings/url-binding/)
