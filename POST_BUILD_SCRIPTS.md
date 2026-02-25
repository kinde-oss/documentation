# Post-Build Scripts

This document explains the automated post-build scripts that run after every documentation build to generate LLM training files and update security configurations.

## Overview

The documentation site runs several post-build scripts automatically after each build to:

1. **Update Content Security Policy (CSP)** - Ensures security compliance for inline scripts
2. **Generate LLM Training Files** - Creates documentation files optimized for AI/LLM training

These scripts are integrated into the build process via the `postbuild` npm script and run automatically in CI/CD and local builds.

## Post-Build Scripts

### 1. CSP Update Script (`scripts/update-csp.js`)

**Purpose**: Updates Content Security Policy headers to allow inline scripts generated during the build process.

**What it does**:
- Scans all HTML files in the `dist/` directory for inline scripts
- Generates SHA256 hashes for each inline script
- Updates the CSP `script-src` directive in `customHttp.yml` with these hashes
- Ensures security compliance while allowing necessary inline scripts

**Output**: Updates `customHttp.yml` with new script hashes

### 2. LLM Generation Scripts

**Purpose**: Generate documentation files optimized for Large Language Model (LLM) training.

**Generated Files**:
- **`llms.txt`** - Main index file with links to all LLM documentation
- **`llms-abridged.txt`** - Compact version with frontmatter only (title, description, keywords, topics)
- **`llms-full.txt`** - Complete documentation with full content
- **Section-specific files** - Individual files for each documentation section

## LLM Generated Files

The LLM scripts write directly to the **build output** (`dist/`), not to `public/`. Astro copies `public/` into `dist/` during the build; post-build scripts run after that, so writing to `dist/` ensures the generated files are what gets deployed.

### Main Files (in `dist/` after build)
- `llms.txt` - Index file with links to all LLM documentation (static file from `public/`)
- `llms-abridged.txt` - Abridged documentation (frontmatter only), generated
- `llms-full.txt` - Complete documentation with full content, generated

### Section Files (in `dist/_llms-txt/` after build)
- `authenticate.txt` - Authentication documentation
- `billing.txt` - Billing and subscription management
- `build.txt` - Building applications on Kinde
- `developer-tools.txt` - Developer tools and APIs
- `get-started.txt` - Getting started guides
- `integrate.txt` - Third-party integrations
- `machine-to-machine-applications.txt` - M2M applications
- `manage-users.txt` - User management
- `manage-your-account.txt` - Account management
- `manage-your-apis.txt` - API management
- `properties.txt` - Custom properties
- `workflows.txt` - Workflow automation

## Build Integration

### Automatic Execution
All post-build scripts run automatically when you run:
```bash
npm run build
```

The build process follows this sequence:
1. **Astro build** - Generates the static site
2. **Post-build scripts** (automatic):
   - `scripts/update-csp.js` - Updates CSP headers
   - `scripts/generate-llms-txt-abridged.js` - Generates abridged LLM files
   - `scripts/generate-llms-txt-full.js` - Generates complete LLM files
   - `scripts/generate-llms-txt-sections.js` - Generates section-specific LLM files

### Package.json Configuration
```json
{
  "scripts": {
    "build": "astro build",
    "postbuild": "node ./scripts/update-csp.js && node ./scripts/generate-llms-txt-abridged.js && node ./scripts/generate-llms-txt-full.js && node ./scripts/generate-llms-txt-sections.js"
  }
}
```

## LLM Generation Scripts

### `scripts/generate-llms-txt-abridged.js`
Generates the abridged documentation file containing only frontmatter data:
- Extracts `title`, `description`, `keywords`, and `topics` from all MDX files
- Creates a compact format suitable for quick reference
- Output: `dist/llms-abridged.txt`

### `scripts/generate-llms-txt-full.js`
Generates the complete documentation file with full content:
- Extracts frontmatter and complete content from all MDX files
- Formats page titles with folder paths (e.g., "Authenticate - About auth")
- Minifies content by removing line breaks
- Output: `dist/llms-full.txt`

### `scripts/generate-llms-txt-sections.js`
Generates individual files for each top-level documentation section:
- Creates separate files for each section (authenticate, billing, etc.)
- Uses the same format as the full documentation
- Output: `dist/_llms-txt/[section].txt`

## Manual Script Execution

### Prerequisites
- Node.js installed
- Dependencies installed (`npm install`)

### Run Individual Scripts
```bash
# Update CSP headers only
node scripts/update-csp.js

# Generate abridged documentation only
node scripts/generate-llms-txt-abridged.js

# Generate complete documentation only
node scripts/generate-llms-txt-full.js

# Generate section-specific files only
node scripts/generate-llms-txt-sections.js
```

### Run All Post-Build Scripts
```bash
# Run all post-build scripts manually
npm run postbuild
```

## File Formats

### Abridged Format
```
# Page Title
Page description
keyword1, keyword2, keyword3
topic1, topic2, topic3

# Next Page Title
Next page description
...
```

### Full Format
```
# Section - Page Title - Page Description
> Page description
keyword1, keyword2, keyword3
topic1, topic2, topic3
Full page content without line breaks...

# Next Section - Next Page Title - Next Page Description
...
```

## Source Data

All LLM files are generated from MDX files in `src/content/docs/`. The scripts:
1. Scan all `.mdx` files recursively
2. Extract frontmatter using the `gray-matter` library
3. Parse content and apply formatting rules
4. Write output files to the `public/` directory

## Dependencies

### CSP Update Script
- `cheerio` - HTML parsing and manipulation
- `crypto` - SHA256 hash generation
- `js-yaml` - YAML file parsing and writing
- Node.js `fs` and `path` modules

### LLM Generation Scripts
- `gray-matter` - Frontmatter parsing
- `glob` - File pattern matching
- Node.js `fs` and `path` modules

## Publishing

Files in the `public/` directory are automatically served by Astro at the root URL:
- `https://docs.kinde.com/llms.txt`
- `https://docs.kinde.com/llms-abridged.txt`
- `https://docs.kinde.com/llms-full.txt`
- `https://docs.kinde.com/_llms-txt/[section].txt`

## Maintenance

### Automatic Updates
All post-build scripts run automatically during:
- Local development builds (`npm run build`)
- CI/CD pipeline builds
- Production deployments

### Manual Updates
The `llms.txt` file is manually maintained and should be updated when:
- Adding new section files
- Changing file locations
- Updating descriptions or links

### When Scripts Run
- **CSP Update**: Every build (ensures security compliance)
- **LLM Generation**: Every build (keeps training data current)
- **Content Changes**: Automatically detected and processed

## Troubleshooting

### Common Issues
1. **Missing dependencies**: Run `npm install` to ensure all packages are available
2. **File not found errors**: Ensure MDX files exist in `src/content/docs/`
3. **Permission errors**: Check write permissions for the `public/` directory
4. **Empty output**: Verify MDX files have proper frontmatter structure
5. **CSP errors**: Check that `customHttp.yml` exists and is writable
6. **Build failures**: Scripts run in sequence - if one fails, subsequent scripts won't run

### Validation
After build completion, verify:
- **CSP Update**: Check `customHttp.yml` for updated script hashes
- **LLM Files**: All expected files are created in `public/` and `public/_llms-txt/`
- **File sizes**: Reasonable sizes (not empty or unusually large)
- **Content format**: Properly formatted with frontmatter
- **Links**: All links in `llms.txt` point to existing files

### Build Output
Successful build should show:
```
> documentation@0.0.1 postbuild
> node ./scripts/update-csp.js && node ./scripts/generate-llms-txt-abridged.js && node ./scripts/generate-llms-txt-full.js && node ./scripts/generate-llms-txt-sections.js

YAML configuration has been updated.
Abridged documentation created: dist/llms-abridged.txt
Processed 392 files
Complete documentation created: dist/llms-full.txt
Processed 392 files
Generating section documentation files...
Found 16 sections: authenticate, billing, build, contribute, design, developer-tools, get-started, integrate, machine-to-machine-applications, manage-users, manage-your-account, manage-your-apis, properties, releases, trust-center, workflows
...
All section documentation files have been generated in public/_llms-txt/
```
