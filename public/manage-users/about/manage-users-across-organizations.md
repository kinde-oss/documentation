
If you have [multiple organizations](/build/organizations/multi-tenancy-using-organizations/) set up, you can easily switch the organization a user belongs to and add them to other organizations.

- to do this per user, following the procedure below.
- to add users to an organization in bulk, [re-import the users](/manage-users/add-and-edit/import-users-in-bulk/) and include the external_organization_id with the CSV.

## **Move a user between organizations**

1. In Kinde, go to **Users**. A list of all your organization’s users shows.
2. Find the user in the list.
3. Select their name to open their profile.
4. Check and uncheck the boxes to add and remove them from an organization.
5. Select **Save**.
6. You will need to [separately add roles and permissions](/manage-users/roles-and-permissions/apply-roles-and-permissions-to-users/) for this user in the organization.

If a user belongs to multiple organizations, they will be prompted to select the organization they want to access when they sign in.

## Sign in experience for users in multiple organizations

If a user belongs to multiple organizations, they will be prompted to select an organization when they sign in. If you use enterprise authentication, users will be recognized by their email domain and will be forwarded to the correct identity provider.
