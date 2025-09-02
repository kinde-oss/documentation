
To enable your custom code to override Kinde page design, you need to set up and connect a git repo for the design files. You must also be using a [custom domain](/build/domains/pointing-your-domain/) to run your custom code with Kinde.

## Connect your repo

1. Go to **Design > Custom code**.
2. Select the option to **Connect repo**. This will take you to the **Settings > Git Repo** page where you can manage your repo connection for design and workflows.
3. If you don’t already have a repo set up for workflows, select **Connect GitHub**.
4. Follow the prompts to connect a repo and branch.

## Option to enable code preview

If you are on the Kinde Plus or Scale plan, you can enable a code preview before you deploy new code to be live. This is helpful for checking the design before making it public in your production environment. If you have a free or Pro plan, we recommend you preview designs in a non-production environment before syncing in production.

## Set up the Git directory structure

Your directory structure should follow the following structure.

```jsx
myApp/
  ├── kindeSrc/
  │   └── environment/
  │       └── pages/
  │           └── (kinde)/
  │               └── <route>/
  │                   └── page.tsx
  ├── package.json
  └── kinde.json
```

In the above example, `<route>` is used to map your code to a rendered page in Kinde. For example `kindeSrc/environment/pages/(kinde)/(register)/page.tsx` will map to the register / sign up page in the authentication flow.

## Code status alerts

The home page of your Kinde dashboard shows a code alert status. You can see immediately if there are any concerns with your code. Select **View code status** to see if the issue is:

- a code sync problem
- a workflow code problem
- a design custom code issue
