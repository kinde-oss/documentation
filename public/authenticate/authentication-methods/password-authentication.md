
Password authentication is where an end user supplies and maintains their own password to access your app or project.

Depending on your authentication needs and security requirements, you might be okay to allow users to authenticate with a password. However, we recommend using a more secure method, such as through one-time-passwords, or by adding [multi-factor authentication](/authenticate/multi-factor-auth/about-multi-factor-authentication/) to the sign in experience.

## Passwords and identity verification

To reset a password for a user, or allow them to reset their own password, they need to have a [verified contact identit](/authenticate/about-auth/identity-and-verification/)y such as an email in their Kinde profile. You’ll need this to securely set a temporary password or to trigger a password reset for a user.

## Password visibility and encryption

The way Kinde is built ensures that user passwords can only be stored as hash-encrypted strings, meaning they are not visible and cannot be deciphered or accessed to be exploited. Neither you in your business or Kinde can see any passwords that a user has set.

## Password strength

Kinde supports the following password requirements:

- 8 character minimum
- Blocking of 1,000,000 most common passwords
- 5 incorrect attempts locks account out for 5 minutes
- No complexity requirements or character limitations - combined with allowing long passwords, this provides better security and ease of use. For example, it’s harder for a computer to crack `FiremanSoccerPoodleLemon` than `FireSoc!22`, and also easier for a human to remember.

If using passwords for authentication, we do recommend adding multi-factor authentication as a requirement or option, for added security.

## Options for resetting a password

There are several ways to reset a user’s password.

### The user can select ‘forgot password’

User’s can trigger a password reset by selecting ‘forgot password’ when they attempt to sign in. When they do this, they will be sent a one-time passcode via email. When they enter the code, they will be prompted to reset their password.

### Force a password reset via Kinde or API

You can trigger a password reset via the Kinde admin or via API. This is only suitable if you have an email for the user, as they will be sent a one-time passcode when they try to sign in next. They must enter the code to reset their password.

See [Reset a user’s password](/manage-users/access-control/reset-user-password/).

### Issue a temporary password

You can set a single-use password for new or existing users via the Kinde admin or via the Kinde Management API. Once you set the password, you need to communicate it to the user via your own chosen method - it cannot be sent from Kinde.

The user enters the temporary password to sign up or sign in, then they set their own password.

See [Set a temporary password](/manage-users/access-control/set-temporary-password/).

## Enable password authentication across apps

1. Go to **Settings > Authentication**.
2. In the **Password** section, select **Configure** on the relevant password tile: **Email + password** or **Username**. A configuration window opens.
3. Scroll to the bottom and switch password authentication on for the apps you want.
4. Select **Save**.

## Enable password authentication for a single app

1. Go to **Settings > Applications**.
2. Select **Configure** on the relevant application tile.
3. Select **Authentication** in the menu.
4. Switch on the password options you want.
5. Select **Save**.
