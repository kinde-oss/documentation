
Trigger: `user:plan_selection`

This trigger fires when a plan selection request is made. This can be initiated by the user through the Kinde self-serve portal or via the Kinde Management API.

This is not a provisioning workflow, this occurs before plan selection or any payments are processed.

This event is triggered when:

- the user selects a new plan in the Kinde self-serve portal
- changing a customers plan via the Kinde Management API

It does not trigger when a plan is automatically assigned to a customer, such as when they sign up for the first time.

## Example use cases

### Check if customer is eligible to change plan

You may want to check if the customer is eligible to change their plan based on certain criteria. For example, if they are trying to downgrade to a plan with a lower usage usage allowance that their current plan but they are already breaching the limits.

## Workflow code

### Plan binding

The [kinde.plan](/workflows/bindings/plan-binding/) binding is used for various plan related events such as to prevent plan change requests.

### Sample event object

The main argument provided to your code is the Kinde workflow `event` object which has two keys `request` and `context`. This gives you access to the reason the workflow was triggered. Here's an example:

```json
{
  "request": {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0",
    "ip": "192.168.0.1"
  },
  "context": {
    "domains": {
      "kindeDomain": "https://example.kinde.com" // Your Kinde domain
    },
    "billing": {
      "currentPlanCode": "professional", // plan they are changing from
      "requestedPlanCode": "free" // plan they are changing to
    },
    "user": {
      "id": "kp_1234566" // the user ID
    },
    "organization": {
      "code": "org_123456" // the organization code if applicable
    },
    "workflow": {
      "trigger": "user:plan_selection"
    }
  }
}
```

### Example workflows

See examples in GitHub:

[Deny plan change request](https://github.com/kinde-starter-kits/workflow-examples/blob/main/planSelection/denyPlanChangeWorkflow.ts) - Deny a plan change request from a user and return the reasons for rejecting the request.
