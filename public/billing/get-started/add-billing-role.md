
Skip this step if you sell your services to individuals (B2C).

If you are a B2B business, your customers in Kinde are referred to as organizations. These can be created:
* via API
* manually in the Kinde admin area
* via the auth flow if you have enabled the relevant settings and pass `is_create_org` as a query parameter in the authentication URL.

In order to manage billing for the organization, create a default billing role (with relevant permissions) to assign to a user in the organization. 

1. Go to **Settings > Roles** and select **Add role**. The **Add role** window opens.
    
    ![Roles screen for billing owner](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/96415552-a11b-4be3-e644-d9eaa2af6700/public)
    
2. Name the role, for example, `Billing Admin` , and enter a description and **Key**.
3. If you allow organizations to self-sign up, select the **Assign to the creator** option.
4. In the **System permissions** section, ensure the **org:write:billing** system permission is selected.
5. Select **Save**.
    
## Assigning the role

If you have configured Kinde to allow organizations to self-sign up, and selected to apply this role to the "Creator", then this role will now be automatically assigned to users who create an organization as part of the authentication flow. Alternatively, you can assign the billing admin role to organization members via API or in the Kinde dashboard. 

You can add the permissions to any of your custom roles and mix and match the system permissions to work for your needs.

**Next:** [Step 2 Connect to Stripe and set policies](/billing/get-started/connect-to-stripe/)
