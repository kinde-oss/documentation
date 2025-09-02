
You can enable users to sign up and sign in using their X credentials. To enable this, you’ll need an X developer platform account and some developer know-how.

<Aside type="warning" title="Social sign in for production environments">

Before you make your production environment live, you must add your own social app's Client ID and Client secret in the Kinde connection (as per below). Do not use Kinde's app credentials by leaving the fields blank, as this poses a security and performance risk, and makes it difficult to change auth providers without service disruptions for your users.

</Aside>

<Aside>

You may notice X still has mixed URLs and messaging for the name change from Twitter on their own site. We refer to X in this document.

</Aside>

## **Create an X app**

Sign up for a X developer platform account and [add your app](https://developer.twitter.com/en/portal/dashboard).

If you are signing up for the first time, you will be given a default app. If you already have apps, you’ll need to create a project and then add the new app within that project.

## **Get the Kinde callback URL**

1. In Kinde, go to **Settings** > **Authentication**.
2. In the Social connections section, select **Add connection.**
3. In the window that appears, select **X**, then select **Next**. 
4. In the **Callback URL** section:
   1. If you use Kinde’s domain as your default, copy the **Kinde domain** URL.
   2. If you use custom domains, select the **Use custom domain instead** switch. 
   3. If you have only one custom domain, copy the **Custom domain** URL. If you have custom domains for multiple organizations, select each one from the list and copy the callbacks for each. You need to enter all custom domain callbacks in the X app.
5. Select **Save**.
6. Use the copied Callback URL to set up the app, see below.

## **Set up your X app**

1. Sign in to the [X Developer Platform](https://developer.twitter.com/).
2. In the side menu, select **Projects & apps** and then select your app.
3. In the **User authentication settings** section, select **Set up**.
4. Set the **App Permissions.**
5. Switch on **Request email from users.**
6. Select the **Type of App** as **Native app**.
7. Enter the Kinde callback URL you copied earlier. Add entries for all your organization custom domain callbacks, e.g. `account.customdomainone.com/login/callback`, `account.customdomaintwo.com/login/callback`, etc.
8. Enter your Kinde domain URL, e.g. `https://yourdomain.kinde.com`.
9. Enter details in other fields if you wish.
10. Select **Save**.
11. Select the **Key and tokens** tab at the top of the page.
12. Copy the **Client ID** and **Client Secret** from the **Oauth2.0** section and paste them into a text doc or other place where you can get them again later.

View **X Developer Platform’s** docs for more info about [authentication](https://developer.twitter.com/en/docs/authentication/overview).

## **Add X credentials to Kinde**

1. In Kinde, go to **Settings** > **Authentication**.
2. In the list of **Social connections**, select **Configure** on the **X** tile.
3. Paste the **Client ID** and **Client secret** from the X app into the relevant fields.
4. Select if you want to treat this connection as a trusted provider. A [trusted provider](/authenticate/about-auth/identity-and-verification/) is one that guarantees the email they issue is verified. We recommend leaving this off for maximum security.
5. Add any [upstream params](/authenticate/auth-guides/pass-params-idp/) that you want to pass to the IdP.
6. Select which applications will allow users to sign in with X.
7. Select **Save**.

Users will now see X as an option to sign up and sign in to the selected applications.

## When an email is not provided

X does not require an email for sign up, but Kinde does. So if a user signs up with X and an email is not detected, we will ask for one.

The user only needs to provide their email once, then they can sign in via X without disruption.

If the email they provide is already detected in Kinde, we will automatically link the accounts so as not to duplicate.
