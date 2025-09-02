
If your business model supports multi-tenancy or multiple user groups and you use [organizations](/build/organizations/multi-tenancy-using-organizations/) in Kinde, you can apply brand overrides to modify the pages in each organization.

This means that when a user signs up or signs in to an organization, they have the brand experience associated with that organization, through page logo and colours.

You can change the background, button, and text colours, as well as the favicon and logo for:

- Sign up and sign in pages
- Request access and subscription pages
- Emails

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/c5a7fcf3-205b-4cf1-f199-d9da7aa11000/public"
  alt="Custom sign in screens in Kinde"
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

## To add or change a logo for an organization

Logos must be under 1MB, and they are resized to have a maximum width or height of 120 pixels based on the aspect ratio. SVG works best as it displays well on any screen, but PNG and other formats are accepted.

1. In Kinde, go to **Organizations**.
2. In the list, select the organization you want to view. The organization **Details** page opens.
3. Select **Brand** in the left menu. The **Brand** page for the organization opens.
4. Scroll to the **Logo** section:
   1. To remove an existing logo, select the trashcan icon.
   2. To add a new or replace the logo, select **Upload image**.
5. Select **Preview** to see what your changes look like.
6. Select **Back** to exit the preview.
7. Select **Save** to apply the changes.
8. Test the change in your test or production environments.

<Aside title="Logo fallback behavior">

If an organization logo is not available, you can set fallback behavior to show the org name or the global business logo instead. See [set global brand](/design/brand/global-brand-defaults/).

</Aside>

## To add a logo via the Kinde Management API

Use this endpoint `POST {{domain}}/api/v1/organizations/{org_code}/logos/light`

For different logo variations, adjust the type path parameter (e.g., `light`, `dark`).

In the Header, set a boundary value, e.g. `content-type: multipart/form-data; boundary="value"`

Use `form-data` in the body to upload a valid PNG, JPEG, GIF, SVG, AVIF or WEBP image smaller than 1MB.

You can also delete logos via the API. [See the API docs](https://docs.kinde.com/kinde-apis/management/#tag/organizations/post/api/v1/organizations/{org_code}/logos/{type}).

## To add or change a favicon for an organization

Favicons are the tiny image shown on the tab of a browser. Image files must be a multiple of 48px square (e.g. 48x48, 96x96).

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/310d10e2-ab73-4aec-9872-7352aca57200/public"
  alt=""
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

1. In Kinde, go to **Organizations**.
2. In the list, select the organization you want to view. The organization **Details** page opens.
3. Select **Brand** in the left menu. The **Brand** page for the organization opens.
4. In the **Favicon** section, select **Upload image** to add or replace a favicon.
   1. Upload an **SVG** that will work in most browsers.
   2. Add a **Fallback** image in PNG for other browsers.
5. To preview a favicon, you’ll need to save it and check in your test or live environment.
6. To remove a favicon, select the trashcan icon near the image.
7. Select **Save** to apply the changes.

## Add an avatar for an organization

If your organizations manage their own profile or payment details via a [Kinde self-serve portal](/build/set-up-options/self-serve-portal-for-orgs/), you can upload an avatar to personalize the experience for organization members. An avatar is usually a simple logo.

Avatars must be in SVG format, and be smaller than 5kb. They appears as a 36px square in the interface. 

1. In Kinde, open the organization details and go to **Brand** in the menu.
2. In the **Avatar** section, select **Upload image**. 
3. Select **Save**.

## Set a light or dark theme

1. In Kinde, go to **Organizations**.
2. In the list, select the organization you want to view. The organization **Details** page opens.
3. Select **Brand** in the left menu.
4. Set the **Theme**: **Light**, **Dark**, or **User preference**. If you select user preference, make sure you choose a brand color scheme for both experiences. See below.
5. Select **Save**.

## Set brand colors for an organization

1. In Kinde, go to **Organizations**.
2. In the list, select the organization you want to view. The organization **Details** page opens.
3. Select **Brand** in the left menu. The **Brand** page for the organization opens.
4. Change the following elements to appear how you want: background, buttons, text color, link color, and button border radius.
5. Select **Preview** to see what your changes look like.
6. Select **Save** to apply the changes.

## Reset organization brand to match global styles

If you want to revert to global styles for an organization, it is easy to reset.

1. In Kinde, go to **Organizations**.
2. In the list, select the organization you want to view. The organization **Details** page opens.
3. Select **Brand** in the left menu. The **Brand** page for the organization opens.
4. In the bottom section called **Admin actions**, select **Reset to default**.
5. Select **Save**. This removes logo, color schemes, etc.
