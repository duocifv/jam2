import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`https://6717b3deb910c6a6e0298d04.mockapi.io/blog/2`);



    if (!response.ok) {
      throw new Error('Lỗi khi lấy dữ liệu từ MockAPI');
    }

    const data = await response.json();

    // Thiết lập các header cho cache
    const headers = new Headers();
    headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');

    // Trả về dữ liệu với cache header
    return NextResponse.json(data, {
      status: 200,
      headers: headers,
    });

  } catch (error) {
    console.error('Lỗi:', error);

    // Trả về lỗi nếu có vấn đề xảy ra
    return NextResponse.json({ message: 'Đã xảy ra lỗi khi fetch dữ liệu' }, { status: 500 });
  }
}
