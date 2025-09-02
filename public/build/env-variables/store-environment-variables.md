

Environment variables are key-value pairs that enable access to applications across different environments and systems. 

Once you can bring your code into Kinde via workflows, it’s important to be able to reference environment variables using a key, instead of hardcoding these values into your code.

Kinde allows you to create and store sensitive (secret) and non-sensitive key-value pairs.

## Store variables for each environment

You need to set environment variables separately, in each of your Kinde environments. You can’t share keys across development, testing, staging, and production, etc.

## Sensitive and non-sensitive environment variables

The environment variables you store in Kinde can be sensitive or non-sensitive. 

- **Sensitive environment variables** contain confidential data (e.g., passwords, API keys, credentials) that must be handled with care to avoid security risks and data breaches. When you mark an existing environment variable as sensitive, Kinde converts it to a non-readable format and the value can no longer be read by you or your team. It can only be read by Kinde workflows at runtime. The value will also be redacted in any logs.
- **Non-sensitive environment variables** handle non-confidential settings (e.g., language, application name, etc.) that don’t pose a risk if exposed.

## Examples of environment variables

| Variable Name | Type | Description | Example Value |
| --- | --- | --- | --- |
| API_KEY | Sensitive | Authentication key for external services | `********` |
| CLIENT_SECRET | Sensitive | OAuth client secret | `********` |
| APP_NAME | Non-sensitive | Application identifier | `my-kinde-app` |
| LOG_LEVEL | Non-sensitive | Application logging configuration | `debug` |
