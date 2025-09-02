
These instructions assume you already have a Kinde account. You can [register for free here](https://app.kinde.com/register) (no credit card required).

This guide details how to protect your GraphQL endpoints, when running on ExpressJS.

It assumes you already have a front end connected to Kinde which is sending a Kinde issued bearer token to your API for verification.

If you don’t yet have a front end setup, please set this up first following the relevant guide:

[React](/developer-tools/sdks/frontend/react-sdk/)

[Next.js](/developer-tools/sdks/backend/nextjs-sdk/)

[VanillaJS](/developer-tools/sdks/frontend/javascript-sdk/)

## **Configure Express**

### **Add Kinde Node as a dependency**

<PackageManagers pkg="@kinde-oss/kinde-node" />

### **Integrate with your app**

Import as you would any other Node package - we recommend you do this in you `app.js` or `index.js` file depending on your structure.

```jsx
const kindeNode = require("@kinde-oss/kinde-node");
```

### **Initialize**

In the same file after any other imports initialize the library by entering your Kinde domain. This grabs the verification keys for your app.

```jsx
let authenticate;

(async () => {
  authenticate = await kindeNode(YOUR_KINDE_DOMAIN);
})();
```

### **Protect!**

We recommend you create a context for holding contextual data and use our `authenticate` function to verify if the Bearer token sent with the api call matches the keys on your domain and prevent access to unauthorized users.

```jsx
const context = (req) => {
  const user = new Promise((resolve, reject) => {
    authenticate(req, (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user);
    });
  });

  return {
    user
  };
};
```

### **Access**

It’s pretty common that a Graph will have a mix of public and private fields.

Because we’ve added the user to context we can access this in the individual field resolvers and decide what to return.

As an example, this resolver is only accessible with a valid user:

```jsx
users: (args, context) => {
  // In this case, we’ll pretend there is no data when
  // we’re not logged in. Another option would be to
  // throw an error

  if (!context.user) return null;
  return ["bob", "jake"];
};
```

If you need any assistance with getting Kinde connected reach out to us at [support@kinde.com](mailto:support@kinde.com).
