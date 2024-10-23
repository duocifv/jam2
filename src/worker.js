// src/worker.js
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    if (request.method === 'GET' && request.url.endsWith('/api/alive')) {
      return new Response('OK', { status: 200 });
    }
    return new Response('Not Found', { status: 404 });
  }
  