
A default login route provides a kind of ‘safety net’ redirect for users who encounter issues with authenticated sessions in your application. This route provides the login endpoint for the application, so users can navigate back to the sign in screen to restart an authentication session.

There are a number of reasons that default login routes are useful.

- A bookmarked link to an application tries to access an expired session
- A user hits ‘back’ in their browser while authenticating and the session cannot resume
- A user has cookies disabled and the redirect URI sends them into an authentication loop
- A link in an invitation or verification email fails when a past session has not closed properly

## To set default login routes

We recommend setting a default login route for all your front-and back-end applications.

1. In Kinde, go to **Setting > Applications**.
2. Select **Configure** on the relevant application.
3. In the left menu, select **Authentication**.
4. Scroll to the **Callback URLs** section.
5. Add the **Application login URI.** This is the default login route for resolving session issues. Hits the /auth endpoint to redirect back to your application sign in page. E.g. `https://app.yourapp.com/api/auth/login`
6. Select **Save**.
7. Repeat for each relevant application.
