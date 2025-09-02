
It is likely that your logos and favicons are managed in Kinde, but you may also manage externally hosted assets like stylesheets, fonts, and images.

## Kinde hosted assets

Within your custom code you can reference assets which have been uploaded within the Kinde admin area. The Kinde infrastructure package ships with helper methods for accessing these:

### Favicons

```jsx
import {getFallbackFaviconUrl, getSVGFaviconUrl} from "@kinde/infrastructure";
```

#### Usage

```jsx
<link rel="icon" href={getFallbackFaviconUrl()} sizes="48x48">
<link rel="icon" href={getSVGFaviconUrl()} type="image/svg+xml" />
```

### Logos

```jsx
import {getLogoUrl, getDarkModeLogoUrl} from "@kinde/infrastructure";
```

#### Usage

```jsx
// Always use light logo
<img
	src={getLogoUrl()}
	alt={event.context.widget.content.logoAlt}
/>

// Always use dark logo
<img
	src={getDarkModeLogoUrl()}
	alt={event.context.widget.content.logoAlt}
/>

// User preference
<picture>
	<source
		media="(prefers-color-scheme: dark)
		srcset={getDarkModeLogoUrl()}
	>
	<img
		src={getLogoUrl()}
		alt={event.context.widget.content.logoAlt}
	/>
</picture>
```

### Org logos

Both logo functions accept the org code as an argument to return the relevant organization logo url:

```jsx
// Pass org code in
const {orgCode} = event.request.authUrlParams
<img
	src={getLogoUrl(orgCode)}
	alt={event.context.widget.content.logoAlt}
/>
```

## External CSS files, fonts and images

We know you will want to use assets like stylesheets, fonts and images. Kinde does not currently offer hosting for these static assets and you will need to host them yourself.

Your root domain as well as any subdomains of that domain are added to our Content-Security-Policy (CSP) by default so to use your own assets and comply with Kinde’s CSP, the assets should be stored on servers that share the same domain as your custom domain.

For example, if you are using the custom domain `auth.myapp.com` you could host your external fonts, images and CSS files at `assets.myapp.com` and they would be accessible in your code.
