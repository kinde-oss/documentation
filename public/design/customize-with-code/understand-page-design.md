
The 'page' is the whole user interface rendered by the browser, including everything that surrounds the Kinde widget. You can provide your own markup to influence the page design. There's also a handy placeholder so you can tell us where you want the widget rendered.

You define a page by default exporting a function from a `page.[ts/tsx/js/jsx]` file.

```jsx
"use server";

import React from "react";
import { renderToString } from "react-dom/server.browser";
import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeNonce,
  getKindeWidget,
  getKindeCSRF,
  getLogoUrl,
  getSVGFaviconUrl,
  setKindeDesignerCustomProperties,
  getKindeRegisterUrl
} from "@kinde/infrastructure";

const Layout = async ({request, context}) => {
  return (
    <html lang={request.locale.lang} dir={request.locale.isRtl ? "rtl" : "ltr"}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        <title>{context.widget.content.page_title}</title>

        <link rel="icon" href={getSVGFaviconUrl()} type="image/svg+xml" />
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
        <style nonce={getKindeNonce()}>
          {`:root {
          ${setKindeDesignerCustomProperties({
            baseBackgroundColor: "#fff",
            baseLinkColor: "#230078",
            buttonBorderRadius: "0.5rem",
            primaryButtonBackgroundColor: "#230078",
            primaryButtonColor: "#fff",
            inputBorderRadius: "0.5rem"
          })}}
          `}
        </style>
        <style nonce={getKindeNonce()}>
          {`
            :root {
                --kinde-base-color: rgb(12, 0, 32);
                --kinde-base-font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif;
            }

            [data-kinde-control-select-text]{
                background-color: rgb(250, 250, 251);
            }
            .c-container {
              padding: 1.5rem;
              display: grid;
              gap: 230px;
            }
            .c-widget {
                max-width: 400px;
                width: 100%;
                margin: 0px auto;
            }
            .c-footer {
              border-top: 1px solid rgba(12, 0, 32, 0.08);
              padding-block: 1.5rem;
              display: flex;
              justify-content: space-between;
            }
            .c-footer-links {
                display: flex;
                gap: 1.5rem;
            }
          `}
        </style>
      </head>
      <body>
        <div data-kinde-root="/admin" class="c-container">
          <header class="c-header">
            <img src={getLogoUrl()} alt={context.widget.content.logo_alt} />
          </header>
          <main>
            <div class="c-widget">
              <h1>{context.widget.content.heading}</h1>
              <p>{context.widget.content.description}</p>
              <div>{getKindeWidget()}</div>
            </div>
          </main>
          <footer class="c-footer">
            <p class="c-no-account-link">
              No account? <a href={getKindeRegisterUrl()}>Sign up for free</a>
            </p>
            <ul class="c-footer-links">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Get help</a>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default async function Page(event) {
  const page = await Layout({...event});
  return renderToString(page);
}
```

### Supported templating languages

Kinde uses server-rendered JavaScript to compose custom pages and has a range of templating options available:

- React
- Liquid
- JavaScript
- TypeScript

<Aside>

If you are using React for templating, note this code is rendered on the server. This means client side functions for example, `useEffect`, will not be available.

</Aside>

## Page structure in the Git directory

The code for your pages must live in a GitHub repository (other git providers to be supported later). Your directory structure in the repo is critical to Kinde being able to run your design code.

The directory structure for a Kinde custom code repo should be as follows:

```
myApp/
  ├── kindeSrc/
  │   └── environment/
  │       └── pages/
  │           └── (kinde)/
  │               └── (default)/
  │                   └── page.tsx
  ├── package.json
  └── kinde.json
```

## Kinde.json

The `kinde.json` file defines the config for all custom code in Kinde, including workflows and custom pages. A typical config file will look as follows:

```json
{
  "rootDir": "kindeSrc", -- the directory where Kinde should look for your code
  "version": "2024-12-09" -- the last breaking change
}
```

`rootDir` - the directory where Kinde will look for your custom code. Defaults to `kindeSrc` so that you can include Kinde code alongside existing projects. Change this if you wish the code to live in another directory.

`version` - based on the date when the API version was released. Any breaking changes will be released in a new API version.

## Which pages can I customize?

All Kinde hosted pages can be customized and use url route mapping to determine which template to use.

If a specific mapped route does not exist, a special route called `(default)` will be rendered. Set up the `(default)` page to ensure all your pages follow this design unless you have overridden them with custom code.

<Aside type="warning">

Once you start customizing pages, it's on you not to break them. We recommend always applying custom code to pages in a non-prod environment first.

</Aside>

### Common pages

These are the most frequently used or fallback pages.

- `(default)` – Fallback template used when a specific page is not found.
- `(register)` – The sign-up page.
- `(login)` – The sign-in page.
- `(index)` – Landing page when visiting the root domain (e.g. `https://<yourdomain>.kinde.com`).

### Authentication

Pages involved in initiating authentication flows.

- `(register)` – The sign-up page.
- `(login)` – The sign-in page.
- `(sso_home_realm)` – Displayed when a user selects “Continue with SSO” to choose their identity provider.
- `(provide_email)` – Shown when using a social login provider that does not return an email address.
- `(clickwrap)` – Displays terms and conditions or agreements that must be accepted.

### Password flows

Used in password-based authentication and recovery.

- `(verify_password)` – Shown during sign-in when using a password-based method.
- `(set_password)` – Shown during a password-based sign-up flow.
- `(reset_password_verify_email_otp)` – First step of the reset flow where the user verifies identity using an email OTP.
- `(reset_password)` – Password entry screen shown after verification during the reset flow.

### One-Time Passcode (OTP) verification

Used in sign-in and sign-up flows with OTP (email or phone).

- `(sign_in_use_email_otp)` – Sign in with a one-time email code.
- `(sign_up_use_email_otp)` – Sign up with a one-time email code.
- `(sign_in_sign_up_use_phone_otp)` – Sign in or sign up with a one-time phone code.

### Multi-Factor Authentication (MFA)

Shown after primary authentication when MFA is required or being set up.

- `(mfa_method_selection)` – User selects their preferred MFA method.
- `(mfa_authenticator_app)` – Setup screen for using an authenticator app.
- `(mfa_setup_email)` – Setup screen for email-based MFA.
- `(mfa_setup_phone)` – Setup screen for phone-based MFA.
- `(mfa_use_email_otp)` – Enter a one-time email code for MFA.
- `(mfa_use_phone_otp)` – Enter a one-time phone code for MFA.
- `(mfa_use_recovery_code)` – Enter a recovery code if unable to use other MFA methods.
- `(mfa_view_recovery_codes)` – View and save MFA recovery codes.

### Billing

Pages related to choosing a plan and making a payment.

- `(choose_plan)` – User selects a subscription plan.
- `(collect_payment_details)` – User enters billing information.
- `(subscription_success)` – Confirmation page shown after successful subscription.

### Early access

Pages for gated access to your product before full launch.

- `(request_access)` – Request early access to your product.
- `(request_access_success)` – Confirmation page after a request is submitted.

### Error pages

Shown when a user encounters an error state.

- `(account_locked)` – The user’s account has been locked.
- `(account_not_found)` – No account was found for the entered credentials.
- `(invalid_redirect_url)` – The redirect URL is invalid or not on the allowed list.
- `(error)` – Generic error screen.

If you want specific customization for a page not listed here, reach out and let us know.

## Set the page default export function

Your `page.[ext]` file should contain a default export. It doesn’t matter what this is called, but the general convention is to call it `Page`. This is provided a single `event` argument which is an object containing 2 keys `context` and `request`.

The `request` key contains information about the request to the page and includes the following sub-objects:

- `authUrlParams` contains useful info from authorization request url
  - `orgCode` - the requested organization code e.g `org_12345`
  - `state` - the state parameter in the auth url
  - `clientId` - the `client_id` query param from the auth url - this is the application ID
  - `redirectUri` - the `redirect_uri` query param from the auth url
- `locale` - localization data
  - `isRtl` - if the requested language should be rendered right to left
  - `lang` - the code for the requested language
- `route`
  - `context`- the requested widget `CX_m` e.g `register` | `choose_organization`
  - `flow` - whether the flow is a sign in or sign up flow e.g `register` | `login`
  - `path` - the path of the request `auth` | `account`| `\`

The top level `context` key object contains information about the page itself, like the page state and content.

- `domains` contains relevant domain info
  - `kindeDomain` your domain on Kinde e.g https://example.kinde.com
- `widget` contains data generated from the widget
  - `content` an object containing page content - translated and with placeholders replace
    - `pageTitle` the title of the page commonly displayed in the `<title>` tag for showing in the browser tab
    - `heading` the main heading for the page
    - `description` the page description
    - `logoAlt` the alt text for your company logo

## Page settings

Sometimes additional information needs to be passed to Kinde from your page. You can use the page settings object for this.

```js
export const pageSettings = {};
```

The main use case for this is when you want to make bindings available to your page, for example access to your Kinde environment variables.

```js
export const pageSettings = {
  bindings: {
    "kinde.env": {}
  }
};
```

This allows you to have fine grained control over what your pages can access.
