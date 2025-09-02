
The `kinde.mfa` binding lets you perform MFA-related operations.

## Methods

### `setEnforcementPolicy(policy: 'required' | 'skip'): void`

Allows you to set the MFA enforcement policy for the user for the current auth flow. The policy can be either `required` or `skip`.

## Available in workflows

- [user:pre_mfa](/workflows/example-workflows/pre-mfa-workflow/)

## Configuration

```js
export const workflowSettings = {
  // ...other settings
  bindings: {"kinde.mfa": {}}
};
```

## Usage

### Using the Kinde infrastructure library (recommended)

The [Kinde infrastructure library](https://github.com/kinde-oss/infrastructure) provides type-safe helper to set the policy:

```js
import {setEnforcementPolicy} from "@kinde/infrastructure";

export default async function (event) {
  setEnforcementPolicy("required");
}
```

### Using the low-level API

If you're not using the infrastructure library, you can call the underlying API directly:

```js
kinde.mfa.setEnforcementPolicy("required");
```
