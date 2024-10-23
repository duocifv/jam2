import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  // const ctx:any = getRequestContext();
  // const kv = ctx.env.posts;
  // await kv.put('exampleKey', 'This is a test value');
  // const value = await kv.get('exampleKey');
  // const responseText = `Hello World. Value from KV: ${value}`;
  return new Response("responseText");
}


// headers: {
//   "Content-Type": "application/json",
//   "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
// },

// headers: {
//   "Content-Type": "application/json",
//   "Cache-Control": "private, max-age=0, no-cache, no-store, must-revalidate",
//   "Pragma": "no-cache", // Để hỗ trợ trình duyệt cũ
//   "Expires": "0", // Để phản hồi đã hết hạn ngay lập tức
// },
