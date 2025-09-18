<Aside type="upgrade">

This is an advanced org feature that is only available on the [Kinde Scale plan](https://kinde.com/pricing/). You can set multi-factor auth for 5 organizations and then charges apply for each organization that uses [advanced org features](/authenticate/custom-configurations/advanced-organization/).

</Aside>

As part of being able to set unique authentication methods for an organization, you can also set how multi-factor authentication (MFA) works per organization. 

You might want to use MFA for some of your orgs, such as for business customers that require their users to have MFA as part of sign in. This is common in finance and government sectors.

As part of this feature, you can:

- exempt certain roles within the organization from having to use MFA. For example, you may only want Admins to use MFA.
- exempt MFA authentication for certain enterprise connection types, such as SAML authentication. You might want to do this if MFA is already set up with the enterprise auth provider.

## Configure environment-level MFA settings

If you do not want every organization in your business to use MFA, you must switch off the environment-level requirement.

In Kinde, go to **Settings > Environment > Multi-factor auth**.

![Screen shot of Require MFA switches](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/78708a19-58c6-4cdd-a1e7-0c34c88dfb00/public)

- Select **No** - If you want MFA to be applied in only some organizations or for some connections in your business. You will then need to set MFA in each organization separately.

- Select **Yes** – Enforce MFA for all users in all organizations. This overrides any organization‑level settings.
- Select **Optional** – Allow MFA but do not require it globally. Organization‑level settings can require MFA per org.

Whatever you select here, you can still exempt roles from MFA per organization.
## Switch on MFA for an organization

MFA methods selected here will replace those selected at the environment level.

1. In Kinde, go to **Organizations**.
2. Browse or search for the organization.
3. In the list, select the organization to open the **Details** page. 
4. Select **Multi-factor auth** in the menu.
5. If applicable, activate the advanced organization feature.
6. Toggle the **Enforce multi-factor authentication for this organization** switch on.
7. Select the authentication **Methods**. You can choose more than one.
8. Select **Save**. 

## Add and remove exempt roles from MFA

You need to have roles set up in Kinde.

1. In the **Exempt roles** section of the MFA page for the organization.
2. Select **Add exempt role** and select a role from the list.
3. Press **Enter**.
4. Repeat step 2 to add more roles. 
5. You can remove an exempt role by selecting the three dots menu and selecting **Remove**.
6. Select **Save**.

If a user has a mix of exempt and non-exempt roles, MFA will apply as default.

## Add and remove exempt enterprise connections from MFA

You need to have enterprise connections set up in Kinde.

1. In the **Exempt enterprise connections** section of the MFA page for the organization.
2. Select **Add exempt enterprise connection** and select a connection from the list.
3. Press Enter.
4. Repeat step 2 to add more connections. 
5. You can remove an exempt connection by selecting the three dots menu and selecting **Remove**.
6. Select **Save**.

If a user signs in via Okta (exempt) and has an Admin role (not exempt), they will not be prompted for MFA.

## Switch off MFA for an organization

This procedure only works if you have also switched off the environment-level setting for MFA.

<Aside type="warning">

If users are already authenticating via MFA in the organization, switching it off may cause breaking changes.

</Aside>

1. In Kinde, go to **Organizations** and browse or search for the organization.
2. In the list, select the organization to open the **Details** page. 
3. Select **Multi-factor auth** in the menu.
4. Toggle the **Enforce multi-factor authentication for this organization** switch off.
5. Select **Save**.


