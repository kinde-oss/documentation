
If you don’t use Postman or other similar tools to test your connections, here’s an example of how to call the [Kinde Management API](/kinde-apis/management/) in NodeJS.

1. [Add a machine to machine application](/developer-tools/kinde-api/connect-to-kinde-api/) for API access, and copy the **App keys - Domain, Client ID** and **Client secret** from the application.
2. Call the Kinde token endpoint using the app key details you copied at step 1. Here’s a code sample in NodeJS. This should return an access token.

   ```jsx
   const getAccessToken = async () => {
     try {
       const searchParams = {
         grant_type: "client_credentials",
         client_id: "<your_client_id>",
         client_secret: "<your_secret_id>",
         audience: "https://<your_subdomain>.kinde.com/api"
       };

       const res = await fetch("https://<your_subdomain>.kinde.com/oauth2/token", {
         method: "POST",
         headers: {
           "Content-Type": "application/x-www-form-urlencoded"
         },
         body: new URLSearchParams(searchParams)
       });
       const token = await res.json();
       console.log({token});
     } catch (err) {
       console.error(err);
     }
   };
   ```

3. Use the access token to call the Kinde management API. Here’s an example of calling the `users` endpoint in NodeJS:

   ```jsx
   const getUsers = async () => {
     const accessToken = await getAccessToken();

     const headers = {
       Accept: "application/json",
       Authorization: `Bearer ${accessToken}`
     };
     try {
       const res = await fetch("https://<your_subdomain>.kinde.com/api/v1/users", {
         method: "GET",
         headers: headers
       });
       const data = await res.json();
       console.log({data});
     } catch (err) {
       console.error(err);
     }
   };
   ```

4. Dive into our [API docs](/kinde-apis/management/) and starting connecting your product to ours.
