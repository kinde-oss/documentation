
<Aside type="upgrade">

You can only preview custom code if you are on a Kinde Plus or Scale plan.

</Aside>

Unlike changes you make in the Kinde UI that impact page layouts and content, your custom designs can’t be viewed in a Kinde-generated preview.

Instead, you can test designs using your real auth flow, using preview credentials.

## Preview custom code

1. In your application code, pass the additional auth url parameter `pages_mode=preview`. When the auth flow is initiated a password screen will appear which is required to view the preview.
2. Enter your preview password. Go to **Design > Custom code > Preview**.
3. Copy the **Password** and use it in the authentication request.

The preview will show the latest code deployment version.
