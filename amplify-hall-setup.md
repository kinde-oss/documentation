# Hall Analytics Setup for AWS Amplify

## Environment Variable Setup

Since AWS Amplify doesn't support server-side middleware, we've implemented client-side analytics tracking. You need to set the environment variable in your Amplify console:

### 1. Set Environment Variable in Amplify

1. Go to your AWS Amplify Console
2. Navigate to your app → **Environment variables**
3. Add a new environment variable:
   - **Key**: `PUBLIC_HALL_API_KEY`
   - **Value**: Your Hall API key
4. **Redeploy** your application

### 2. Verify the Setup

After redeploying, you should see:

1. **Browser Console Logs**: Open browser dev tools and look for:
   ```
   [Hall Analytics] Page view tracked: /get-started/guides/first-things-first/
   ```

2. **Hall Dashboard**: Check your [Hall dashboard](https://app.usehall.com) for incoming data

### 3. Test the Integration

Visit your site and check:
- Browser console for tracking messages
- Hall dashboard for new visits
- Network tab for requests to `analytics.usehall.com`

## How Client-Side Tracking Works

The client-side implementation:

- **Tracks page views** when users visit pages
- **Captures browser data** (User-Agent, Referer, etc.)
- **Sends data asynchronously** to Hall
- **Works with static hosting** like Amplify
- **Handles navigation** in single-page app style

## Differences from Server-Side

| Aspect | Server-Side | Client-Side |
|--------|-------------|-------------|
| **IP Address** | Real server IP | Client IP (127.0.0.1) |
| **Hosting** | Requires server | Works with static hosting |
| **Performance** | No client impact | Minimal client impact |
| **Reliability** | Server-side execution | Depends on client JavaScript |

## Troubleshooting

### If no tracking appears:

1. **Check environment variable**: Ensure `PUBLIC_HALL_API_KEY` is set in Amplify
2. **Check browser console**: Look for Hall Analytics messages
3. **Check network tab**: Look for requests to `analytics.usehall.com`
4. **Verify API key**: Test with curl command from earlier

### Common issues:

- **Environment variable not set**: Add `PUBLIC_HALL_API_KEY` to Amplify
- **JavaScript disabled**: Client-side tracking won't work
- **Ad blockers**: May block analytics requests
- **CORS issues**: Should work with Hall's API

## Testing Commands

Test your API key manually:
```bash
curl -X POST https://analytics.usehall.com/visit \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"request_path":"/test","request_method":"GET","request_ip":"127.0.0.1","request_headers":{"User-Agent":"Test"},"request_timestamp":1234567890}'
```

## Next Steps

1. **Set the environment variable** in Amplify console
2. **Redeploy** your application
3. **Test by visiting** your site
4. **Check Hall dashboard** for incoming data
5. **Monitor browser console** for tracking messages 