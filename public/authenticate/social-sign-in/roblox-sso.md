
You can enable users to sign up and sign in using their Roblox credentials. To enable this, you’ll need some technical know-how and a Roblox app.

<Aside type="warning" title="Social sign in for production environments">

Before you make your production environment live, you must add your own social app's Client ID and Client secret in the Kinde connection (as per below). Do not use Kinde's app credentials by leaving the fields blank, as this poses a security and performance risk, and makes it difficult to change auth providers without service disruptions for your users.

</Aside>

## Get your Kinde callback URL

1. In Kinde, go to **Settings** > **Authentication**.
2. In the **Social connections** section, select **Add connection.**
3. In the window that appears, select **Roblox,** then select **Next**. 
4. In the **Callback URL** section:
    1. If you use Kinde’s domain as your default, copy the **Kinde domain** URL.
    2. If you use custom domains, select the **Use custom domain instead** switch.
    3. If you have only one custom domain, copy the **Custom domain** URL. If you have custom domains for multiple organizations, select each one from the list and copy the callbacks for each. You need to enter all custom domain callbacks in the Roblox app.
5. Select **Save**.
6. Use the copied Callback URLs to set up the app, see below.

## Create and configure a Roblox app

1. Sign up for a [Roblox](https://www.roblox.com/) account.
2. Follow [these instructions](https://create.roblox.com/docs/cloud/open-cloud/oauth2-registration/) to create an OAuth 2.0 app in Roblox.
3. Make sure you enable the `open id` and `profile` scopes.
4. Copy the app **Client ID** and **Secret**. You need these to set up Roblox in Kinde.

## Add Roblox credentials to Kinde

You don’t need to wait for app approval to finish configuring Roblox in Kinde. 

1. In Kinde, go to **Settings** > **Authentication**.
2. On the **Roblox** tile, select **Configure**.
3. Paste the **Client ID** and **Secret** from the Roblox app into the relevant fields.
4. Select if you want to treat this connection as a trusted provider. A [trusted provider](/authenticate/about-auth/identity-and-verification/) is one that guarantees the email they provide is verified. We recommend leaving this off for maximum security.
    
    Depending on your selection, here’s the behaviour in Kinde:
    
    - trusted off + existing email - creates new user, only updates people_profiles
    - trusted off + new email - creates new email identity (adds to people_identities)
    - trusted on + existing email - merges accounts w/existing user
    - trusted on + new email - creates new email identity (adds to people_identities)
5. Add any [upstream params](/authenticate/auth-guides/pass-params-idp/) that you want to pass to the IdP.
6. Select which applications will allow Roblox social sign in.
7. Select **Save**.

Users will now see Roblox as an option to sign up and sign in to the selected applications.
