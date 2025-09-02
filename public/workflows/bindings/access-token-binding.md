
The `kinde.accessToken` binding lets you modify access tokens for the current user. When you add custom claims, they are included in the access token returned to the client.

## Methods

### `setCustomClaim(name: string, value: any): void`

Adds a custom claim to the access token. The claim will be available when the token is returned to the client.

## Available in workflows

- [user:tokens_generation](/workflows/example-workflows/user-token-generation/)

## Configuration

```js
export const workflowSettings = {
  // ...other settings
  bindings: {"kinde.accessToken": {}}
};
```

## Usage

### Using the Kinde infrastructure library (recommended)

The [Kinde infrastructure library](https://github.com/kinde-oss/infrastructure) provides type-safe access token modification:

```js
import { accessTokenCustomClaims } from "@kinde/infrastructure";

export default async function (event: onUserTokenGeneratedEvent) {
  const accessToken = accessTokenCustomClaims<{
    hello: string;
    ipAddress: string;
  }>();

  accessToken.hello = "Hello there!";
  accessToken.ipAddress = event.request.ip;
};
```

### Using the low-level API

If you're not using the infrastructure library, you can modify the access token directly:

```js
kinde.accessToken.setCustomClaim("hello", "Hello there!");
kinde.accessToken.setCustomClaim("ipAddress", event.request.ip);
```
