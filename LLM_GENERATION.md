# LLM File Generation

This document explains how to generate the LLM (Large Language Model) training files for Kinde's documentation.

## Overview

The documentation site generates several types of LLM training files to make Kinde's documentation accessible to AI assistants and language models:

- **`llms.txt`** - Main index file with links to all LLM documentation
- **`llms-abridged.txt`** - Compact version with frontmatter only (title, description, keywords, topics)
- **`llms-full.txt`** - Complete documentation with full content
- **Section-specific files** - Individual files for each documentation section

## Generated Files

### Main Files (in `public/`)
- `llms.txt` - Index file with links to all LLM documentation
- `llms-abridged.txt` - Abridged documentation (frontmatter only)
- `llms-full.txt` - Complete documentation with full content

### Section Files (in `public/_llms-txt/`)
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

## Generation Scripts

### `scripts/generate-llms-txt-abridged.js`
Generates the abridged documentation file containing only frontmatter data:
- Extracts `title`, `description`, `keywords`, and `topics` from all MDX files
- Creates a compact format suitable for quick reference
- Output: `public/llms-abridged.txt`

### `scripts/generate-llms-txt-full.js`
Generates the complete documentation file with full content:
- Extracts frontmatter and complete content from all MDX files
- Formats page titles with folder paths (e.g., "Authenticate - About auth")
- Minifies content by removing line breaks
- Output: `public/llms-full.txt`

### `scripts/generate-llms-txt-sections.js`
Generates individual files for each top-level documentation section:
- Creates separate files for each section (authenticate, billing, etc.)
- Uses the same format as the full documentation
- Output: `public/_llms-txt/[section].txt`

## How to Generate Files

### Prerequisites
- Node.js installed
- Dependencies installed (`npm install`)

### Generate All Files
```bash
# Generate abridged documentation
node scripts/generate-llms-txt-abridged.js

# Generate complete documentation
node scripts/generate-llms-txt-full.js

# Generate section-specific files
node scripts/generate-llms-txt-sections.js
```

### Generate Individual Files
```bash
# Generate only abridged version
node scripts/generate-llms-txt-abridged.js

# Generate only complete version
node scripts/generate-llms-txt-full.js

# Generate only section files
node scripts/generate-llms-txt-sections.js
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

The generation scripts use:
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

### When to Regenerate
- After adding new documentation pages
- After modifying existing page frontmatter
- After restructuring documentation sections
- Before major releases

### Updating the Main Index
The `llms.txt` file is manually maintained and should be updated when:
- Adding new section files
- Changing file locations
- Updating descriptions or links

## Troubleshooting

### Common Issues
1. **Missing dependencies**: Run `npm install` to ensure all packages are available
2. **File not found errors**: Ensure MDX files exist in `src/content/docs/`
3. **Permission errors**: Check write permissions for the `public/` directory
4. **Empty output**: Verify MDX files have proper frontmatter structure

### Validation
After generation, verify:
- All expected files are created
- File sizes are reasonable (not empty or unusually large)
- Content appears correctly formatted
- Links in `llms.txt` point to existing files
