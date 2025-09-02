

If you want your team members to sign in to the Kinde dashboard using an enterprise connection (such as SAML) instead of via our default sign up flow, you can contact us to request it. You must be on a Kinde Scale or Enterprise plan to request this.

Email your business name and email ID to support@kinde.com and provide the following from your Identity Provider (IdP):
- Entity ID
- IdP metadata URL
- Email key attribute
- First name key attribute
- Last name key attribute
- Home realm domains

Once we have these, we can set up the connection and send you an ACS url (also known as a **reply url**), for example: `https://app.kinde.com/login/saml/callback`, to complete the setup with your IdP.
