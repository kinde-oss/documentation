export const tokenUtilsDocumentation = {
  getDecodedToken: {
    description: `You can decode and inspect tokens using the \`getDecodedToken\` utility function. This allows you to access the decoded contents of access tokens or ID tokens.`,
    signature: `async function getDecodedToken<T = JWTDecoded>(
  tokenType: "accessToken" | "idToken" = StorageKeys.accessToken,
): Promise<(T & JWTDecoded) | null>`,
    examples: [
      {
        description: "Get the decoded access token",
        code: `const decodedAccessToken = await getDecodedToken("accessToken");`
      },
      {
        description: "Get the decoded ID token", 
        code: `const decodedIdToken = await getDecodedToken("idToken");`
      },
      {
        description: "Adding custom claims to the decoded token",
        code: `const decodedAccessTokenWithCustomClaims = await getDecodedToken<{
  customClaim: string;
}>("accessToken");`
      }
    ]
  }
};
