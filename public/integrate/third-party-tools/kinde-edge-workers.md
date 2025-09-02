
Kinde works with edge worker services and providers. We have tested the following:

- [Nuxt on Vercel](https://vercel.com/docs/frameworks/nuxt#edge-functions)
- [Next.js Edge Runtime](https://nextjs.org/docs/pages/api-reference/edge)
- [Deno Deploy](https://deno.com/deploy)
- [Cloudflare Workers](https://workers.cloudflare.com/)

You will need to follow the edge worker service instructions linked above, to get things running. Here’s an example of how we set up Cloudflare Workers.

## Example Cloudflare Workers integration

<Aside>

With server-side SDKs, you'll need to handle JWT implementation (generate & validate JWT tokens) without relying on external libraries, so it is suitable to deploy within the Cloudflare environment. [Here’s some docs to help](https://github.com/tsndr/cloudflare-worker-jwt).

</Aside>

1. Set up a Cloudflare account.
2. Install Wrangler. This is Cloudflare’s CLI.

   ```bash
   brew install wrangler
   ```

3. Run the Wrangler login to authenticate into your Cloudflare account:

   ```bash
   wrangler login
   ```

4. Create a repository to install dependencies using the below command. During this process, answer any questions best suited to your app:

   ```bash
   wrangler init
   ```

5. Combine the folder created for Cloudflare + kinde sdk/starter kit.
   1. Sort out any conflicts in the code (including your package.json / package-lock.json files), such as conflicting scripts, commands, dependencies, etc.
   2. Merge into the one file.
6. Install Kinde dependencies if required. Here’s an example for React:

   ```bash
   npm install @kinde-oss/kinde-auth-react
   ```

7. Deploy your project. We suggest you deploy to your local environment for testing.

   ```bash
   npm run pages\:deploy
   ```

   You’ll get a link to see the changes.
