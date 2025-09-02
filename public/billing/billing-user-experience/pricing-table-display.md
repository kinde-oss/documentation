
The pricing table that is displayed in a particular flow depends on the the [default plan groups and pricing table order](/billing/manage-plans/add-manage-plan-groups/).

## B2C (User-based)

A pricing table is shown when:

- A new user registers
- An existing user, marked as a billing customer, signs in but isn’t on a plan yet

## B2B (Org-based)

A pricing table is shown when:

- A new organization registers (`is_create_org` parameter)
- An org member with `org:write:billing` permission signs in and the org is a billing customer but not on a plan yet

## B2B2C (Platforms - uses both)

- Organization plan selection = B2B logic
- User plan selection = B2C logic

## Here's a video showing the user experience for billing

<YoutubeVideo videoId="xxVwZW8OxIA" videoTitle="Billing user experience"/>

## Override the default plan display

You can override which plan or pricing table is shown using URL parameters. See: [Update code and URLs for billing](/billing/billing-user-experience/add-billing-to-url-sdk/).

## Summary of display for plan groups

| Model | Plan group | Pricing table is shown when |
| --- | --- | --- |
| B2C | User plan group | New user registers / logs in |
| B2B | Org plan group | New org registers / billing admin |
| B2B2C | Both | Depends on flow context |


