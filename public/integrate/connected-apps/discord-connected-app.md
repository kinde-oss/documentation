
Before you can add Discord as a connected app in Kinde, you need to [set up a machine to machine application](/developer-tools/kinde-api/connect-to-kinde-api/) to connect to Kinde’s API.

This is Step 2 of the [Kinde Connected apps setup](/integrate/connected-apps/add-connected-apps/#step-2-set-up-the-app-you-want-to-connect) topic. You first need to have [added the connected app](/integrate/connected-apps/add-connected-apps/#step-1-add-the-connected-app-in-kinde) in Kinde.

## What you need

The Provider to Kinde callback URL from the Kinde connected app.

## Set up the Discord app

1. Sign in to your [Discord developer account](https://discord.com/developers/applications).
2. In the **Applications** section, select **New application**.
3. Give your application a name and agree to Discord’s terms, then select **Create**.
4. Copy the **Client ID** and **Client secret**. These correspond to the Client ID and Client secret in your Kinde M2M application.

   ![screen shot of discord add application screen](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/9b43cdbe-70fd-4c61-beee-155efadfde00/public)

5. In the menu, select **OAuth2**.

   ![screen shot of redirects field in discord app](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/b7fa03fd-f67c-433a-f603-8607f1df4a00/public)

6. If the Redirect URI field is not blank, select **Add Another**.
7. Paste the **Provider to Kinde callback URL** that you copied when you set up the connection in Kinde.
8. Next: Finish setting up the connection in the Kinde application. See [Configure the connected app in Kinde](/integrate/connected-apps/add-connected-apps/#step-3-configure-the-connected-app-in-kinde).
