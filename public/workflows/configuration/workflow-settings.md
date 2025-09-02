
Every workflow file must export a configuration object named `workflowSettings` that defines how your workflow behaves.

## Example configuration

```js
export const workflowSettings = {
  bindings: {"kinde.env": {}, "kinde.fetch": {}, url: {}},
  failurePolicy: {action: "continue"},
  id: "hubspotSync",
  name: "HubSpot sync",
  trigger: "user:tokens_generation"
};
```

## API reference

### `bindings` (object)

Kinde helper methods to access within your workflow code. See [bindings](/workflows/configuration/bindings/) for more details.

### `failurePolicy` (object)

Defines behavior when workflow execution fails (for example, during fetch timeouts or exceptions).

### `id` (string)

Unique identifier for the workflow.

### `name` (string)

Display name shown in the Kinde admin area.

### `trigger` (string)

Event that starts the workflow (for example, `user:tokens_generation`).
