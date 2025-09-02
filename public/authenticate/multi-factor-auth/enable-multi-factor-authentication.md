
Add security to the authentication process by enabling multi-factor authentication (MFA). MFA means users sign in using at least two authentication factors, for example, password _plus_ SMS code.

You can make MFA mandatory for users, or optional. Kinde supports the following secondary factors.

- **Email** - users are sent a one-time-password (OTP) via email.
- **SMS** - users receive a one-time-password (OTP) via SMS.
- **Authenticator app** - users receive a verification code via an authentication app.

We recommend against enabling a secondary factor that is the same as the primary auth method.

## **Set up MFA**

When you set up MFA using this procedure, it will apply to all users in the environment. If you want, you can [enforce MFA for individual organizations](/authenticate/multi-factor-auth/mfa-per-org/), so it only affects users in that organization.

1. In Kinde, go to **Settings > Environment >** **Multi-factor auth**.
2. To make MFA mandatory, in the **Require multi-factor authentication** section, select **Yes**. Users will be required to set up MFA when they first sign up or next sign in.
3. To make MFA optional, in the **Require multi-factor authentication** section, select **Optional**. Users will have the option to set up MFA when they first sign up or next sign in.
4. Select the additional authentication options that you want to be available to your users. Such as an authenticator app, email, or SMS.
5. Select **Save**. Users will now be directed to use multi-factor authentication when they sign in.
