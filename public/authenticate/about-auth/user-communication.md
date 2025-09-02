
Kinde only sends emails or texts to users as part of the authentication experience, for example to send one-time passwords or to verify user identity for self-sign-up.

We’ve kept communication features to a bare minimum for authentication, so that we do not send unwanted or unsolicited communication to users, on behalf of your business.

## Emails sent from Kinde

The following emails are sent from no-reply@kinde.com.

- Invitations to join your business on Kinde when you manually add a new team member
- Export data warning emails to ensure only authorized people can get user data out of your business.
- (Unless you enter custom email sender details) verification and authentication emails for sign-up, sign-in, multi-factor authentication, and password reset. To configure authentication emails to come from your own email provider, see [Customize email sender](/get-started/connect/customize-email-sender/).

## Kinde does not send emails in these situations

- Invitations to users if you add them via API
- Invitations to users if you add them in bulk via import
- Emails to team members about your Kinde subscription or admin activity

If you want certain user events in Kinde to trigger an email, you can set this up with [webhooks](/integrate/webhooks/add-manage-webhooks/).

## Communication when users are added in bulk

Our features for adding users in bulk (such as via API or import) are designed with a smooth migration experience in mind.

Rather than send confusing emails to existing user bases, we enable a silent transfer of the authentication experience, between your previous supplier and Kinde. That’s why we don’t send emails when users are added to Kinde this way.

<Aside>

Use [webhooks](/integrate/webhooks/add-manage-webhooks/) to prompt actions triggered by Kinde events

</Aside>

## SMS communication for phone authentication

Kinde supports [phone authentication](/authenticate/authentication-methods/phone-authentication/) as a primary and secondary authentication factor.

To use phone authentication, you need to have a [Twilio](https://www.twilio.com/en-us) account and configure the account details in Kinde. Twilio is a third-party provider who offer bulk messaging services.

When a user authenticates via phone number, an SMS containing a one-time passcode is sent. The SMS is in a specific format that cannot be edited.

```text
123456 is your one-time code to sign in to [kinde business URL] #123456
```

Kinde does not communicate anything else to users via SMS.
