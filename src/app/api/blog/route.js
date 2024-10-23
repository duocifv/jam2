export const runtime = "edge";

export async function GET(request) {
  const cache = caches.default; // Lấy cache mặc định

  const cacheKey = new Request(
    "https://6717b3deb910c6a6e0298d04.mockapi.io/blog/"
  );

  // Kiểm tra xem dữ liệu có trong cache không
  const cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) {
    // Nếu có dữ liệu trong cache, trả về dữ liệu đó
    return cachedResponse;
  }

  try {
    // Fetch dữ liệu từ MockAPI
    const response = await fetch(cacheKey);

    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu từ MockAPI");
    }

    const data = await response.json();

    // Lưu dữ liệu vào cache với TTL (Time to Live) là 1 giờ (3600 giây)
    const newResponse = new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public,max-age=315360000'", // Cache trong 1 giờ
      },
    });

    // Lưu dữ liệu vào cache
    await cache.put(cacheKey, newResponse.clone());

    // Trả về dữ liệu với cache header
    return newResponse;
  } catch (error) {
    console.error("Lỗi:", error);

    // Trả về lỗi nếu có vấn đề xảy ra
    return new Response(
      JSON.stringify({ message: "Đã xảy ra lỗi khi fetch dữ liệu" }),
      { status: 500 }
    );
  }
}
