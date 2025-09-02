
The quickest way to see an end-to-end example is to follow this guide. It will help you set up your project and create your first workflow.

## Prerequisites

- A Kinde account with an application set up
- A GitHub account to host your code.

## 1. Clone the base template

Sign in to your GitHub account and navigate to [Kinde base workflow template](https://github.com/kinde-starter-kits/workflow-base-template). Click the green **Use this template button** and select "Create a new repository".

This will create a new repository in your GitHub account with the base template code.

It contains a basic workflow that logs out "Hello, world!" when a user authenticates.

## 2. Connect your GitHub repository to Kinde

Sign in to your Kinde account and navigate to **Settings > Git repo**. Select **Connect GitHub** and follow the instructions to connect your GitHub account to Kinde.

When you select the repository you just created, Kinde will automatically sync the code and create a new workflow for you.

## 3. View your first workflow

Navigate to Workflows in the Kinde admin area. You should see a new workflow called `Workflow 1`. Select the workflow to see the details and deployments. Select on **Runtime logs** to view the logs for the workflow. This should currently be empty.

## 4. Test your workflow

Assuming you have a Kinde application set up, you can test your workflow by signing in to your application. This will trigger the workflow and a new runtime log entry will be available to view. Click on the new log entry to see "Hello, world!

## 5. That's it!

You have successfully created your first Kinde workflow! You can now modify the workflow code to do whatever you like or add more workflows.

### Next steps

- Explore the [Kinde workflows documentation](/workflows/about-workflows/) to learn more about how workflows work, the available triggers, and how to create more complex workflows.
- Dive into example workflows in the [Kinde workflow examples GitHub repository](https://github.com/kinde-starter-kits/workflow-examples)
