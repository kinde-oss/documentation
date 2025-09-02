
The Kinde management API uses JSON Web Tokens (JWTs) to authenticate requests. The token’s scopes claim indicates which endpoints can be accessed when calling the API.

## Example scopes

- `read:users` for fetching user details.
- `write:users` for modifying user details.
- `read:roles` or `write:roles` for managing roles.

You can select scopes when you authorize a new application or you can add scopes to an existing application. We recommend adding as few scopes as you need, to maintain API security.

## Request scopes in the body of an access token request

By default token requests for an authorized application will return all the scopes enabled below. You can also optionally ask for a subset of enabled scopes to be returned by including them in the body of the access token request. You might do this to add more security to access requests, or because you want your users to be very specific about scopes in their requests.

Example request

```
curl --request POST \
  --url 'https://<your_subdomain>.kinde.com/oauth2/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=client_credentials \
  --data 'client_id=<your_m2m_client_id>' \
  --data 'client_secret=<your_m2m_client_secret>' \
  --data 'audience=https://<your_subdomain>.kinde.com/api'\
  --data 'scope=read:users update:users'
```

## Add or modify scopes for accessing the Kinde Management API

Follow this procedure if you already have an application and you experience a scope error, if you want to add scopes for an application, or remove scopes to tighten security.

1. Go to **Settings > Applications** and select the relevant M2M application.
2. On the left, select **APIs**.
3. Select the three dots next to the Kinde management API, then choose **Manage scopes**. 
4. Select the scopes you want to include in the token. For maximum security only enable the minimum scopes you require. 
5. Select **Save**.
