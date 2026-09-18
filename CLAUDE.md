## Cloudflare Wrangler Usage

> **Read this before saying anything about Cloudflare setup.** Wrangler is already
> available for this repo, and authentication is already in place. Telling the
> user to log in or configure Cloudflare by hand — without first checking what is
> described here — is wrong, and it is the most common mistake agents make in this
> codebase.

**Wrangler in this repo is only for uploading and storing documentation images
that are then linked from MDX.** It is not how the docs site is developed or
deployed. Do not use it to create Workers, deploy Pages, mutate D1/KV/Queues, or
“set up Cloudflare” for the Astro app.

### What is already true

| Fact | Detail |
|------|--------|
| **This is an Astro docs site** | Local app commands are `npm run dev` / `npm start` (`astro dev`), `npm run build`, and `npm run preview` (`astro preview`). None of these are Wrangler. |
| **There is no `wrangler.toml` / `wrangler.jsonc`** | That is deliberate. This repo is not a Worker or Pages project. Do **not** add a Wrangler config, `--name`, or `account_id` to “fix” Wrangler. |
| **Wrangler is a global CLI, not a package dependency** | Run it as `npx wrangler` or `wrangler` from the repo root. Do **not** add it to `package.json` or ask the user to install it globally. |
| **Wrangler is already authenticated** | Global Wrangler OAuth is in place. **Do not run `wrangler login`.** The login can see more than one Cloudflare account; the **Kinde** account is the one that holds docs images. |
| **The account is scoped by `.envrc`** | This repo uses [direnv](https://direnv.net). A local `.envrc` (gitignored, including via the global gitignore) should export `CLOUDFLARE_ACCOUNT_ID` so every Cloudflare command targets the **Kinde** account. Optionally `CLOUDFLARE_API_TOKEN` lives in `.envrc.local`. |
| **Docs images are Cloudflare Images** | Live pages link `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/<variant>`. Variants used in this repo are `public` and `socialsharingimage`. Do not commit large screenshots into git when an imagedelivery URL is the existing pattern. |

**Why `.envrc` exists:** the credentials can see several Cloudflare accounts. With
more than one visible and no account pinned, Wrangler stops to ask which to use —
and in a non-interactive shell (CI, an agent, a script) it fails outright with
*"More than one account available but unable to select one in non-interactive
mode"*. `.envrc` removes the ambiguity. `.envrc` is not committed.

A GitHub Action (`.github/workflows/run-unlighthouse.yml`) uses
`cloudflare/wrangler-action` to publish Unlighthouse reports to the Pages project
`kinde-docs-unlighthouse`. That is CI-only. Do **not** run that deploy from a
local agent session.

### Workflow for agents

**0. Be in the repo.** Every Wrangler / Cloudflare command runs from
`/Users/andreselton/Kinde-codebases/documentation` (the git root). This repo has
no Wrangler config, so `wrangler deploy` / `wrangler dev` fail with:

```
✘ [ERROR] Required Worker name missing. Please specify the Worker name in your
  Wrangler configuration file, or pass it as an argument with `--name <worker-name>`
```

That means **you used a Worker command in a docs repo**, not that configuration
is broken. Do not answer it by adding `--name`, creating `wrangler.toml`, or
sending the user to the dashboard.

**1. Load the environment.** direnv is hooked into the user's shell, so an
interactive session here already has it when `.envrc` exists. A tool-invoked
shell may not — prefix with `direnv exec .`, which is correct either way:

```bash
cd /Users/andreselton/Kinde-codebases/documentation && direnv exec . npx wrangler whoami
```

If direnv says `.envrc is blocked`, the file was edited since it was approved. The
fix is `direnv allow`, run **by the user** — it approves executing a file holding
credentials, so surface it rather than running it yourself.

**2. Verify the environment loaded** (expect a value, not empty):

```bash
direnv exec . env | grep CLOUDFLARE_ACCOUNT_ID
```

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

### Documentation images (the only Wrangler/Cloudflare write path)

When a page needs a screenshot or figure:

1. Confirm direnv + `npx wrangler whoami` (Kinde account selected).
2. Upload the file to **Cloudflare Images** using the env-scoped account. Wrangler
   has no `images` subcommand; use the Images API with values from `direnv exec .`
   (never echo the token). Then link the returned id:

   `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/public`

3. Put that URL in the MDX (`![alt text](https://imagedelivery.net/...)`). Use
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
2. `direnv exec . env | grep CLOUDFLARE_ACCOUNT_ID` — empty means `.envrc` is
   missing or unallowed → local `.envrc` + `direnv allow`, not `wrangler login`.
3. `direnv exec . npx wrangler whoami` — reports the identity and every visible
   account. **Only** if this says *not logged in* is authentication genuinely the
   problem, and only then raise `wrangler login`.
4. An empty `wrangler pages project list` does **not** mean auth is broken and
   does **not** mean you should create a Pages project for the docs site.

### Do not

- ❌ **Do not** tell the user to run `wrangler login` — they are already authenticated.
- ❌ **Do not** tell the user to configure Cloudflare, create an API token, or set an
  account ID in the dashboard before you have checked `.envrc` and `package.json`.
- ❌ **Do not** add `account_id` or a Wrangler config file — the account is scoped
  via `.envrc` so it can differ per machine.
- ❌ **Do not** invent new `wrangler` commands when a package script covers the job
  (`dev` / `build` / `preview` are Astro).
- ❌ **Do not** use Wrangler to deploy or develop this site.
- ❌ **Do not** run Wrangler from outside the repo or without the environment loaded.
- ❌ **Do not** commit `.envrc`. Machine-local secrets belong in `.envrc.local`.
