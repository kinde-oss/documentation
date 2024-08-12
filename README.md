<p align="center">
  <a href="https://kinde.com?utm_source=github&utm_medium=kinde_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://docs.kinde.com/kinde-logo.svg" height="64">
    </picture>
  </a>
  <h1 align="center">Documentation</h1>
  <br />
</p>

This branch is in constant development and we’re still using Notion as our source of truth until we are ready to make this repo public.

You can see the "old" docs instructions regarding the Notion set up below.

## Docs site (using Notion as a CMS)

> Important: Do not update the `src/content/docs/**.md` files via the source code. These are to be managed via Notion now. Please read below.

It is important to note that this is an early version and its current state conforms with our current deployment pipeline. Things may change in the future. Articles are added/updated in the [Docs database (In Notion)](https://www.notion.so/1f3cd8d00cc247ec9ce32557c566ae57).

You’ll need a couple of enviroment variables from the `Kinde Website env` item in `1Password`:

- `NOTION_TOKEN`
- `NOTION_DOCS_DB`

### Generating the files with `npm run cms`:

When editors need a PR open, they will contact a developer (in the future we will automate this) and the developer you need to create a branch and run the `npm run cms` script within the `website` folder. This script will:
1 - Get articles from Notion (`getNotionContent.mjs`)
2 - Build the website
3 - Create the `JSON` file at `../app/dist_root/website_assets/docs.json` to be consumed by the `app` along with `../app/src/get_docs_json.roast`
4 - Lint the website to avoid commiting updated `.md`
5 - These all happen in sequence.

### ⚠️ Important

If you run into any issues when running `npm run cms`, chances are that:

- Sometimes the Notion API is a bit "flaky", so you just need to re-run the script.
- The Notion articles recently created may be missing a property. Additional info on what the properties are and more are available [here](https://www.notion.so/kinde/Docs-1448c78d272447eb85c086c3f7b0447c#d701b39998b74e5e84ea779fe46ac9e3)

### ⚠️ Manual actions

Some actions will require manual intervention — at least for now. This is in part because of either how the current state of the Notion API works or given the limitations of our current deployment structure/pipeline and/or security restrictions. These are:

#### Deleting an article

Simply deleting an article from the database won’t remove it from the source code. If an article needs to be removed, editors will contact engineering/developers.

#### Updating an articles’ URL (`Slug`)

If an article URL needs to be updated, editors will contact engineering/developers. The "old" article won't be removed automatically, so developers will need to remove it from the source code and apply redirects when appropriate.

#### Adding a SDK icon to the index page

These needed to be added by a developer. We may be able to make this possible via Notion in the future, but we’ll be doing this manually for the time being.

#### Adding new Topics

This needs to be added manually by a developer in `src/data/docs/structure.mjs` first. We may be able to make this possible via Notion in the future, but we’ll be doing this manually for the time being.

#### Updating the order of Topics

This needs to be updated manually by a developer in `src/data/docs/structure.mjs` first. We may be able to make this possible via Notion in the future, but we’ll be doing this manually for the time being.
