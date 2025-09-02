
<Aside type="upgrade">

Only users on eligible plans can preview workflows before they go live. This option needs to be switched on in **Settings > Environment > Git repo**.

</Aside>

You can preview a workflow by testing one of your code deployments. For this you need to get the Workflow deployment ID and password from Kinde.

## Copy workflow testing details for code preview

If you don't have the right plan to preview and test your code in production, we recommend you test it in a [staging environment](/workflows/testing), before you make it live.

1. Go to **Workflows**.
2. Select a workflow in the list to open it. The **Summary** page opens.
3. Select **Deployments** in the menu. A list of all your deployments shows.
4. Select the deployment you want to test. The **Deployment details** page opens.
5. Select **Preview** in the menu and copy the workflow deployment ID and password that you need for testing.
6. Copy these and apply them in your application. Use them when you test the workflow.

## Use the workflow deployment ID in your code

The deployment ID is used to identify the workflow deployment you want to test. You can use this in your code to make sure you are testing the right deployment.

This should be passed as part of the authorization URL:

```
https://<your_kinde_subdomain>.kinde.com/oauth2/auth
?response_type=code
&client_id=<your_kinde_client_id>
&redirect_uri=<your_app_redirect_url>
&scope=openid%20profile%20email
&state=abc
&deploy_id=<your_workflow_deployment_id>
```

## Use the password

If the `deploy_id` URL parameter is passed, then Kinde will display a password prompt at the start of the auth flow. This is the password you copied from the **Deployment details** page. When entered the auth flow will continue as normal and the workflow will be triggered.
