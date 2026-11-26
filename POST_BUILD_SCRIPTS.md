# Post-Build Scripts

Two scripts run automatically after every `astro build`, via the `postbuild` npm script:

1. **`scripts/update-csp.js`** - updates the Content Security Policy for inline scripts
2. **`scripts/generate-llms-txt.js`** - generates the LLM text files (`llms.txt` and friends)

```json
{
  "scripts": {
    "build": "astro build",
    "postbuild": "node ./scripts/update-csp.js && node ./scripts/generate-llms-txt.js"
  }
}
```

npm runs `postbuild` straight after `build`, so `npm run build` runs both scripts, both locally and in the deploy pipeline (AWS Amplify). If either script fails, the build fails and nothing is deployed.

## CSP update (`scripts/update-csp.js`)

- Scans every HTML file in `dist/` for inline scripts
- Generates a SHA256 hash for each one
- Updates the CSP `script-src` directive in `customHttp.yml` with these hashes
- Writes the updated file to the repo root and to `dist/customHttp.yml`, so the deployed artifact gets the new headers

## LLM text files (`scripts/generate-llms-txt.js`)

The script reads every `.mdx` file in `src/content/docs/` once and writes these files into `dist/`:

| Deployed URL | Contents |
|---|---|
| `https://docs.kinde.com/llms.txt` | Index: an overview of Kinde, the documentation sets, and a link to every section file |
| `https://docs.kinde.com/llms-abridged.txt` | Frontmatter only for every page: title, `ai_summary` (or `description`), last updated date, keywords, topics |
| `https://docs.kinde.com/llms-full.txt` | Every page in full |
| `https://docs.kinde.com/_llms-txt/<section>.txt` | Every page in one top-level folder of `src/content/docs/`, in full |

The script writes to `dist/`, not `public/`. Astro copies `public/` into `dist/` during the build, before `postbuild` runs, so anything written to `public/` would miss that deploy. Generated files are gitignored in `public/` so stale copies can't be committed.

### What updates automatically

Everything below happens on every build, without manual steps:

- **Page content and metadata**: add or edit an `.mdx` page and it appears in the abridged, full and section files.
- **New sections**: a new top-level folder in `src/content/docs/` gets its own `_llms-txt/<folder>.txt` file and a link in `llms.txt`.
- **`updated` dates** in each generated file's frontmatter are set to the build date.

### What is edited by hand

- **The `llms.txt` intro and links** live in `scripts/llms.template.txt`. Edit that file to change the description of Kinde, the documentation sets, notes or optional links. The `{{SECTION_LINKS}}` placeholder is replaced with the generated section list, so keep it in the template.
- **Section labels and descriptions** come from the `SECTIONS` map at the top of `scripts/generate-llms-txt.js`. A folder that isn't in the map still gets a file and a link, using a label made from its folder name and the `description` from its `index.mdx` (if it has one). The build log prints a warning for it. Add an entry to the map to give it a proper label, description and fixed `page_id`.

### Page format

Abridged (`llms-abridged.txt`):

```
## Section name

### Page title

Last updated: 2026-01-01

AI summary or description
keyword1, keyword2
topic1, topic2
```

Full and section files:

```
# Section - Subfolder - Page title

> Page description

Last updated: 2026-01-01

keyword1, keyword2
topic1, topic2

Page content as Markdown, with headings, lists and code blocks intact
```

The page content keeps its Markdown structure and line breaks so code samples stay readable. MDX component `import` lines are removed, and runs of blank lines are collapsed.

## Running the scripts manually

```bash
npm install
npm run build                       # full build, including both post-build scripts
node scripts/generate-llms-txt.js   # regenerate only the LLM files (needs an existing dist/)
```

`astro dev` doesn't serve the LLM files, because they only exist in `dist/`. Run a build and use `npm run preview` to check them locally.

## Troubleshooting

- **A section is missing from `llms.txt`**: check that the folder contains at least one `.mdx` file.
- **A section has a generic label**: add it to `SECTIONS` in `scripts/generate-llms-txt.js`.
- **`llms.template.txt must contain {{SECTION_LINKS}}`**: the placeholder was removed from the template. Put it back under `## Section Documentation`.
- **A page is missing or has empty metadata**: check its frontmatter. The script logs any file it can't parse.
