# Hall Analytics Integration Guide for Astro Documentation Site

This guide explains how to integrate [Hall Analytics](https://docs.usehall.com/) with your Astro documentation site to track web traffic and understand visiting behavior, especially from AI assistants and crawlers.

## Overview

Hall Analytics provides:
- **AI Traffic Analytics** - Track visits from conversational AI platforms
- **Crawler Detection** - Identify AI assistants, agents, and crawlers
- **Referral Analysis** - Understand traffic sources and patterns
- **Real-time Tracking** - Monitor web traffic as it happens

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with your Hall API key:

```bash
# Hall Analytics Configuration
HALL_API_KEY=your_hall_api_key_here
```

### 2. Get Your Hall API Key

1. Sign up at [Hall Dashboard](https://app.usehall.com)
2. Create a new project
3. Copy your API key from the dashboard
4. Add it to your `.env` file

### 3. Implementation

The integration has been implemented in `src/middleware.ts` and will automatically:

- **Track all page visits** to your documentation
- **Extract IP addresses** from various proxy headers
- **Capture request headers** for detailed analytics
- **Send data asynchronously** without blocking page loads
- **Handle errors gracefully** without affecting user experience

## How It Works

### Analytics Data Collected

For each page visit, the middleware sends the following data to Hall:

```typescript
{
  request_path: "/docs/get-started/",
  request_method: "GET",
  request_ip: "192.168.1.1",
  request_headers: {
    "User-Agent": "Mozilla/5.0...",
    "Host": "docs.kinde.com",
    "Referer": "https://google.com",
    "Accept-Language": "en-US,en;q=0.9",
    // ... additional headers
  },
  request_timestamp: 1703123456789
}
```

### IP Address Detection

The middleware intelligently extracts IP addresses from multiple headers to handle various hosting setups:

- `x-forwarded-for` - Standard proxy header
- `x-real-ip` - Nginx and other proxies
- `cf-connecting-ip` - Cloudflare
- Fallback to `127.0.0.1` for local development

### Asynchronous Tracking

Analytics tracking happens asynchronously to ensure:

- **No performance impact** on page load times
- **Non-blocking requests** to Hall's API
- **Graceful error handling** if Hall is unavailable
- **User experience remains smooth**

## Features

### AI Traffic Detection

Hall specializes in detecting and analyzing traffic from:

- **ChatGPT and other AI assistants**
- **AI-powered crawlers and bots**
- **Conversational AI platforms**
- **AI agents and automation tools**

### Comprehensive Analytics

Track detailed information about:

- **Page visits and navigation patterns**
- **User agents and device information**
- **Referral sources and traffic origins**
- **Geographic and temporal patterns**
- **AI vs human visitor differentiation**

## Configuration Options

### Custom Headers

You can modify which headers are tracked by editing the `requestHeaders` object in the middleware:

```typescript
const requestHeaders = {
  'User-Agent': request.headers.get('user-agent'),
  'Host': request.headers.get('host'),
  'Referer': request.headers.get('referer'),
  // Add or remove headers as needed
};
```

### Selective Tracking

To track only specific pages or exclude certain paths:

```typescript
// In the middleware function
if (url.pathname.startsWith('/docs/') && !url.pathname.includes('/private/')) {
  trackAnalytics(request, url).catch(error => {
    console.error('Hall analytics tracking failed:', error);
  });
}
```

### Custom Analytics Data

Extend the analytics payload with custom data:

```typescript
body: JSON.stringify({
  request_path: requestPath,
  request_method: requestMethod,
  request_ip: requestIp,
  request_headers: requestHeaders,
  request_timestamp: Date.now(),
  // Add custom fields
  custom_data: {
    section: getSectionFromPath(requestPath),
    user_type: detectUserType(requestHeaders),
    content_type: getContentType(requestPath)
  }
})
```

## Monitoring and Debugging

### Enable Debug Logging

Add debug logging to monitor analytics tracking:

```typescript
// In the trackAnalytics function
console.log('Tracking analytics for:', requestPath);
console.log('IP detected:', requestIp);
console.log('User agent:', requestHeaders['User-Agent']);
```

### Check Analytics Dashboard

Monitor your analytics data in the [Hall Dashboard](https://app.usehall.com):

- **Real-time traffic** from AI platforms
- **Visitor behavior patterns**
- **Traffic source analysis**
- **AI vs human visitor metrics**

## Performance Considerations

### Minimal Impact

The integration is designed for minimal performance impact:

- **Asynchronous tracking** - doesn't block page loads
- **Lightweight payload** - only essential data sent
- **Error isolation** - failures don't affect user experience
- **Efficient headers** - only relevant headers captured

### Caching Considerations

If you use caching (CDN, etc.), ensure analytics still work:

- **Cache headers** don't affect tracking
- **Analytics run server-side** regardless of caching
- **Each request** is tracked even if content is cached

## Troubleshooting

### Common Issues

1. **Analytics not appearing in dashboard**
   - Verify `HALL_API_KEY` is set correctly
   - Check network requests in browser dev tools
   - Ensure no firewall blocking requests to `analytics.usehall.com`

2. **Performance concerns**
   - Analytics are asynchronous and non-blocking
   - Monitor server logs for any errors
   - Consider rate limiting if needed

3. **Missing IP addresses**
   - Check your hosting provider's proxy headers
   - Verify `x-forwarded-for` or similar headers are set
   - Test with different hosting environments

### Debug Mode

Enable detailed logging for troubleshooting:

```typescript
// Add to middleware for debugging
console.log('Hall API Key present:', !!HALL_API_KEY);
console.log('Request URL:', url.toString());
console.log('Headers:', Object.fromEntries(request.headers.entries()));
```

## Production Deployment

### Environment Setup

1. **Set environment variables** in your hosting platform
2. **Verify API key** is correctly configured
3. **Test analytics** in staging environment
4. **Monitor dashboard** for incoming data

### Security Considerations

- **API key security** - keep your Hall API key secure
- **HTTPS required** - ensure all requests use HTTPS
- **Header sanitization** - sensitive headers are filtered out
- **Rate limiting** - consider implementing if needed

## Support

- **Hall Documentation**: [docs.usehall.com](https://docs.usehall.com/)
- **Hall Dashboard**: [app.usehall.com](https://app.usehall.com/)
- **Astro Middleware**: [docs.astro.build/en/guides/middleware/](https://docs.astro.build/en/guides/middleware/)

## Example Analytics Dashboard

Once integrated, you'll be able to see in your Hall dashboard:

- **AI Traffic Overview** - percentage of AI vs human visitors
- **Popular Pages** - which documentation pages are most visited
- **Traffic Sources** - where visitors are coming from
- **User Behavior** - how visitors navigate your documentation
- **Real-time Activity** - live traffic monitoring

This integration provides valuable insights into how your documentation is being used, especially by AI platforms and automated tools. 