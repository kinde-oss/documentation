
To ensure your applications remain secure, you can periodically rotate the Client secret stored in the Kinde-side application.

You can only do this for back-end and machine-to-machine applications.

Note that you can only rotate a client secret by completely deactivating the old one. So you must update any dependent apps, connections, and services with the new secret ASAP.

## Rotate client secret in Kinde

1. In Kinde, go to **Settings > Applications**.
2. Select **View details** on the relevant application.
3. Scroll to the **Admin actions** section.
4. If you have previously retained a Client secret you’ll need to delete the previous secret first:
   1. Take a copy of the previous secret if you want to.
   2. Select **Delete previous client secret.**
5. Select **Rotate**. A confirmation window opens.
6. If you want, opt in to rotate the client secret and retain the old secret. You may need to [upgrade plans](https://kinde.com/pricing/) to do this.
7. If you don’t want to retain the previous secret, or you don’t want to upgrade, leave the switch off.
8. Select **Rotate client secret**.
9. Update any dependent apps, connections, and services with the new secret.
