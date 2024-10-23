// src/app/api/graphql/route.js
import { createYoga } from 'graphql-yoga';
import schema from '@/lib/schema';

export const runtime = 'edge';

const yoga = createYoga({
  schema,
  playground: true,
  graphqlEndpoint: '/api/graphql',
});

export async function GET(req) {
  return yoga.handle(req);
}

export async function POST(req) {
  return yoga.handle(req);
}
