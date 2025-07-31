import { defineMiddleware } from "astro:middleware";

// Hall Analytics Configuration
const HALL_API_KEY = import.meta.env.HALL_API_KEY;

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url } = context;
  
  // Track analytics data asynchronously (don't block the request)
  if (HALL_API_KEY) {
    trackAnalytics(request, url).catch(error => {
      console.error('Hall analytics tracking failed:', error);
    });
  }

  return next();
});

async function trackAnalytics(request: Request, url: URL) {
  const requestPath = url.pathname + url.search;
  const requestMethod = request.method;
  
  // Extract IP address from various headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  const requestIp = forwardedFor?.split(',')[0]?.trim() ||
                   realIp ||
                   cfConnectingIp ||
                   '127.0.0.1';

  // Extract relevant headers for analytics
  const requestHeaders = {
    'User-Agent': request.headers.get('user-agent'),
    'Host': request.headers.get('host'),
    'Referer': request.headers.get('referer'),
    'Accept-Language': request.headers.get('accept-language'),
    'Accept': request.headers.get('accept'),
    'Sec-Ch-Ua': request.headers.get('sec-ch-ua'),
    'Sec-Ch-Ua-Mobile': request.headers.get('sec-ch-ua-mobile'),
    'Sec-Ch-Ua-Platform': request.headers.get('sec-ch-ua-platform'),
  };

  // Send analytics data to Hall
  await fetch('https://analytics.usehall.com/visit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${HALL_API_KEY}`,
    },
    body: JSON.stringify({
      request_path: requestPath,
      request_method: requestMethod,
      request_ip: requestIp,
      request_headers: requestHeaders,
      request_timestamp: Date.now()
    }),
  });
} 