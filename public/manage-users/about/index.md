
User management is about managing user records, and controlling what users can do and access within your product. You can set this up to be simple or complex, depending on your company’s needs.

## **Default user settings**

### **Users and organizations**

Whether or not you [manage multiple organizations](/build/organizations/add-and-manage-organizations/) in Kinde, all users need to belong to at least one organization. You can specify which organization users are added to, or else they are added to the default organization.

You can add users to other organizations or [change the organizations](/manage-users/about/manage-users-across-organizations/) they belong to at any time.

If a user belongs to multiple organizations, they will be prompted to select an organization when they sign in.

### **Users can sign themselves up**

By default, users will be allowed to sign up to your applications without being invited. If you would prefer your users to be invitation only, go to **Settings > Environment > Policies** and switch off the **Allow self-sign up** option.

Tip: If users can sign themselves up, you might want to also [set a default role](/manage-users/roles-and-permissions/default-user-roles/) for new users.

### **User profiles are synced to Kinde**

When a user signs in, some of their basic profile details (email, name, picture, etc.) from the external provider (MS Entra ID, Google, etc.) are passed to Kinde as well. For example, if you manage user access via a SAML connection, then their profile stored with the external identity provider is synced to Kinde each time they sign in.

You should leave this switched on if you are using [enterprise connections](/authenticate/enterprise-connections/about-enterprise-connections/) for authenticating users.
If you want, you can disable it in **Settings > Environment > Policies** by de-seleting the **Sync user profiles on sign in** option.

## User identities are different to profiles

User profiles are not quite the same as [user identities](/manage-users/add-and-edit/add-manage-user-identities/), which can also include contact information, access rights, and sign in credentials. User may have just one, or multiple identities (e.g. a username+password, and a Google SSO identity). Manage user identities via the dashboard or via API.

## **Options for adding users**

You can [add users manually](/manage-users/add-and-edit/add-and-edit-users/), [import them from a CSV file](/manage-users/add-and-edit/import-users-in-bulk/), or add them [via API](/kinde-apis/management#tag/users/post/api/v1/user). If you are transferring user details from another service, such as Auth0, you need to obtain the details from the service before you can import.

## **Permissions and roles**

Permissions and roles are defined at the ‘Business’ level in your Kinde account - which is the global level; but they are applied per user at an ‘organization’ level. This means you just have to create them once and they are made available across your whole business structure.

Kinde provides the ability to set individual [permissions](/manage-users/roles-and-permissions/user-permissions/) at a user level, and to create [roles](/manage-users/roles-and-permissions/user-roles/) (sets of permissions) for easier user management.

A user can be assigned multiple roles, and assigned permissions on top of these. We recommend you work out a model for managing this, starting with basic permissions.

You can [include user roles in access tokens](/manage-users/roles-and-permissions/user-roles/#add-roles-to-the-access-token).

**Recommended approach**

While everyone’s needs are different, we recommend you write your code based on permissions, not roles, as it gives you more control and will scale better when you are managing a lot of users.
