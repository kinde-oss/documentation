
The `kinde.secureFetch` binding allows you to make POST requests to external APIs where the payload is encrypted with the [workflow encryption key](/workflows/manage-workflows/workflow-encryption-key/) you have previously set up in Kinde.

## Available in workflows

- [user:pre_registration](/workflows/example-workflows/pre-user-registration-workflow/)
- [user:post_authentication](/workflows/example-workflows/workflow-user-post-auth/)
- [m2m:token_generation](/workflows/example-workflows/m2m-token-generation-workflow/)
- [user:new_password_provided](/workflows/example-workflows/new-password-provided-workflow/)
- [user:existing_password_provided](http://localhost:4321/workflows/example-workflows/existing-password-provided-workflow/)
- [user:tokens_generation](/workflows/example-workflows/user-token-generation/)
- [user:pre_mfa](http://localhost:4321/workflows/example-workflows/pre-mfa-workflow/)
- [user:plan_selection](/workflows/example-workflows/plan-selection-workflow/)
- [user:plan_cancellation_request](/workflows/example-workflows/plan-cancellation-request-workflow/)

## Configuration

```js
export const workflowSettings = {
  // ...other settings
  bindings: {"kinde.secureFetch": {}}
};
```

## Usage

### Using the Kinde infrastructure library (recommended)

The [Kinde infrastructure library](https://github.com/kinde-oss/infrastructure) provides type-safe secure fetch requests:

Note: you will also need the [url](/workflows/bindings/url-binding/) binding enabled for the workflow as this is used under the hood.

```js
import {fetch} from "@kinde-oss/infrastructure";

export default async function Workflow(event) {
  const {data} = await secureFetch(`https://api.somethingsecret.com/api`, {
    method: "POST",
    responseFormat: "json",
    headers: {"Content-Type": "application/json"}
  });

  console.log(data);
}
```

### Using the low-level API

If you're not using the infrastructure library, you can call the underlying API directly:

```js
const res = await kinde.secureFetch(`https://ipinfo.io/${event.request.ip}`, {
  method: "POST",
  responseFormat: "json",
  headers: {"Content-Type": "application/json"}
});
const {json} = res;
console.log(json);
```
