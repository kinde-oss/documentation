
These instructions assume you already have a Kinde account. You can [register for free here](https://app.kinde.com/register) (no credit card required).

This guide details how to protect your GraphQL endpoints, when running on Node.js.

It assumes you already have a front end connected to Kinde which is sending a Kinde issued bearer token to your API for verification.

If you don’t yet have a front end setup, please set this up first following the relevant guide:

[React](/developer-tools/sdks/frontend/react-sdk/)

[Next.js](/developer-tools/sdks/backend/nextjs-sdk/)

[VanillaJS](/developer-tools/sdks/frontend/javascript-sdk/)

## **Apollo Server**

You can use our Node.js SDK to secure your endpoints and check that the user is authorized to access them.

## **Configure Apollo**

### **Add Kinde Node as a dependency**

<PackageManagers pkg="@kinde-oss/kinde-node" />

### **Environments**

If you would like to use our Environments feature as part of your development process. You will need to create them first within your Kinde account, see the guide here. In this case you would use the Environment subdomain in the code block above.

### **Integrate with your app**

Import the library as you would any other Node package - we recommend you do this in you `app.js` or `index.js` file depending on your structure.

```jsx
const kindeNode = require("kinde-node");
```

### **Initialize**

In the same file after any other imports initialize the library by entering your Kinde domain. This grabs the verification keys for your app.

```jsx
let authorize;

(async () => {
  authorize = await kindeNode(YOUR_KINDE_DOMAIN);
})();
```

### **Protect!**

The Apollo docs provide a few ways [for securing your APIs](https://www.apollographql.com/docs/apollo-server/security/authentication/). We will use the approach of adding the user object to the context.

```jsx
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    // auth check on every request
    const user = new Promise((resolve, reject) => {
      authorize(req, (err, user) => {
        if (err) {
          return reject(err);
        }
        resolve(user);
      });
    });

    return {
      user
    };
  }
});
```

It’s pretty common that a Graph will have a mix of public and private fields.

Because we’ve added the user to context we can access this in the individual field resolvers and decide what to return.

As an example, this resolver is only accessible with a valid user:

```jsx
users: (parent, args, context) => {
  // In this case, we'll pretend there is no data when
  // we're not logged in. Another option would be to
  // throw an error

  if (!context.user) return null;
  return ["bob", "jake"];
};
```

If a user is not authorized you can make use of the built in Apollo helper `AuthenticationError` to return a suitable response.

### **Apollo client - with React**

Once you have [integrated Kinde with your React application](/developer-tools/sdks/frontend/react-sdk/) using the Kinde React SDK you can enhance it to support the Apollo client.

### **Integrate with your app**

We recommend creating a specific component in your app to handle the Apollo / Kinde integration:

```jsx
import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const KindeApolloProvider = ({children}) => {
  const {getToken} = useKindeAuth();

  const httpLink = createHttpLink({
    uri: [YOUR_GRAPHQL_URI_HERE]
  });

  const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("kinde_token");
    const parsedToken = token ? JSON.parse(token) : {};

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${parsedToken.access_token}` : ""
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default KindeApolloProvider;
```

Then you can use it in your app as follows.

```jsx
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
const App = () => (
  <KindeProvider domain="[YOUR_KINDE_DOMAIN]" redirectUri={window.location.origin}>
    <KindeApolloProvider>
      <Routes />
    </KindeApolloProvider>
  </KindeProvider>
);
```

This will ensure every API call to your Apollo server contains the Bearer token provided by Kinde.

If you need any assistance with getting Kinde connected reach out to us at [support@kinde.com](mailto:support@kinde.com).
