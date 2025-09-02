
You can reset multi-factor authentication (MFA) for individual users. You might do this because:

- they can’t access their authenticator app.
- they need to reset or re-install an authenticator app.
- they have previously opted out of MFA but now want to enable it.

They should be able to use their recovery codes to get in to the system in the meantime.

## **To reset MFA for a user**

1. In Kinde, go to the **Users** page.
2. Select the user’s name to view their details. 
3. Select **Multi-factor auth** in the menu. Depending on how MFA is set up in the environment and how many organizations the user belongs to, you will see:
    - a section for the default MFA (environment-level settings), if this applies.
    - a section for MFA for each organization the user belongs to.
4. Select the three dots next to the relevant MFA method and then select **Reset multi-factor auth**. A confirmation message opens.
5. Select **Reset**.
6. If a user has multiple MFA methods set up, you need to remove each method to fully reset MFA for the environment or organization. Repeat from step 4.

The next time the user signs in to the environment or organization they will be prompted to set up their MFA. If the user has previously opted out of MFA, they will be prompted to opt-in again before setting up MFA.
