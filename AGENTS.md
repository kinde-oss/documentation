## Cloudflare Wrangler Usage

> **Read this before saying anything about Cloudflare setup.** On a machine that
> is already set up for this repo, Wrangler works and authentication is in place.
> Telling the user to log in or configure Cloudflare by hand — without first
> running the checks described here — is wrong, and it is the most common mistake
> agents make in this codebase.

**In local and agent sessions, the only Cloudflare write this repo uses is
uploading documentation images to Cloudflare Images, then linking them from MDX.**
Wrangler is used to check the account; the upload itself goes through the Cloudflare
Images API. Neither is how the docs site is developed or deployed. Do not use
Wrangler to create Workers, deploy Pages, mutate D1/KV/Queues, or “set up
Cloudflare” for the Astro app. The one exception is the CI-only Unlighthouse
publish described below.

### What is already true

| Fact | Detail |
|------|--------|
| **This is an Astro docs site** | Local app commands are `npm run dev` / `npm start` (`astro dev`), `npm run build`, and `npm run preview` (`astro preview`). None of these are Wrangler. |
| **There is no `wrangler.toml` / `wrangler.jsonc`** | That is deliberate. This repo is not a Worker or Pages project. Do **not** add a Wrangler config, `--name`, or `account_id` to “fix” Wrangler. |
| **Wrangler is not a package dependency** | Run it as `npx wrangler` from the repo root. `npx` uses the Wrangler already on your `PATH`, or fetches it if there isn't one. Do **not** add it to `package.json` or ask the user to install it globally. |
| **Authentication is usually already in place** | On a configured machine, Wrangler authenticates through `CLOUDFLARE_API_TOKEN` from the direnv environment, or through an existing global Wrangler OAuth login. Check with `npx wrangler whoami` (step 1 below) **before** suggesting any login. The credentials can see more than one Cloudflare account; the **Kinde** account is the one that holds docs images. |
| **The account is scoped by `.envrc`** | This repo uses [direnv](https://direnv.net). A local `.envrc` (gitignored) exports `CLOUDFLARE_ACCOUNT_ID` so every Cloudflare command targets the **Kinde** account. The `CLOUDFLARE_API_TOKEN` needed for image uploads can live in `.envrc` or in `.envrc.local` (also gitignored). direnv does not load `.envrc.local` on its own, so `.envrc` must include `source_env_if_exists .envrc.local`. |
| **Docs images are Cloudflare Images** | Live pages link `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/<variant>`. Variants used in this repo are `public` and `socialsharingimage`. Do not commit large screenshots into git when an imagedelivery URL is the existing pattern. |

A minimal local `.envrc`:

```bash
export CLOUDFLARE_ACCOUNT_ID=<Kinde account ID>
source_env_if_exists .envrc.local   # optional: export CLOUDFLARE_API_TOKEN=... in here
```

**Why `.envrc` exists:** the credentials can see several Cloudflare accounts. With
more than one visible and no account pinned, Wrangler stops to ask which to use —
and in a non-interactive shell (CI, an agent, a script) it fails outright with
*"More than one account available but unable to select one in non-interactive
mode"*. `.envrc` removes the ambiguity. `.envrc` and `.envrc.local` are not
committed.

A GitHub Action (`.github/workflows/run-unlighthouse.yml`) uses
`cloudflare/wrangler-action` to publish Unlighthouse reports to the Pages project
`kinde-docs-unlighthouse`. That is CI-only. Do **not** run that deploy from a
local agent session.

### Workflow for agents

**0. Be in the repo.** Every Wrangler / Cloudflare command runs from the git
root of this repository (`git rev-parse --show-toplevel`). This repo has
no Wrangler config, so `wrangler deploy` / `wrangler dev` fail with:

```
✘ [ERROR] Required Worker name missing. Please specify the Worker name in your
  Wrangler configuration file, or pass it as an argument with `--name <worker-name>`
```

That means **you used a Worker command in a docs repo**, not that configuration
is broken. Do not answer it by adding `--name`, creating `wrangler.toml`, or
sending the user to the dashboard.

**1. Load the environment and check identity.** direnv is hooked into the user's
shell, so an interactive session here already has it when `.envrc` exists. A
tool-invoked shell may not — prefix with `direnv exec .`, which is correct either
way:

```bash
cd "$(git rev-parse --show-toplevel)" && direnv exec . npx wrangler whoami
```

If direnv says `.envrc is blocked`, the file was edited since it was approved. The
fix is `direnv allow`, run **by the user** — it approves executing a file holding
credentials, so surface it rather than running it yourself.

**2. Verify the environment loaded the Kinde account.** Print the loaded account ID
and check which variables are set, without printing the token:

```bash
direnv exec . sh -c 'echo "account: $CLOUDFLARE_ACCOUNT_ID"; echo "token set: ${CLOUDFLARE_API_TOKEN:+yes}"'
```

The account ID must be non-empty **and** must match the row named **Kinde** in the
`wrangler whoami` table from step 1. If it matches a different account (for
example a personal one), stop and tell the user — do not upload anything.

**3. If `.envrc` is missing or unallowed**, ask the user to add a local `.envrc`
that exports `CLOUDFLARE_ACCOUNT_ID` for the **Kinde** Cloudflare account (and
`direnv allow`). Do not pick a personal Cloudflare account. Do not treat this as
a dashboard / `wrangler login` task — it is local environment scoping.

### Use the existing package scripts

Prefer these over hand-rolled commands. There are **no** `wrangler` package
scripts and **no** `npm run deploy`.

| Script | What it runs | Use for |
|--------|--------------|---------|
| `npm run dev` / `npm start` | `astro dev` | Local docs site |
| `npm run build` | `astro build` | Production static build |
| `npm run preview` | `astro preview` | Preview the Astro build |

Do **not** invent `npm run deploy` or `npx wrangler pages deploy` for this site.

### Documentation images (the only local Cloudflare write path)

When a page needs a screenshot or figure:

1. Run steps 1 and 2 above: the environment is loaded and `CLOUDFLARE_ACCOUNT_ID`
   is the **Kinde** account.
2. Confirm `CLOUDFLARE_API_TOKEN` is set (step 2 prints `token set: yes`). The
   upload **requires** an API token with the **Cloudflare Images: Edit**
   permission; Wrangler's OAuth login does not cover the Images API. If the
   token is missing, **stop and tell the user** that the upload needs
   `CLOUDFLARE_API_TOKEN` in `.envrc` or `.envrc.local`. Do not attempt the upload
   without it.
3. Upload the file to **Cloudflare Images**. Wrangler has no `images` subcommand,
   so call the Images API with values from `direnv exec .`. Keep the single quotes
   so the variables expand inside the direnv environment and the token is never
   echoed:

   ```bash
   direnv exec . sh -c 'curl -sS -X POST \
     "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/images/v1" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -F file=@path/to/screenshot.png'
   ```

4. Take `result.id` from the response and link it:

   `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/public`

5. Put that URL in the MDX (`![alt text](https://imagedelivery.net/...)`). Use
   `socialsharingimage` only where existing pages already use that variant (for
   example OG `head` images).

Do not upload unrelated files, replace existing production images, or delete
images unless the user explicitly asked.

Read-only commands that are always safe:

```bash
direnv exec . npx wrangler whoami
```

### ⛔ Destructive commands — never run these

Deletion on Cloudflare is **irreversible**. The credentials this environment can
use hold `Edit` permission, and on Cloudflare `Edit` **includes delete**.

Never run any of the following, via CLI or dashboard, even if asked casually or as
"cleanup". Stop and ask the user instead:

| Command | Destroys |
|---|---|
| `wrangler delete` | A Worker, and every route bound to it |
| `wrangler pages project delete` | A Pages project (including Unlighthouse) |
| `wrangler d1 delete` | An entire D1 database |
| `wrangler r2 bucket delete` | An R2 bucket and everything in it |
| `wrangler kv namespace delete` | A KV namespace and all keys in it |
| `wrangler queues delete` | A queue and its pending messages |
| `wrangler secret delete` | A production secret (breaks runtime immediately) |

Do not delete Cloudflare Images objects, R2 objects, or the Unlighthouse Pages
project. If a resource genuinely needs removing, say so and let the user do it by
hand.

### When something actually fails

Diagnose in this order before escalating to the user:

1. Am I in the git root? Did I try a Worker/Pages deploy command? If yes, stop —
   image upload is the only Cloudflare write this repo uses.
2. Is `CLOUDFLARE_ACCOUNT_ID` set (step 2 above)? Empty means `.envrc` is missing
   or unallowed → local `.envrc` + `direnv allow`, not `wrangler login`.
3. `direnv exec . npx wrangler whoami` — reports the identity and every visible
   account. **Only** if this says *not logged in* is authentication genuinely the
   problem. Report that to the user and let them decide how to fix it. Do not
   run or recommend `wrangler login` yourself.
4. An image upload that fails with an authentication or permission error usually
   means `CLOUDFLARE_API_TOKEN` is missing or lacks **Cloudflare Images: Edit**.
   Report that to the user; do not print the token.
5. An empty `wrangler pages project list` does **not** mean auth is broken and
   does **not** mean you should create a Pages project for the docs site.

### Do not

- ❌ **Do not** tell the user to run `wrangler login` before you have run
  `npx wrangler whoami` (step 1) — on a configured machine they are already
  authenticated.
- ❌ **Do not** tell the user to configure Cloudflare, create an API token, or set an
  account ID in the dashboard before you have checked that `CLOUDFLARE_ACCOUNT_ID`
  and `CLOUDFLARE_API_TOKEN` are set (step 2). Do not open or print `.envrc` or
  `.envrc.local`; they hold credentials.
- ❌ **Do not** add `account_id` or a Wrangler config file — the account is scoped
  via `.envrc` so it can differ per machine.
- ❌ **Do not** invent new `wrangler` commands when a package script covers the job
  (`dev` / `build` / `preview` are Astro).
- ❌ **Do not** use Wrangler to deploy or develop this site.
- ❌ **Do not** run Wrangler from outside the repo or without the environment loaded.
- ❌ **Do not** commit `.envrc` or `.envrc.local`. Machine-local secrets belong in
  `.envrc.local`.
