// src/app/api/graphql/route.js
import { createYoga } from "graphql-yoga";
import schema from "@/lib/schema";

export const runtime = "edge";

const yoga = createYoga({
  schema,
  playground: true,
  graphqlEndpoint: "/api/graphql",
});

export async function GET(req) {
  const url = new URL(req.url);
  const queryParam = url.searchParams.get("query");
  const cache = caches.default;
  const params = queryParam;
  const cacheKey = new Request(`https://products?${params.toString()}`).url;
  const cachedResponse = await cache.match(cacheKey);
  console.log("params", cacheKey, cachedResponse)
  if (cachedResponse) {
    return cachedResponse;
  }
  const response = await yoga.handle(req);
  const responseClone = response.clone();
  await cache.put(cacheKey, responseClone, {
    expirationTtl: 300,
  });
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", "public, max-age=30, stale-while-revalidate=10");
  return new Response(response.body, {
    status: response.status,
    headers: headers,
  });
}

export async function POST(req) {
  return yoga.handle(req);
}
