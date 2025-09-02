
Kinde's [Account API](https://docs.kinde.com/kinde-apis/frontend/) uses a users access token to grab data like roles, permissions, profile, billing entitlements, etc. These details can be called from a browser as the call is scoped to the user who the token is for.

<Aside>

Some data is intentially not available via the Accounts API. For example, plan entitlements information for organizations. This is because Accounts API data is surfaced via a browser token and passing data this way is less secure. Access the Kinde Management API to access secure data. Or contact support for guidance.

</Aside>

## When to use the Kinde Account API

- `properties` - show a specific promotion for users in certain regions or industries
- `feature flags` - roll out beta features for a subset of users
- `permissions` - only give access to certtain parts of your app based on permissions
- `roles` - restrict access to functions by role, e.g. admins.
- `entitlements` - to enable individual users to see plan entitlements

## Access the Account API

1. Get a user access token. This can be obtained when a user signs in via the methods you've setup in Kinde (e.g. Google, passwordless, etc).
2. Call one of the Account API endpoints using the user access token in the Authorization header as a Bearer token. Typically, you can use the getToken command in the relevant SDK.

If you want an endpoint added to the [Account API library](https://docs.kinde.com/kinde-apis/frontend/), contact us via support@kinde.com. 
