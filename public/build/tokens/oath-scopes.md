
In Kinde, OAuth 2.0 scopes are used to request access to the protected information we store on behalf of your users. The OAuth protocol helps ensure only authorized access to this information.

## Kinde-supported OAuth scopes

The following scopes can be requested from Kinde.

`openid` - requests an ID token which contains information about the user

`email` - requests a user's email

`profile` - requests profile details as part of ID token, e.g. name, family name, given name, picture (avatar)

`offline` - request to act on behalf of the user if they're offline

## OAuth flows

How you request scopes depends on your tech framework and the OAuth 2.0 flow you’re using for your application type. You can use the following flows to request scopes in Kinde.

### Authorization Code flow

`authorization_code`

Recommended for regular web applications rendered on the server.

### Authorization Code flow with Proof Key for Code Exchange (PKCE)

`authorization_code_flow_pkce`

Kinde supports the PKCE extension, in which case the `code_challenge` and `code_challenge_method` parameters are also required. This is recommended for mobile apps and single page applications (SPAs).

### Implicit flow (not supported)

Before PKCE (see above) this was the method used by applications that were unable to store secrets securely. This flow has security implications and Kinde does not support it for this reason.

## Guidance on requesting scopes

Our SDK documents contain guidance on how to connect and make requests in your chosen framework or language. See [all our SDKs](/developer-tools/about/our-sdks/).

You can also access our [starter kits on GitHub](https://github.com/kinde-starter-kits) and our [Kinde Management API library](/kinde-apis/management/).
