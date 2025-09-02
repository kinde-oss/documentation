
If you secure your authentication setup with SAML certificate and private key, you’ll need to update or refresh these periodically.

Your IdP might issue new certificates, or you can generate a certificate and private key yourself. See the [main SAML topic](/authenticate/enterprise-connections/custom-saml/#optional-signed-certificate-and-private-key).

1. In Kinde, go to **Settings > Authentication**.
2. In the **Enterprise connections** section, select **Configure** on the SAML tile.
3. Scroll to the **Sign SAML request** section and override the **Signing certificate** and **Private key** with the new certificate content.
4. Select **Save**.
