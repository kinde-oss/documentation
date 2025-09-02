
Kinde’s billing feature comes with a dependency on [Stripe](https://stripe.com), which is a globally known and reliable payments processing platform. A new Stripe account is automatically created for you when you set up billing in Kinde.

<Aside type="warning">

You can’t currently connect your existing Stripe account, but you will be able to copy across your business information from your existing account to the new account. This is a Stripe-imposed limitation for third party integrations. We’re working on a migration strategy.

</Aside>

## Watch a quick video about how to connect to Stripe

<YoutubeVideo videoId="-TgYfXe2qrs" />

## Connect to Stripe

1. If you are testing billing, switch to your non-production environment. This will automatically trigger the use of a test Stripe account as well.
2. Go to **Settings > Environment > Billing**.
3. Select **Connect Stripe account**. Kinde initiates the connection and adds the connection card.

   ![Stripe card connection in Kinde](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/f3797997-6681-41c8-a297-4a962d5d0500/public)

4. Select **Update Stripe information**. This kicks off a Stripe onboarding flow. You will see a Stripe-generated screen to enter details.

   ![Kinde Stripe onboarding flow start screen](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/71b08393-f43d-4f91-3268-7501e08d3f00/public)

   <Aside>

   If the Stripe flow doesn’t appear and you remain in the Kinde dashboard, select **Update Stripe information.**

   </Aside>

5. Enter the email that will be associated with the Stripe account and select **Submit**. Here’s what happens next, depending if you have a Stripe account already associated with your email address.

   1. **If you are in the test environment**, you’ll be prompted through a flow. You can continue or select **Return to Kinde**.
   2. **If you are in a production environment,** you will be asked if you want to use details from an existing Stripe account or make a new one:

      1. If you select existing, account details from the existing account will be used, but no other data will come across.
      2. If you select to make a new one, you will be prompted to enter all your business details. This can take a while.
      3. Follow the prompts as far as you want. Select **Return to Kinde**.

      <Aside>

      You can select **Return to Kinde** at any time. You do not have to set up the connection fully until you are ready to publish plans. Any time you want to complete the setup, select **Update Stripe information**.

      </Aside>

6. When you complete the Stripe onboarding, or opt out by selecting **Return to Kinde**, the connection card on the Kinde **Billing** page shows the connection status.

   ![Connection status on Kinde stripe card](https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/f4eb395b-069e-42c3-ab4f-d78cc52e8800/public)

   - `Connecting` means Stripe is still sending information to Kinde about the account status. It should not take long to sync.
   - `In progress` indicates that Stripe has connected to Kinde, but still requires some additional details from you in order to fully set up the account. Select **Update Stripe information** to complete the Stripe onboarding. You need to do this before plans can be made available to your customers.
   - `Connected` means Stripe is successfully syncing data with Kinde and you’re ready to publish plans.

## Set billing policies for cancellation and plan changes

After you have connected to Stripe, you can set policies to control what happens when a customer cancels or changes their plan. The policies are for deciding if you charge or forgive unpaid usage of metered features, or if you refund or retain unused, paid subscription days.

1. In the **Policies** section, choose the settings.
2. Select **Save**.

**Next:** [Step 3 Set default billing currency](/billing/get-started/default-billing-currency/)
