
Applications are how you make your product or service available to your users, such as through a mobile app, a web app, or a website.

If you plan to manage authentication for each of your applications using Kinde, you will need to add and configure each application.

[Kinde provides several application types](/build/applications/about-applications/), including a regular web app (for execution on a server), single page web app (for browsers and mobile), and machine to machine applications (for backend services that require access to an API, including the [Kinde management API](/developer-tools/kinde-api/connect-to-kinde-api/)).

## Add an application

1. Go to **Settings > Environment >** **Applications**.
2. Select **Add application**.
3. Enter a name and select the type of application.
4. Select **Save**. A tile appears for the application.
5. Configure the application by selecting **View details** on the application tile. Some of the main tasks are listed below.

## Application configuration tasks

- [Get application keys](/get-started/connect/getting-app-keys/) to connect your apps
- Set callback URLs using the [relevant SDK](/developer-tools/about/our-sdks/)
- [Set up authentication](/authenticate/authentication-methods/set-up-user-authentication/)
- [Configure tokens](/build/tokens/configure-tokens/)

## Delete an application

You can now delete applications in Kinde. You need to be an owner or an admin to do this.

<Aside type="danger">

Deleting an application is a destructive action which cannot be reversed. We recommend backing up all relevant data and checking for application dependencies.

</Aside>

When an application is deleted, all application-related authentication settings, token settings, session information, and API links are also deleted.

1. Go to **Settings > Environment >** **Applications**.
2. Select the three dots next to the application you want to delete and select **Delete application**. A confirmation window appears.
3. Follow the prompts in the window and select **Delete application**.
