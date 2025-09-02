
This topic is about setting user access policies at the environment level. If you want to apply user access policies per organization, see [Set access policies for an organization](/build/organizations/organization-access-policies/)

This topic covers the following tasks:
- Allow anyone to sign-up for an account 
- Create an organization when someone signs up (for B2B businesses usually)
- Allow only users from specific domains to sign up (i.e. restrict sign up based on email domain)
- Enable profiles from social providers to sync with Kinde profiles (recommended if you allow social sign in)

## Set policies for all organizations

1. In Kinde, go to **Settings > Environment > Policies**.
2. If you want users to be able to sign up or register to your application, select **Allow self sign-up**.
3. If you want to restrict which domains can sign up to your applications, enter domains in the **Allowed domains** list. Use the format `domain.com` and not `https://www.domain.com`. If you leave this empty, users from any domain can sign up.
4. Choose if you want to **Allow organization creation on sign up**. This is common for B2B businesses.
5. Select **Sync user profiles on sign in** if you want to keep basic user profile data provided by third-party sources (like Google, GitHub, etc.) in sync with Kinde profiles. You only need to select this if you allow sign-up and sign-in using social providers.
6. Select **Save**.

## Policy setting quick reference

Note that global access policies can be overriden at the individual organization level if you are on a [Kinde Scale plan](https://kinde.com/pricing/) and activate the Advanced organization feature.

| To…                                                                                             | Do this…                                                                                          |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Allow anyone to sign up to your applications.                                                   | Select **Allow self sign-up**.                                                                    |
| Allow only people from `specificdomain.com` to sign up to your applications.                    | Select **Allow self sign-up** and enter the specificdomain.com into the **Allowed domains** list. |
| Allow anyone to sign up to your applications and create an organization if they are a business. | Select **Allow self sign-up** and **Allow organization creation on sign up**.                     |
