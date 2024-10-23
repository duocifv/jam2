// src/app/api/graphql/route.js
import { createYoga } from "graphql-yoga";
import schema from "@/lib/schema";

export const runtime = "edge";

const yoga = createYoga({
  schema,
  playground: false,
  graphqlEndpoint: "/api/graphql",
});

export async function GET(req) {
  const url = new URL(req.url);
  const queryParam = url.searchParams.get("query");
  
  if (!queryParam) {
    return new Response(JSON.stringify({ error: "Query parameter is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const cache = caches.default;
  const cacheKey = `https://products?query=${encodeURIComponent(queryParam)}`;
  
  const cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await yoga.handle(req);
  const result = await response.text();

  const newResponse = new Response(result, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });

  const responseClone = newResponse.clone();
  await cache.put(cacheKey, responseClone, {
    expirationTtl: 300,
  });

  newResponse.headers.set("Cache-Control", "public, max-age=30, stale-while-revalidate=10");

  return newResponse;
}




export async function POST(req) {
  const cache = caches.default;
  const cacheKey = new Request(`https://products?query=1`).url;
  const cachedResponse = await cache.match(cacheKey);
  console.log("query", cachedResponse)
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await yoga.handle(req);
  const responseBody = await response.json();
  const result = new Response(JSON.stringify(responseBody), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      Expires: new Date(Date.now() + 3600 * 1000).toUTCString(),
    },
  });

  await cache.put(cacheKey, result);

  return result;
}
