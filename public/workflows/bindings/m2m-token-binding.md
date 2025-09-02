
The `kinde.m2mToken` binding lets you modify M2M (machine-to-machine) tokens. When you add custom claims, these are included in the M2M token returned to the client.

## Methods

### `setCustomClaim(name: string, value: any): void`

Adds a custom claim to the M2M token. The claim is available when the token is returned to the client.

## Available in workflows

- [m2m:token_generation](/workflows/example-workflows/m2m-token-generation-workflow/)

## Configuration

```js
export const workflowSettings = {
  // ...other settings
  bindings: {"kinde.m2mToken": {}}
};
```

## Usage

### Using the Kinde infrastructure library (recommended)

The [Kinde infrastructure library](https://github.com/kinde-oss/infrastructure) provides type-safe M2M token modification:

```js
import { m2mTokenCustomClaims } from "@kinde/infrastructure";

export default async function (event: onM2mTokenGeneratedEvent) {
  const m2mToken = m2mTokenCustomClaims<{
    applicationId: string;
    apiVersion: string;
    permissions: string[];
  }>();

  m2mToken.applicationId = event.application.id;
  m2mToken.apiVersion = "v2";
  m2mToken.permissions = ["read:data", "write:data"];
};
```

### Using the low-level API

If you're not using the infrastructure library, you can modify the M2M token directly:

```js
kinde.m2mToken.setCustomClaim("applicationId", event.application.id);
kinde.m2mToken.setCustomClaim("apiVersion", "v2");
kinde.m2mToken.setCustomClaim("permissions", ["read:data", "write:data"]);
```
