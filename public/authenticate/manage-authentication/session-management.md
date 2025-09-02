
You can manage Kinde authenticated sessions via your application settings. An authenticated session (or SSO session) is the time during which a user is authenticated via Kinde, regardless of their activity. You can define if a session persists even after a browser is closed, and how long can lapse before making a user re-authenticate.

These settings only apply to Kinde sessions and not sessions you maintain through your own application.
If you want, you can [change session settings for an organization](/authenticate/manage-authentication/session-management-per-organization/), without affecting other organizations. 

## Limitations

- Session cookies are not destroyed when a tab is closed, the full browser window must be closed.
- Modern browsers usually allow session restoration. Restoring a browser session can also restore a session cookie.

## Manage SSO session behaviors and policies

1. Go to **Settings > Environment > Applications.**
2. Select **View details** on the application tile.
3. Select **Sessions** in the side menu.
4. In the **SSO sessions** section, decide on the policy for session cookies. A persistent session leaves the cookie active when the browser is closed. A non-persistent session is terminated when the browser window closes (unless the limitations listed above apply). 
5. In the **Session inactivity timeout** section, set how long a session can be inactive before prompting re-authentication. This setting is applied in seconds - where 3,600 seconds is one hour; 86,400 seconds is one day.
6. When you're finished, select **Save**.
