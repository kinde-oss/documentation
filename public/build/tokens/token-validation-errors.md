
OAuth 2.0 authentication involves a request for an access token, and a response to the request.

Here’s some typical successful and unsuccessful (error) responses.

## Successful responses

- `access_token` (required) – The access token string as issued by the authorization server.
- `token_type` (required) – The type of token this is, typically just the string “Bearer”.
- `expires_in` (recommended) – If the access token expires, the server should reply with the duration of time the access token is granted for.
- `refresh_token` (optional) – If the access token will expire, then it is useful to return a refresh token which applications can use to obtain another access token.
- `scope` (optional) – If the scope the user granted is identical to the scope the app requested, this parameter is optional. If the granted scope is different from the requested scope, such as if the user modified the scope, then this parameter is required.

## Unsuccessful responses

- `invalid_request` – The request is missing a parameter so the server can’t proceed with the request. This may also be returned if the request includes an unsupported parameter or repeats a parameter.
- `invalid_client` – Client authentication failed, such as if the request contains an invalid client ID or secret. Send an HTTP 401 response in this case.
- `invalid_grant` – The authorization code (or user’s password for the password grant type) is invalid or expired. This is also the error you would return if the redirect URL given in the authorization grant does not match the URL provided in this access token request.
- `invalid_scope` – For access token requests that include a scope (password or client_credentials grants), this error indicates an invalid scope value in the request.
- `unauthorized_client` – The client is not authorized to use the requested grant type. For example, if you restrict which applications can use the Implicit grant, you would return this error for the other apps.
- `unsupported_grant_type` – If a grant type is requested that the authorization server doesn’t recognize, use this code. Note that unknown grant types also use this specific error code rather than using the `invalid_request` above.
