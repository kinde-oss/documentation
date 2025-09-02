
At Kinde, each user can only have one enterprise identity provider (IdP) connection as part of their user profile. This is because we want to keep things simple, secure, and reliable.

We get asked about this regularly, so this document explains our reasoning from a security and architectural perspective.

## What is an enterprise connection?

An enterprise connection allows users to sign in to your product using their organization’s identity provider — such as Okta, Azure AD, or Google Workspace. This enables Single Sign-On (SSO), centralized user management, and improved security for enterprise customers.

## Why only one identity per user?

Many customer identity platforms, including Kinde, enforce a one-to-one relationship between a user and an enterprise connection. Here’s why:

### 1. Prevents identity conflicts

If a user could sign in through multiple enterprise providers, it becomes difficult to determine whether those identities belong to the same person. This can result in:

- Duplicate accounts for the same user
- Conflicting user attributes (email, name, roles, etc.)
- Confusion around permissions and organization membership

Restricting to a single enterprise connection ensures a consistent and predictable identity model.

### 2. Security and account Integrity

Allowing multiple enterprise connections introduces significant security risks:

- **Risk of account hijacking:** If a user can link multiple IdPs, and identity claims like email or subject ID (`sub`) overlap or are not verified consistently, it becomes possible for unauthorized users to gain access to another user’s account.
- **Inconsistent identity claims:** Different IdPs use different formats and identifiers. One provider may use an email address, another a unique internal ID. Reconciling these automatically increases the risk of incorrect mappings and privilege escalation.
- **Reduced auditability:** Security audits and access logs rely on a single, traceable identity. If a user can authenticate through multiple IdPs, it becomes harder to guarantee that all actions are traceable to a single, verified identity.
- **Clear accountability:** With one connection per user, the responsibility for identity management, password resets, session revocation, and breach response remains clearly with the source identity provider.

### 3. Simplified tenant and access management

In multi-tenant applications, each enterprise typically has its own workspace or organization. Supporting one IdP per user:

- Keeps tenant boundaries clean
- Prevents role or permission leakage between organizations
- Simplifies access control logic

## What if someone needs access to multiple organizations?

We support users belonging to multiple organizations within Kinde. In edge cases (such as contractors working across companies) we recommend adding [enterprise connections at the organization level](/authenticate/enterprise-connections/enterprise-connections-b2b/). This means the user signs in directly to the relevant organization, with no confusion about where to be routed. This feature is only available on the Kinde Scale plan.

If you are not on the relevant plan, other ways to handle this include:

- Use separate emails for each organization
- Use different auth methods per organization

## Built for security, designed for clarity

This choice to allow only one enterprise identity per user aligns with industry best practices and helps keep your users, data, and systems secure. By enforcing this, Kinde provides a stable and trusted identity layer you can build on with confidence. 

If you have any questions about more advanced SSO or identity configurations, [contact our team](https://kinde.com/contact). We’re happy to help.
