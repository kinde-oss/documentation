
Kinde's workflow runtime operates differently from Node.js. Workflows provide a secure, restricted JavaScript environment with access only to a pre-defined set of trusted packages.

While Kinde doesn't require a `package.json` file by default, you'll need one if you want to use third-party libraries whilst developing your workflow code.

## Set up package.json

To include third-party libraries in your workflow:

1. **Create a package.json file**
   Generate one using `npm init` or create it manually in your project directory.

2. **Add dependencies**
   List the required libraries in the `dependencies` section:

   ```json
   {"dependencies": {"@kinde/infrastructure": "^0.21.1", "react": "^4.17.21"}}
   ```

## Supported packages

Runtime dependencies must be part of the Kinde-supported library list. Unsupported libraries won't function in the Kinde workflow runtime and will cause an exception to be thrown.

## Lock package versions

By default, Kinde uses the latest version of imported packages. To lock specific versions:

- Enable the [npm integration](/workflows/configuration/kinde-json/) in your `kinde.json` file
- Ensure both `kinde.json` and `package.json` files are in the same directory
