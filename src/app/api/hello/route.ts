import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const ctx:any = getRequestContext();
  const kv = ctx.env.posts;
  await kv.put('exampleKey', 'This is a test value');
  const value = await kv.get('exampleKey');
  const responseText = `Hello World. Value from KV: ${value}`;
  return new Response(responseText);
}
