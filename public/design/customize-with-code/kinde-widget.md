
The Kinde widget is a core element in Kinde page design. The components that make up the widget have been specifically designed to be easily overridden by your own CSS so you can give it the look and feel of your brand whilst keeping best in class security.

The widget refers to a specific form component that lives on the page, that consists of fields, labels, cards, buttons, text strings with URLs, and the 'Built with Kinde' logo.

Most styles can be switched out using our suite of [CSS custom properties](/design/customize-with-code/styling-with-css/) but for more complex customizations, we have provided [style hooks](/design/customize-with-code/style-with-style-hooks/) that you can use to completely replace everything.

Before designing the elements of the widget and page, fully set up authentication and user access flow, as these impact what is shown in the widget.

## Change what appears in the widget

### Settings for all widgets

- [Remove Kinde branding](/design/brand/remove-kinde-branding/) - available only on paid plans

### Settings for the sign in flow

- [Auth options](/authenticate/authentication-methods/set-up-user-authentication/) (org or application level configuration)
- Create account link - hidden if registrations are disabled

### Settings for the register flow

- [Auth options](/authenticate/authentication-methods/set-up-user-authentication/) (org or application level configuration)
- [Ask first name / last name](/authenticate/custom-configurations/authentication-experience/)
- [Show marketing widget](/authenticate/custom-configurations/authentication-experience/)
- [Show “already have account” link](/authenticate/custom-configurations/authentication-experience/)
- [Privacy / terms of use links](/manage-users/access-control/accept-policies-signup/)

### Settings for the MFA method

- [MFA options](/authenticate/multi-factor-auth/enable-multi-factor-authentication/) (org or application level configuration)

### Settings for errors

Follow [this procedure](/design/brand/link-to-homepage/) to include ‘escape hatch’ URLs for errors during the auth flow.
