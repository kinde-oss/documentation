
This page provides an overview of all the folder and file conventions for Kinde workflows, and recommendations for organizing your project.

## Folder and file conventions

Your workflow code can live either in a brand new repo or it can co-exist with your main application code.

### Top-level folders

Top-level folders are used to organize your workflow code

```
kindeSrc/
  └── environment/
    └── workflows/
```

| Folder name   | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `kindeSrc`    | The root directory of your custom code. Allows for co-locating Kinde code with your application code |
| `environment` | The context for the workflow                                                                         |
| `workflows`   | Houses all your workflow code                                                                        |

### Top-level files

Top-level files are used to configure your project and manage dependencies

| File name      | Description                  |
| -------------- | ---------------------------- |
| `package.json` | Project dependencies         |
| `kinde.json`   | Configuration file for Kinde |

### Workflow files

The files which contain your workflow code. These files are executed when the workflow is triggered.

| File name  | Extension   | Description                                                                             |
| ---------- | ----------- | --------------------------------------------------------------------------------------- |
| `Workflow` | `.ts` `.js` | Call the file whatever you like so long as it ends with "Workflow" e.g `m2mWorkflow.ts` |

## Organizing your project

Kinde is mostly unopinionated about how you organize and colocate your project files. So long as you follow the conventions above, you can organize the workflow files within the `workflows` folder however you like.
