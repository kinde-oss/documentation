
[Shopify Multipass](https://shopify.dev/docs/api/multipass) lets you seamlessly log your users from your application to Shopify, passing over related metadata about your user via a token.

## What you need

- A Kinde account, this will work on all Kinde plans.
- [Shopify Plus plan](https://www.shopify.com/au/pricing/) and [Multipass enabled.](https://shopify.dev/docs/api/multipass/)

## Configure Multipass in your project

The following example uses [Next.js](https://nextjs.org/), however this can also be configured in other languages and frameworks.

### Add new environment variables

Add Shopify and Multipass settings to your .env file.

```shell title=".env
SHOPIFY_MULTIPASS_SECRET = "[Your Mulitpass secret]";
SHOPIFY_STORE_URL = "[yourshopify].myshopify.com";
```

### Set up API endpoint

Create an endpoint file, e.g. `/api/multipass` that contains the following. Make sure to replace the generic information with your specific domain and secret information.

```tsx
import {NextResponse} from "next/server";
import {jwtDecoder, type JWTDecoded} from "@kinde/jwt-decoder";
import {cookies} from "next/headers";
import {Multipass} from "multipass-js";

export async function GET() {
  const decodedToken = jwtDecoder<JWTDecoded & {email: string}>(cookies().get("id_token")?.value);

  if (decodedToken) {
    const multipass = new Multipass(process.env.SHOPIFY_MULTIPASS_SECRET as string);

    const customerData = {
      // Required
      email: decodedToken?.email,
      created_at: decodedToken?.iat
      // add additional fields here
    };

    const url = multipass
      .withCustomerData(customerData)
      .withDomain(process.env.SHOPIFY_STORE_URL as string)
      .url();

    return NextResponse.redirect(url, 302);
  } else {
    const params = new URLSearchParams();
    params.append("post_login_redirect_url", `${process.env.KINDE_SITE_URL}/api/multipass`);
    return NextResponse.redirect(
      `${process.env.KINDE_SITE_URL}/api/auth/login?${params.toString()}`,
      302
    );
  }
}
```

Shopify Multipass is now configured with Kinde.

When you redirect the user to the endpoint `/api/multipass`, this will generate the Multipass token and redirect the user logged in to your Shopify site.
