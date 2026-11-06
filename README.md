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

## Cloudflare Wrangler Usage

Wrangler is **already available for this repo**. You should not need to log in to
Cloudflare or configure anything in the dashboard to work on docs.

**Use Wrangler only to upload and store images that are linked from the docs.**
The site itself is Astro. Wrangler is not how you develop or deploy docs.kinde.com.

### How it is wired

- **Wrangler is a global CLI**, not a package dependency — run it as
  `npx wrangler` from the repo root. Do not add it to `package.json`.
- **Authentication is already in place.** Global Wrangler OAuth can see more than
  one Cloudflare account; docs images live on the **Kinde** account.
  `wrangler login` is not part of this project's setup.
- **The Cloudflare account is scoped per-directory** by [direnv](https://direnv.net).
  A local `.envrc` should export `CLOUDFLARE_ACCOUNT_ID` (and optionally
  `CLOUDFLARE_API_TOKEN` via `.envrc.local`) so commands target Kinde. Without it,
  Wrangler cannot pick between the accounts the credentials can see, and fails in
  non-interactive shells.
- **There is no `wrangler.toml`.** That is deliberate — this is not a Worker or
  Pages app. Do not add `account_id` or a Wrangler config to “fix” it.
- **Images are served from Cloudflare Images** as
  `https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/<image-id>/public` (or the
  `socialsharingimage` variant where existing pages already use it).

### First-time setup

```bash
direnv allow
```

If `.envrc` is missing, create a local one that exports `CLOUDFLARE_ACCOUNT_ID`
for the Kinde account, then run `direnv allow`. Do not commit `.envrc`.

`.envrc` is not committed (it is gitignored).

### Verify it works

```bash
direnv exec . env | grep CLOUDFLARE_ACCOUNT_ID   # should print the account ID
direnv exec . npx wrangler whoami            # should print your identity + accounts
```

direnv is hooked into the shell, so an interactive session in this directory loads
`.envrc` automatically. Prefixing with `direnv exec .` also makes commands work from
scripts and editor terminals that never ran the hook.

**Run Wrangler from the repo root.** `Required Worker name missing` means a Worker
subcommand was used in this docs repo — stop; do not create a Wrangler config.

If direnv says `.envrc is blocked`, it was edited since you last approved it. Run
`direnv allow` yourself; it approves executing a file that holds credentials.

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

- Wrangler is already installed and authenticated, and the account is meant to be
  scoped by `.envrc` — **don't** tell the user to run `wrangler login` or
  configure Cloudflare by hand.
- **Inspect `.envrc` and `package.json` first** before suggesting any manual
  Cloudflare step.
- **Use Wrangler only for docs image upload/storage**, then link
  `imagedelivery.net` URLs in MDX.
- **Use the existing package scripts** (`dev` / `build` / `preview`) rather than
  inventing Wrangler invocations for the site.
- Run Wrangler **from the repo with the environment loaded** (`direnv exec .`).
- Never delete a Cloudflare resource.
- Full protocol in [`CLAUDE.md`](CLAUDE.md) / [`AGENTS.md`](AGENTS.md) under
  "Cloudflare Wrangler Usage".

## Want to contribute?

We welcome everyone who wants to help improve the [Kinde](https://kinde.com) documentation. Have a fix or contribution?

[Read our contribution guide](https://docs.kinde.com/contribute/)

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
