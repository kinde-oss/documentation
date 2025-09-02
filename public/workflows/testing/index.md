
It is common that you would like to test your workflow code before you make it live for your end users. Kinde provides a few ways to do this.

## Use environments

You can set up different environments in Kinde to test your code before you make it live. This is useful for testing new features or changes to your workflow code without affecting your production environment.

To take advantage of this, we recommend you [add a second environment](/build/environments/environments/#add-an-environment) in Kinde (this is included on all plans).

Connect your GitHub repo to this environment and ensure everything works as expected before syncing the branch to your production environment.

You can make use of the [environment variables](/build/env-variables/store-environment-variables/) feature to set up different configurations for each environment to ensure seamless switching.

## Use preview mode

<Aside type="upgrade">

Only users on eligible plans can preview workflows before they go live. This option needs to be switched on in **Settings > Environment > Git repo**.

</Aside>

Preview mode allows you to test your workflow code in your production environment without affecting your live deployment.

See the [preview workflows](/workflows/testing/preview-workflows/) article for more information on how to use this feature.
