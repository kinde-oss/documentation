
Trigger: `user:pre_registration`

This trigger fires after the user has completed single factor authentication (e.g email + password or Google) but before a user record is created in Kinde.

<Aside type="warning">

At this stage the user is not authorized - we have not checked organization access or carried out MFA.

</Aside>

## Example use cases

### IP address checks

Block user registrations from suspicious IP addresses.

### Block disposable email addresses

Refuse disposable email addresses to prevent spam registrations.

## Workflow code

### Sample event object

The main argument provided to your code is the Kinde workflow `event` object which has two keys `request` and `context`. This gives you access to the reason the workflow was triggered and additional relevant datapoints. Here's an example:

```json
{
  "request": {
    "ip": "***",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0",
    "authUrlParams": {
      "state": "b9ea1131f7796a10abe8eac1b48c715575a0ffd349fb9c602e13d824",
      "orgCode": "org_12345667",
      "clientId": "cad2d86b1ac645e1957889fcb1eff0f9",
      "redirectUri": "http://localhost:3000"
    }
  },
  "context": {
    "auth": {
      "connectionId": "conn_0194ee03c226d48c6858d5a412359ed2"
    },
    "domains": {
      "kindeDomain": "https://newbus.localkinde.me"
    },
    "workflow": {
      "trigger": "user:pre_registration"
    },
    "application": {
      "clientId": "cad2d86b1ac645e1957889fcb1eff0f9"
    }
  }
}
```

### Example workflows

See examples on GitHub:

[Prevent disposable email sign ups](https://github.com/kinde-starter-kits/workflow-examples/blob/main/preUserRegistration/blockDisposableEmails.ts) - Check the email address against a list of disposable email domains and block the registration if it matches.
