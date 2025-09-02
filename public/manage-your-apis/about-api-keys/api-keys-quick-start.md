
This guide will walk you through setting up API key management for your APIs using Kinde. You'll learn how to register your APIs, create API keys, and implement key verification in your application.

## Prerequisites

Before you following this guide, ensure you have:

- A Kinde account with admin access
- An API that you want to protect with API keys

## Step 1: Register your API

Before you can issue API keys, you need to register your API in Kinde:

1. Go to **Settings** > **APIs**.
2. Select **Add API**.
3. Enter an API name and Audience. The audience (aud) is a unique identifier for this API. Often a short code or the URL of the API is used.
4. Select **Save**.

You'll see an `API ID` for your new API. This ID is used when creating API keys.

## Step 2: Create an API key for a user or organization

You can enable your customers to create API keys via the self-service portal or via API, but for this guide we'll assume you are creating them on their behalf inside the Kinde admin area.

1. Open a user or organization record in Kinde.
2. Select **API keys** from the menu.
3. Click **Add API key**.
5. Configure the key:
   - **Name**: Give it a descriptive name (e.g., "Production Integration")
   - **API**: Select the API this key can access
   - **Scopes**: Choose specific scopes for the API
6. Select **Save**

Securely issue this API key to your customer.

## Step 3: Test calling your API and verify the API key

1. Call your API endpoint with the API key as the `Authorization` header.
2. Extract the API key from the `Authorization` header.
3. Call the Kinde Management API to verify the API key (you will need an [M2M token](/developer-tools/kinde-api/connect-to-kinde-api/) for this).

```javascript
// Extract API key from request
const apiKey = req.headers.authorization?.replace("Bearer ", "");


// Verify with Kinde (requires M2M access token)
// Obtain an M2M token as per /developer-tools/kinde-api/connect-to-kinde-api/
const verificationResult = await verifyApiKey(apiKey, m2mAccessToken);

if (verificationResult.is_valid) {
  // Key is valid, check scopes
  if (verificationResult.scopes.includes("read:users")) {
    // Proceed with request
    res.json({data: "Your data here"});
  } else {
    res.status(403).json({error: "Insufficient scope"});
  }
} else {
  res.status(401).json({error: "Invalid API key"});
}

async function verifyApiKey(apiKey, m2mAccessToken) {
  const response = await fetch("https://your-domain.kinde.com/api/v1/api_keys/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${m2mAccessToken}`
    },
    body: JSON.stringify({
      api_key: apiKey
    })
  });

  return response.json();
}
```

The response will look like this:

```json
{
  "code": "API_KEY_VERIFIED",
  "message": "API key verified",
  "is_valid": true,
  "key_id": "api_key_0195ac80a14e8d71f42b98e75d3c61ad",
  "status": "active",
  "scopes": ["read:users", "write:users"],
  "org_code": "org_1234567890",
  "user_id": "kp_1234567890",
  "last_verified_on": "2024-11-18T13:32:03+11",
  "verification_count": 42
}
```

That's it! You have verified the API key and can proceed with the request.
