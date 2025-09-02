
Here's some tips to ensure you use API keys with security and performance in mind.

## Security

- **Validate scopes**: always check that a key has the required scopes for the requested action.
- **Cache verification results**: cache positive verification results briefly to reduce load and latency.
- **Log verification attempts**: record verification attempts and outcomes for auditing.
- **Rotate API keys**: rotate keys on a regular cadence and after suspected exposure. See (/manage-your-apis/add-manage-api-keys/rotate-api-keys/)
- **Revoke keys**: promptly revoke keys that are no longer needed. See (/manage-your-apis/add-manage-api-keys/revoke-api-keys/)

## Performance

- **Implement caching**: cache verification results for 5–10 minutes where appropriate.
- **Use async verification**: avoid blocking request handlers while waiting on verification.

## Monitoring

- **Track usage**: Monitor which keys are used most and when, in general and by specific customers.
- **Set up alerts**: Alert on spikes in failed verification attempts and unusual patterns.
- **Monitor performance**: Track verification latency and error rates over time.
