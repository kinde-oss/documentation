
If your user’s authenticate using passwords, you can reset their password through the Kinde admin (instructions below), or [through our API](/kinde-apis/management#tag/users/patch/api/v1/user) using `{"is_password_reset_requested": true}` in the body of a request.

Note that you need to be a Kinde admin or have sufficient permissions to reset a user’s password.

1. In Kinde, go to **Users**. The list of all your users is displayed.
2. Filter, browse, or search the list for the user who’s password needs to be reset.
3. Select their name to open their profile, then scroll down the **Profile** window and select **Reset Password**.
4. Select **Reset** in the confirmation message that appears.

The next time the user signs in, they will be prompted to change their password.
