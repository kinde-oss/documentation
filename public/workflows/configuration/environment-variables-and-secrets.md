
You can set up environment variables and secrets in Kinde to use in your workflow code. This is useful for storing sensitive information, such as API keys or database credentials that you don't want to hard-code into your workflow files.

## Creating environment variables

You can create environment variables in the [Kinde admin area](/build/env-variables/add-manage-env-variables/) or via the [management API](https://docs.kinde.com/kinde-apis/management/#tag/environment-variables/post/api/v1/environment_variables).

## Using environment variables in your code

The `kinde.env` binding must be enabled in your workflow file to use environment variables.

If you are using the Kinde infrastructure library, it provides a helper method to access environment variables:

```js
import {getEnvironmentVariable} from "@kinde/infrastructure";
const myVar = getEnvironmentVariable("MY_VAR")?.value;
```

You can also use the `getEnvironmentVariable` method to access sensitive environment variables / secrets. Sensistive environment variables are only visible to the Kinde runtime and have their values redacted if they are logged.

If you are not using the Kinde infrastructure library, you can access environment variables directly using the low level API.

## process.env

Kinde is not a Node runtime so the `process` object is not available. Instead, you access environment variables using the methods described above.
