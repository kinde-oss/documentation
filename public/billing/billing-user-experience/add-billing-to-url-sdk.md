
This topic explains how to customize billing flows with Kinde, including URL parameters, direct auth URLs, and SDK usage in React.

Examples are given in React, but can be adapted for most frameworks.

## Edit the auth URL parameters directly

Here’s a standard Kinde auth URL:

```

https://<your_kinde_subdomain>.kinde.com/oauth2/auth
  ?response_type=code
  &client_id=<your_kinde_client_id>
  &redirect_uri=<your_app_redirect_url>
  &scope=openid%20profile%20email
  &state=abc

```

Add these parameters as needed:

| Parameter | Description |
| --- | --- |
| `plan_interest` | Pre-selects a plan (skips plan selection) |
| `pricing_table_key` | Displays a specific pricing table |
| `is_create_org` | Triggers org sign-up flow |

### Examples

- Pre-select a plan:
    
    ```
    ...&plan_interest=pro_monthly
    ```
    
- Show specific pricing:
    
    ```
    ...&pricing_table_key=spring_promo
    ```
    
- Org sign-up:

    ```
    ...&is_create_org=true
    ```

## Integrate billing using the React SDK

You can avoid manual URL construction by using our SDK components. Here's how.

**User sign-up (default):**

```jsx
<RegisterLink>Sign up</RegisterLink>
```

**Org sign-up (B2B):**

```jsx
<RegisterLink isCreateOrg>Sign up your organization</RegisterLink>
```

**Pre-select a user plan:**

```jsx
<RegisterLink planInterest="pro_monthly">Sign up with Pro plan</RegisterLink>
```

**Show a specific pricing table:**

```jsx
<RegisterLink pricingTableKey="spring_promo">Spring Promo Sign up</RegisterLink>
```

**Combine for B2B + pricing table:**

```jsx
<RegisterLink isCreateOrg pricingTableKey="enterprise_2024">
  Sign up your company
</RegisterLink>
```
