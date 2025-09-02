
From time to time, you may need to manually add metered usage for an individual customer. You can do this via the Kinde API.

Adding usage values requires two key pieces of information:

- your customer's agreement ID
- the feature code you want to record usage against

## Get the agreement ID

- [Via API](https://docs.kinde.com/kinde-apis/management/#tag/billing-agreements/get/api/v1/billing/agreements/). Include the `billing` expand parameter in your request to access the agreement ID.

- Via the Kinde UI - Open the user or organization record in Kinde and select **Billing** in the menu. The customer agreement shows as part of the subscription details. 

![Example of agreement ID in Kinde](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/6488a69d-a47d-413b-a3b3-47a39398b600/public)

## Get the feature ID

1. Open the plan the feature belongs to.
2. Edit the feature (to view it) in the plan.
3. Take note of the **Key**.

## Submit usage data

POST the usage to the [meter usage record API](https://docs.kinde.com/kinde-apis/management/#tag/billing-meter-usage/post/api/v1/billing/meter_usage/) including the feature code and agreement ID to record a usage value.

<Aside>

Usage gets assigned to your customer's current billing cycle. Any usage submitted after a billing cycle ends will be recorded against the next billing cycle.

</Aside>
