
Kinde allows you to manage API scopes for your M2M applications, providing granular access control and better security between systems.

You need to [register your API](/developer-tools/your-apis/register-manage-apis/) and [secure your API](/developer-tools/your-apis/custom-api-scopes/) before you can do this.

## Enable API scopes for an application

1. Go to **Settings > Applications** and select **View details** on the relevant application.
2. Select **APIs** in the side menu.
3. If the application is not yet authorized, select the three dots menu next to the API you’re giving the app access to, and then select **Authorize application**.
4. In the same three dots menu, select **Manage scopes**.
5. In the window that opens, switch on or off the scopes allowed for the application.
6. Select **Save**.

## Include scopes in the permissions claim

You can include API scopes in the `permissions` claim and add them as part of the user’s access token.

1. Open the relevant M2M application and select **Tokens** in the menu.
2. Scroll to the **Token customization** section and select **Customize** on the **M2M token**.
3. In the dialog, switch on **Include API scopes in the permissions claim**.
4. Select **Save**.
