
There's a lot of configurations and events that support API connections. Sometimes things go wrong. Here's a few common errors people come across.

## When a request returns `null`

When you request to receive data back via the API and get an unexpected or `null` response, you may need to add custom claims to the token.

1. In Kinde, go to **Settings > Applications** and open the relevant application.
2. Select **Tokens** in the menu.
3. Scroll to the **Token customization** section.
4. Select **Customize** on the Access or ID token type and switch on / select any claims or properties you want to include in the token.
5. Select **Save**.
For more detailed information, see [Token customization](/build/tokens/token-customization/)

## Kinde Management API scope errors

Access to Kinde's Management API is limited by scopes. When you create or update a M2M application, you need to review and select scopes. If you find that some information is not included in a returned token, check the scopes.

1. In Kinde, go to **Settings > Applications** and select **View details** on the relevant M2M application.
2. Select **APIs** in the menu.
3. In the **Kinde Management API** entry, select the three dots menu and select **Manage scopes**.
4. Select and deselect scopes as required. 
5. Select **Save**.
