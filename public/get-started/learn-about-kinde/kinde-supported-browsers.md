
For Kinde admin and authentication flow, Kinde uses [Browserslist’s](https://github.com/browserslist/browserslist) recommended query of `defaults`, which matches recent versions of popular and supported browsers worldwide.

This means we support the typical stack of desktop and mobile browsers:

- Chrome
- Chrome for Android
- Safari
- Safari on iOS
- Edge
- Firefox
- Opera

In addition to the `defaults` query, we add the `iOS >= 15.4` query to extend iOS Safari support to version 15.4.

**Note:** Kinde does not support any Internet Explorer (IE) version, including IE 11.

## See all targeted browsers

[View all targeted browsers](https://browsersl.ist/?results=#q=defaults%2C+iOS+%3E%3D+15.4), and filter by region, e.g.

- [Australia](https://browsersl.ist/?results=#q=defaults%2C+iOS+%3E%3D+15.4&region=AU)
- [United States](https://browsersl.ist/?results=#q=defaults%2C+iOS+%3E%3D+15.4&region=US)
- [Europe](https://browsersl.ist/?results=#q=defaults%2C+iOS+%3E%3D+15.4&region=alt-eu)

## Query breakdown

Kinde’s Browserslist query: `defaults, iOS >= 15.4` breaks down to:

- `> 0.5%` all versions with > 0.5% of the audience worldwide
- `last 2 versions` last 2 versions of each browser
- `Firefox ESR` the latest Firefox Extended Support Release
- `not dead` excludes dead browsers, i.e., browsers without official support or updates for more than 24 months
- `iOS >= 15.4` all iOS Safari versions newer than `15.3`

**Note:** Regarding the `not dead` query, this includes IE 11, IE Mobile 11, BlackBerry 10, BlackBerry 7, Samsung 4, Opera Mobile 12.1, and all versions of Baidu.

## Staying up-to-date

Browserslist queries like `last 2 versions` or `> 0.5%` depend on actual data. Therefore, Kinde regularly updates the Browserslist DB via the [update-db tool](https://github.com/browserslist/update-db).

## How to report issues

If you find any issues, please report them via email to [support@kinde.com](mailto:support@kinde.com), the support chat in the Kinde admin, or the #support channels in [Slack](https://join.slack.com/t/thekindecommunity/shared_invite/zt-2k5i0aeet-d6Z_2qYphcNCpj0bFa4oCg) or [Discord](https://discord.gg/KdkCXRNTFn).
