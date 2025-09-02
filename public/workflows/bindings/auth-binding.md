
The `kinde.auth` binding affects the auth flow.

## Methods

### `denyAccess(reason: string): void`

Prevent the user from accessing the application.

## Available in workflows

- [user:pre_registration](/workflows/example-workflows/pre-user-registration-workflow/)
- [user:post_authentication](/workflows/example-workflows/workflow-user-post-auth/)
- [user:new_password_provided](/workflows/example-workflows/new-password-provided-workflow/)
- [user:existing_password_provided](/workflows/example-workflows/existing-password-provided-workflow/)
- [user:tokens_generation](/workflows/example-workflows/user-token-generation/)
- [user:pre_mfa](/workflows/example-workflows/pre-mfa-workflow/)

## Configuration

```js
export const workflowSettings = {
  // ...other settings
  bindings: {"kinde.auth": {}}
};
```

## Usage

### Using the Kinde infrastructure library (recommended)

The [Kinde infrastructure library](https://github.com/kinde-oss/infrastructure) provides a type-safe helper:

```js
import { denyAccess } from "@kinde/infrastructure";

export default async function (event: onUserTokenGeneratedEvent) {
  if (event.request.ip.startsWith("192")) {
    denyAccess("You are not allowed to access this resource");
  }
}
```

### Using the low-level API

If you're not using the infrastructure library, you can call the underlying API directly:

```js
kinde.auth.denyAccess("You are not allowed to access this resource");
```
