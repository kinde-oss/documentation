
Kinde makes authentication easy by providing a range of methods to choose from.

Allow your users to sign up or sign in:

- [by invitation only](/authenticate/custom-configurations/disable-sign-up/)
- using self-sign-up (default)
- [with a password](/authenticate/authentication-methods/password-authentication/)
- [passwordless](/authenticate/authentication-methods/passwordless-authentication/) (Applied by default in all new Kinde businesses)
- with a [phone number](/authenticate/authentication-methods/phone-authentication/)
- with a range of [social sign in options](/authenticate/social-sign-in/add-social-sign-in/), like Google, Apple, Slack, and more
- via [enterprise connections](/authenticate/enterprise-connections/about-enterprise-connections/) such as Cloudflare or SAML

Authentication can be set per environment, and can be changed for different applications, e.g. your production web app and mobile app can have different authentication requirements.

You can start simple with email self-sign-up, and then add more options as needed, such as social sign in and multi-factor authentication.

## Multi-domain authentication

Kinde supports: 

- authenticated sessions across domains and subdomains
- users switching between domains and subdomains

Kinde supports multi-domain authentication where the primary domain is the same, but there are different subdomains. For example, `website.yourdomain.com`, `app.yourdomain.com`, `docs.yourdomain.com`. This is similar to how Google manages authentication for `calendar.google.com`, `mail.google.com`, etc.

Once a user is signed in to one domain or subdomain, they can switch to another and remain authenticated. To do this, you need to initiate the flow with `prompt=none` as part of the auth URL. This checks for a session on Kinde invisibly. If it exists the user experiences a seamless session between sites, and if a session doesn’t exist, they are prompted to reauthenticate.

See also, [Manage authentication across applications](/authenticate/manage-authentication/user-auth-applications/).

## Rate limiting and identity management issues if third party keys not entered

When setting up third party authentication, such as [social sign in](/authenticate/social-sign-in/add-social-sign-in/), ensure you have added the third party app, and included the Client ID and Client Secret (Keys) to the configuration screens in your live environment. 

If you don’t use your own app's keys:
- Kinde will fall back to using our own credentials as a proxy, which will cause rate limiting
- For Apple SSO specifically, if you don't use your own app from the start, users will be permanently associated with the wrong app and cannot be transferred later

Using the Kinde app is okay for local development environments, but not for live production environments.

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/d7bdcd1a-1800-4e8f-780f-ea7d56c37400/public"
  alt=""
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

## Get started with authentication

Before setting up authentication, think about what your audience preferences are and how you want to manage access in the short and longer term. Enabling social sign in GitHub, for example, might be expected if your audience are software developers.

Here’s a common set of tasks for getting started.

1. [Set up user authentication](/authenticate/authentication-methods/set-up-user-authentication/)
2. [Add social sign in](/authenticate/social-sign-in/add-social-sign-in/)
3. [Enable multi-factor authentication](/authenticate/multi-factor-auth/enable-multi-factor-authentication/)
