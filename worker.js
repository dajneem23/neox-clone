import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

// Configure asset handling
const DEBUG = false;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);
  
  // Redirects
  if (url.pathname === '/home' || url.pathname === '/index') {
    return Response.redirect(url.origin + '/', 301);
  }

  try {
    // Serve static assets from KV
    const options = {
      cacheControl: {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24, // 2 days
        bypassCache: false,
      },
    };

    // Add custom cache headers based on file type
    const response = await getAssetFromKV(event, options);
    const headers = new Headers(response.headers);
    
    // Security headers
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Cache headers based on file type
    const pathname = url.pathname;
    if (pathname.match(/\.(css|js|jpg|png|svg|webp)$/)) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }

    return new Response(response.body, {
      ...response,
      headers,
    });

  } catch (e) {
    // If asset not found, return 404.html
    if (!DEBUG) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        });
        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        });
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 });
  }
}
