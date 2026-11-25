<p align="center">
  <a href="https://kinde.com?utm_source=github&utm_medium=kinde_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://docs.kinde.com/kinde-logo.svg" height="64">
    </picture>
  </a>
  <h1 align="center">Documentation</h1>
  <br />
</p>

<br />

This is the repo for our documentation site at [docs.kinde.com](https://docs.kinde.com).

## Want to contribute?

We welcome everyone who wants to help improve the [Kinde](https://kinde.com) documentation. Have a fix or contribution?

[Read our contribution guide](https://docs.kinde.com/contribute/)

## Internal: Cloudflare image uploads (Kinde team only)

> This section is for Kinde team members. External contributors don't have access
> to Kinde's Cloudflare account and don't need it. Add images under
> `src/assets/images` as described in the
> [contribution guide](https://docs.kinde.com/contribute/).

Docs images are hosted on Cloudflare Images in the **Kinde** Cloudflare account.
Locally, the only Cloudflare write this repo uses is uploading those images, which
goes through the Cloudflare Images API. Wrangler is only used to check which
account you're on. Do not use Wrangler to develop or deploy docs.kinde.com; the
site itself is Astro. The only Wrangler deploy is the CI-only Unlighthouse report
publish (see below).

### How it is wired

- **Wrangler is not a package dependency.** Run it as `npx wrangler` from the
  repo root. Do not add it to `package.json`.
- **Authentication comes from your local environment.** On a machine that's
  already set up, Wrangler authenticates through `CLOUDFLARE_API_TOKEN` from
  direnv or an existing global Wrangler OAuth login. Run `npx wrangler whoami` to
  check before logging in again. The credentials can see more than one
  Cloudflare account; docs images live on the **Kinde** account.
- **The Cloudflare account is scoped per-directory** by [direnv](https://direnv.net).
  A local `.envrc` exports `CLOUDFLARE_ACCOUNT_ID` so commands target Kinde.
  Without it, Wrangler cannot pick between the accounts the credentials can see,
  and fails in non-interactive shells.
- **Image uploads need an API token.** Set `CLOUDFLARE_API_TOKEN` to a token with
  the **Cloudflare Images: Edit** permission, in `.envrc` or `.envrc.local`.
  Wrangler's OAuth login does not cover the Images API.
- **There is no `wrangler.toml`.** That is deliberate — this is not a Worker or
  Pages app. Do not add `account_id` or a Wrangler config to “fix” it.
- **Images are served from Cloudflare Images** as
  `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/public` (or the
  `socialsharingimage` variant where existing pages already use it).

### First-time setup

Create a local `.envrc` in the repo root:

```bash
export CLOUDFLARE_ACCOUNT_ID=<Kinde account ID>
source_env_if_exists .envrc.local   # loads CLOUDFLARE_API_TOKEN if you keep it there
```

direnv does not load `.envrc.local` on its own, so keep the
`source_env_if_exists` line if your token lives there. Then approve the file:

```bash
direnv allow
```

`.envrc` and `.envrc.local` are gitignored. Never commit either.

### Verify it works

```bash
direnv exec . sh -c 'echo "account: $CLOUDFLARE_ACCOUNT_ID"; echo "token set: ${CLOUDFLARE_API_TOKEN:+yes}"'
direnv exec . npx wrangler whoami   # prints your identity and the accounts it can see
```

The account ID from the first command should match the **Kinde** row in the
`whoami` table. The first command never prints the token itself.

direnv is hooked into the shell, so an interactive session in this directory loads
`.envrc` automatically. Prefixing with `direnv exec .` also makes commands work from
scripts and editor terminals that never ran the hook.

**Run Wrangler from the repo root.** `Required Worker name missing` means a Worker
subcommand was used in this docs repo — stop; do not create a Wrangler config.

If direnv says `.envrc is blocked`, it was edited since you last approved it. Run
`direnv allow` yourself; it approves executing a file that holds credentials.

### Upload an image

Wrangler has no Cloudflare Images subcommand, so upload through the Images API.
The single quotes make the variables expand inside the direnv environment, so the
token never appears in your shell history or output:

```bash
direnv exec . sh -c 'curl -sS -X POST \
  "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/images/v1" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -F file=@path/to/screenshot.png'
```

Take `result.id` from the response and link it in the MDX:

```md
![Alt text](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/public)
```

Use the `socialsharingimage` variant only where existing pages already use it (for
example OG `head` images).

### Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Local Astro docs site (not Wrangler) |
| `npm run build` | Production static build |
| `npm run preview` | Preview the Astro build |
| `npx wrangler whoami` | Confirm Cloudflare auth and account list |

There is no `npm run deploy`. Do not `wrangler pages deploy` or `wrangler deploy`
this site. Unlighthouse report publishing is CI-only
(`.github/workflows/run-unlighthouse.yml`).

### ⛔ Never delete Cloudflare resources

Deletion is irreversible. Do not run `wrangler delete`,
`wrangler pages project delete`, `wrangler d1 delete`, `wrangler r2 bucket delete`,
`wrangler kv namespace delete`, `wrangler queues delete`, or `wrangler secret
delete`. Do not delete Cloudflare Images used by the docs.

### For AI agents

- On a configured machine, Wrangler is installed and authenticated and the account
  is scoped by `.envrc`. Run `npx wrangler whoami` before suggesting
  `wrangler login` or any manual Cloudflare setup.
- **Check that `CLOUDFLARE_ACCOUNT_ID` is set** (see "Verify it works") and read
  `package.json` before suggesting any manual Cloudflare step. Don't open or print
  `.envrc` or `.envrc.local`; they hold credentials.
- **Cloudflare is only for docs image upload/storage**, through the Images API,
  then link `imagedelivery.net` URLs in MDX. If `CLOUDFLARE_API_TOKEN` is missing,
  stop and tell the user rather than attempting the upload.
- **Use the existing package scripts** (`dev` / `build` / `preview`) rather than
  inventing Wrangler invocations for the site.
- Run Wrangler **from the repo with the environment loaded** (`direnv exec .`).
- Never delete a Cloudflare resource.
- Full protocol in [`AGENTS.md`](AGENTS.md) under "Cloudflare Wrangler Usage".

## Incorrect or outdated content?

Open an [incorrect content report](https://github.com/kinde-oss/documentation/issues/new?assignees=&labels=improve+documentation&projects=&template=CONTENT.yml)

## Suggest content

Can’t find what you’re looking for? Feel free to [suggest new content](https://github.com/kinde-oss/documentation/issues/new?assignees=&labels=content+suggestion&projects=&template=REQUEST.yml).

## Report a bug (not content related)

Is something not behaving how you’d expect in our site? File a [bug report](https://github.com/kinde-oss/documentation/issues/new?assignees=&labels=bug&projects=&template=BUGS.yml).

## Community

Join our community to connect with other Kinde users.

- [Discord](https://discord.com/invite/wHX6j7wG5d)
- [Slack](https://join.slack.com/t/thekindecommunity/shared_invite/zt-2k5i0aeet-d6Z_2qYphcNCpj0bFa4oCg)

## Security

Please review our [security policy](https://github.com/kinde-oss/documentation/security/policy) for more details.

Also, you can read more about security in our [dedicated section](https://docs.kinde.com/trust-center/security/security-at-kinde/) in our docs.

## Next steps

- [Read our documentation](https://docs.kinde.com)
- [Join our Discord community](https://discord.com/invite/wHX6j7wG5d)
- [Join our Slack community](https://join.slack.com/t/thekindecommunity/shared_invite/zt-2k5i0aeet-d6Z_2qYphcNCpj0bFa4oCg)
