
Before you can add GitHub as a connected app in Kinde, you need [set up a machine to machine application](/developer-tools/kinde-api/connect-to-kinde-api/) for connecting to the Kinde API.

This is Step 2 of the [Kinde Connected apps setup](/integrate/connected-apps/add-connected-apps/#step-2-set-up-the-app-you-want-to-connect) topic.

1. Sign in to your GitHub account and open the **Developer settings:**
   1. If this is a personal account, select your avatar and select **Settings**.
   2. If this is an organization account, select your avatar, select **Your Organizations**, then select **Settings**.
2. Select **Developer Settings** in the left menu. The **GitHub apps** page opens.
3. Select **New GitHub App**.
4. Enter a name for the app and add a **Homepage URL**.
5. Add the callback URL copied from Kinde's GitHub connected app. It should be something like `https://<yourdomain>.com/connected_apps/callback`.
6. In the **Webhook** section, make webhooks inactive if they are not being used.
7. In the **Permissions** section, for each permission group (Repository, Organization, Account), open the group and select the access level for each permission - **No access**, **Read-only,** or **Read and write**.

   For a permission (scope) to be available in Kinde, it needs to be made accessible here. Note that not every permission visible here will also be available in Kinde. Some scopes have been excluded for security and data protection reasons.

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/eb5b9196-bbdc-47ba-947d-68923092ed00/public"
  alt=""
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

8. Based on the permissions you have selected, choose which events you want to subscribe to in the **Subscribe to events** section.
9. When you have finished, select **Create GitHub app**. Details for the app are created.

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/20cfa2af-06c5-4e21-3e10-003e40d8cb00/public"
  alt=""
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

10. Copy the **Client ID** and **Generate a new client secret** to copy into your Kinde GitHub connected app.
11. Note that you can **Revoke all user tokens** in the same area you set up your app (see the screen shot at step 9 above). It is better to revoke tokens in your app set up, rather than through Kinde.
12. Finish setting up the connection in Kinde by following [Step 3: Configure the connected app in Kinde](/integrate/connected-apps/add-connected-apps/#step-3-configure-the-connected-app-in-kinde).
