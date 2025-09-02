
As you build your business on Kinde and configure connections and features, you will eventually want to set your production environment to be ‘live’. This indicates the status of the environment to anyone making changes. 

Follow the checklist below before you switch your environment to show as 'Live'.

<Aside title="The live button is not actually live">

The 'Live' switch is for indicating the environment is live. It does not actually change or do anything in relation to your app. Your app can be live on Kinde without the switch being on.

</Aside>

## Go-live checklist

Before you go live, make sure you’ve done the following:

- (Required) Enter a `Client ID` and `Client secret` in all your [third-party authentication](/authenticate/authentication-methods/set-up-user-authentication/) connections (such as social connections or enterprise connections). If you left these fields blank at setup, Kinde’s credentials are used and rate limits will apply.
- (Required) Add Twilio details if you have [phone or SMS authentication](/authenticate/authentication-methods/phone-authentication/) switched on.
- Add a [development environment](/build/environments/environments/) to continue building your product on Kinde without affecting the live production instance.
- Add [policies and terms](/manage-your-account/business-information/policies-terms/) so that users can access and agree to these on sign up.
- Configure [custom email details](/get-started/connect/customize-email-sender/) so that authentication emails sent to your users come from your business, and not Kinde.
- Connect [your own domain](/build/domains/pointing-your-domain/) and customize the [sign in screens](/design/brand/global-brand-defaults/) to provide a seamless and branded experience for users.
- Set up [multi-factor authentication](/authenticate/multi-factor-auth/enable-multi-factor-authentication/) to add extra layers of security for user sign in.
- Connect [Google analytics](/manage-users/view-activity/track-user-sign-in-with-google-analytics/) to track sign ups through Kinde.
- Set up [default roles](/manage-users/roles-and-permissions/default-user-roles/) for assigning to new users when they sign up.

## Switch an environment to appear live

When you are ready, turn the 'Live' indicator switch on.

1. Open your production environment.
2. Go to **Settings > Environment > Details.**
3. Scroll to the **Environment status** section and toggle the switch to **Live**. 
4. Select **Save**. If there are any issues, an error message will appear. Where there are no errors, your Kinde environment should now show as 'Live.

![Status of production environment in Kinde](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/ac1aa617-bcb6-4a7f-02d3-b51aa7bcc600/public)
