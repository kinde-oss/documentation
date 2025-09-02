
Roles allow you to group [permissions](/manage-users/roles-and-permissions/user-permissions/) into buckets. A role in Kinde could represent a collection of permissions available to an `owner`, an `administrator`, a `member` or whatever role structure is relevant to your business.

This topic covers how to manage roles in the Kinde platform and [via the Kinde Management API](/kinde-apis/management#tag/roles).

## Important things to know about Kinde roles

- User roles are defined at the business level, but applied to users at an [organization](/build/organizations/orgs-for-developers/) level
- A user can have multiple roles per organization
- The same user can have [different roles in different organizations](/manage-users/about/manage-users-across-organizations/). They could have the `admin` and `owner` role in Org A and a `member` role in Org B
- We recommend you use permissions for controlling access to features within your application, then use roles to group the permissions.
- Roles (and permissions) cannot be assigned to a user unless they belong to an organization.

<Aside>

Tip: [Set default roles when a user signs up to an organization](/manage-users/roles-and-permissions/default-user-roles/)

</Aside>

## Add user roles in Kinde

1. In Kinde, go to **Settings > User Management > Roles**. The **User roles** page opens showing any user roles already defined.
2. Select **Add role**. The **Add role** window opens.
3. Give the role a **Name**. Keep it short and descriptive, so you can easily understand what it is for. For example, ‘Accounts management’.
4. Enter a **Description**. Describe what a user with this role can do. For example ‘Allows users to perform all basic accounts functions.’
5. Enter a **Key**. The key is how your code references the role in Kinde. It should be a word that is easy to reference in code and match in your product. You should also follow a naming convention for all roles to help maintain your code.
6. Select if the role should be assigned to all new users by default when they sign up.
7. Select the permissions that are included in the role by switching them on. See also [Define user permissions](/manage-users/roles-and-permissions/user-permissions/).
8. Select **Save**.

## **Edit user roles**

You can [update user roles via the Kinde Management API](/kinde-apis/management#tag/roles/patch/api/v1/roles/{role_id}) or using the procedure below.

User roles are dynamic and refreshed via the issued token. This means that any changes you make will be applied to all users assigned that role, the next time they sign in.

We don’t recommend editing role keys, once a role is in use. It will break the code link between your product and the defined role.

1. Go to **Settings > User Management > Roles**. If you already have roles, you’ll see a list of them.
2. Select the three dots next to the role you want to edit and choose **Edit**.
3. Make the changes you want and select **Save**.

## Delete user roles

You can [delete user roles via the Kinde Management API](/kinde-apis/management#tag/roles/delete/api/v1/roles/{role_id}) or using the procedure below.

When you delete a user role, you will remove the role as well as all the associated permissions from all users who are assigned that role. This can’t be reversed.

1. Go to **Settings > User Management > Roles**. Your list of roles is shown.
2. Select the three dots next to the role and choose **Delete**. A confirmation / warning message appears.
3. Select **Delete role**. The role is deleted permanently.

## **Add user roles via API**

You can add user roles via the Kinde API.

Use the [Add Organization User Role](/kinde-apis/management#tag/organizations/post/api/v1/organizations/{org_code}/users/{user_id}/roles) end point to assign a role to a user, and get the role IDs from the [Roles](/kinde-apis/management#tag/roles) endpoint.

## Add roles to the access token

When a user authorizes against an organization in Kinde, you can enable their roles to be returned as an array of IDs in the `roles` claim of the `access_token`. This is part of an additional claim.

### To add roles to tokens

1. Go to **Settings > Applications > [Your application] > Tokens**.
2. Scroll to the **Token Customization** section.
3. Select **Customize** on the **Access tokens** card.
4. Switch on **Roles (array**) in the **Additional claims** section.

Our SDKs commonly ship with a `getClaim` method to help with this. For example in React you could use something like:

```jsx
getClaim("roles");
// {name: "roles", value: ["admin", "owner"]}
```

## Other role-related functions in the Kinde Management API

- [View a list of roles](/kinde-apis/management#tag/roles/get/api/v1/roles)
- [View a list of permissions for a role](/kinde-apis/management#tag/roles/get/api/v1/roles/{role_id}/permissions)
- [Edit permissions for a role](/kinde-apis/management#tag/roles/patch/api/v1/roles/{role_id}/permissions)
- [Remove permissions from a role](/kinde-apis/management#tag/roles/delete/api/v1/roles/{role_id}/permissions/{permission_id})
