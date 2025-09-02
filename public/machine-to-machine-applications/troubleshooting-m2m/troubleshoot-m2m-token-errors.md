
If you're using a machine-to-machine (M2M) application to request tokens or call APIs, you may encounter errors related to token generation or usage.

This guide covers the most common issues and how to resolve them.

## Token request errors

These errors occur when calling the token endpoint (`/oauth2/token`).

### `invalid_client`

**Cause:**

- The `client_id` or `client_secret` is incorrect
- The app has been deleted or had its secret rotated

**Fix:**

- Double check your credentials in the Kinde dashboard
- If you recently rotated the secret, make sure you're using the new one

### `unauthorized_client`

**Cause:**

- The app hasn’t been authorized to access the requested API (audience)

**Fix:**

- Go to the **APIs** tab on your M2M app in Kinde
- Make sure the app is authorized to access the audience you're requesting

### `invalid_scope`

**Cause:**

- You requested a scope the app isn’t allowed to use
- The scope wasn’t defined on the API or wasn't assigned to the app

**Fix:**

- Go to the **API** in the Kinde dashboard and verify that the scope exists
- Go to the **Scopes** tab on your M2M app and assign the correct ones

### `invalid_request`

**Cause:**

- Missing or malformed parameters in the request
- Common issues: missing `audience`, unsupported `grant_type`

**Fix:**

- Make sure your request includes:
  - `grant_type=client_credentials`
  - `client_id`, `client_secret`, and `audience`
- Check your content type: must be `application/x-www-form-urlencoded`

## Token usage errors

These occur when using the token to call Kinde or your own API.

### `401 Unauthorized`

**Cause:**

- Missing or expired token
- Malformed `Authorization` header

**Fix:**

- Make sure you're including the token in the request:
  ```http
  Authorization: Bearer <token>
  ```
- Check that the token hasn’t expired (`exp` claim)

### `403 Forbidden`

**Cause:**

- The token is valid, but doesn’t have access to the resource
- For org-scoped tokens: the `org_code` doesn’t match the route or resource
- Required scopes are missing

**Fix:**

- Check the token’s `org_code` and compare to the resource being accessed
- Check the token’s `scopes` and ensure the required permission is present

### Token doesn't include `org_code`

**Cause:**

- You’re using a global M2M app instead of an org-scoped one

**Fix:**

- If you're expecting a token with `org_code`, create an [org-scoped M2M app](/machine-to-machine-applications/organization-scoped-m2m-apps/m2m-applications-for-organizations/)

## How to debug

- Use tools like the [Kinde JWT decoder](https://kinde.com/tools/online-jwt-decoder/) to decode the token and inspect claims
- Check your M2M app configuration in Kinde
- Use the **Test** tab in the Kinde dashboard to generate a valid token and compare
